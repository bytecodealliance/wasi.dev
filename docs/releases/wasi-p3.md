---
title: "WASI P3"
sidebar_position: 1
---

WASI P3 brings **native async** to WebAssembly components, moving asynchronous functionality that previously lived in the `wasi:io` package down into the Component Model itself. WASI P3 was released on June 11, 2026. This page provides an overview of what changed in WASI P3 and why.

## Why native async?

In WASI P2, asynchronous operations were modeled with the `wasi:io` package, which provided `pollable` resources, `input-stream` and `output-stream` types, and a `poll` function. This system worked well when a component communicated directly with a host or a single peer, but broke down when components were **composed** in a chain.

Consider a scenario where component A calls component B, which in turn calls the host:

```
A → B → Host
```

In WASI P2, component B could not forward wake-ups from the host's `pollable` to component A, because `pollable` is a resource scoped to a single component instance. B would have to actively poll just to relay readiness signals. In practice, the wake-up chain gets dropped. This is sometimes called the **sandwich problem**: WASI P2 could express async, but could not compose it across component boundaries.

WASI P3 solves this by pushing async into the Component Model's Canonical ABI. The runtime owns the scheduling and wake-up propagation, so async works correctly regardless of how many components sit between a producer and a consumer.

## New primitives

WASI P3 introduces three primitives built into the Component Model:

### `async func`

Functions can now be declared as asynchronous in WIT. The runtime manages scheduling and suspension.

```wit
// A WASI P3 HTTP handler
handle: async func(request: request) -> result<response, error-code>;
```

Bindings generators emit language-native async constructs: `async fn` in Rust, `Promise` in JavaScript, coroutines in Python.

### `stream<T>`

A typed, asynchronous data channel. Unlike `input-stream` and `output-stream` in WASI P2, a `stream<T>` is a **value** that can be passed across component boundaries.

```wit
// Reading from stdin in WASI P3
read-via-stream: func() -> tuple<stream<u8>, future<result<_, error-code>>>;
```

### `future<T>`

A single-value async completion. Where WASI P2 used `pollable` resources, WASI P3 uses `future<T>` values.

```wit
// Writing to stdout in WASI P3
write-via-stream: func(data: stream<u8>) -> future<result<_, error-code>>;
```

## Common patterns

### The stream-plus-future pattern

A recurring pattern in WASI P3 pairs a `stream<T>` with a `future` that signals completion or error:

```wit
read-via-stream: func() -> tuple<stream<u8>, future<result<_, error-code>>>;
```

The stream delivers data incrementally. Once the stream closes, the future resolves to indicate whether the operation completed successfully or encountered an error. This pattern appears in stdin, filesystem reads, TCP receives, and directory listings.

### The write direction flip

In WASI P2, write operations gave you an `output-stream` that you wrote into. In WASI P3, the direction is reversed: you **pass in** a `stream<u8>` and receive a `future<result>` that resolves when the write completes. This applies to stdout, stderr, filesystem writes, and TCP sends.

```wit
// WASI P2: get a stream, write to it
get-stdout: func() -> output-stream;

// WASI P3: pass data in, get a completion future
write-via-stream: func(data: stream<u8>) -> future<result<_, error-code>>;
```

## Worlds

WASI P3 defines the following worlds across its core proposals:

- `wasi:cli/command` targets command-line programs that export an `async func run()`, with access to filesystem, environment variables, stdin/stdout/stderr, exit, and clocks/random/sockets imports.
- `wasi:http/service` targets HTTP servers that export an async `handler`, with imports from clocks, random, cli stdio, and the HTTP client interface. The `service` world replaces `wasi:http/proxy` from WASI P2.
- `wasi:http/middleware` extends `service` by also importing the handler interface, providing first-class support for request-path middleware components.

Each core proposal additionally exposes an `imports` world (`wasi:cli/imports`, `wasi:sockets/imports`, `wasi:filesystem/imports`, `wasi:clocks/imports`, `wasi:random/imports`) aggregating that package's interfaces for use by other worlds.

## What changed in each interface

### `wasi:io` (removed)

The entire `wasi:io` package has been removed. Its functionality is replaced by the Component Model's native `stream<T>`, `future<T>`, and `async func` primitives. There is no WASI P3 version of `wasi:io`.

| WASI P2 (`wasi:io`)              | WASI P3 (Component Model)           |
|------------------------------------|---------------------------------------|
| `resource pollable`                | `future<T>`                           |
| `resource input-stream`            | `stream<u8>`                          |
| `resource output-stream`           | `stream<u8>` (write direction)        |
| `poll(list<pollable>)`             | `await` on a future                   |
| `subscribe()` on resource          | return a `future` from the call       |
| `start-foo` / `finish-foo` pattern | `foo: async func(...)`                |

### `wasi:http`

HTTP saw the most dramatic restructuring in WASI P3.

**Resources dramatically simplified.** The `incoming-request`, `outgoing-request`, `incoming-response`, `outgoing-response`, `incoming-body`, `outgoing-body`, `future-trailers`, `future-incoming-response`, and `response-outparam` resources are all gone, replaced by unified `request` and `response` resources with `stream<u8>` bodies and `future` trailers.

**The handler is now an `async func`:**

```wit
// WASI P3 handler
handle: async func(request: request) -> result<response, error-code>;

// WASI P3 client
send: async func(request: request) -> result<response, error-code>;
```

**New worlds.** The `proxy` world has been replaced by `service`. A new `middleware` world both imports and exports the handler, providing first-class support for request-path middleware components.

**New header error variant.** The `header-error` variant gains `size-exceeded` for headers that exceed the runtime's configured size limit.

### `wasi:sockets`

**Interfaces consolidated from 7 to 2.** The `network`, `instance-network`, `tcp`, `tcp-create-socket`, `udp`, and `udp-create-socket` interfaces are consolidated into a unified `types` interface containing both `tcp-socket` and `udp-socket` resources. A separate `ip-name-lookup` interface handles DNS resolution.

**The `network` resource is removed.** Network access is now granted at the world level.

**Async operations are simplified.** All `start-connect`/`finish-connect` and `start-listen`/`finish-listen` pairs are replaced with single `async func` calls:

```wit
connect: async func(remote-address: ip-socket-address) -> result<_, error-code>;
```

**TCP `listen` returns a stream of sockets:**

```wit
listen: func() -> result<stream<tcp-socket>, error-code>;
```

**New error variant.** The `error-code` enum gains `connection-broken` (POSIX `EPIPE`), distinguishing writes that failed because the peer closed the connection from other reset or abort conditions.

### `wasi:cli`

stdin, stdout, and stderr use `stream<u8>` with the stream-plus-future pattern. The `run` function is now `async`:

```wit
run: async func() -> result;
```

A new shared `types` interface defines the `error-code` enum used across CLI interfaces.

The `wasi:cli/exit` interface now exposes both `exit(status: result)` and `exit-with-code(status-code: u8)`. The `exit-with-code` function was promoted from Phase 2 into the stable P3 interface in June 2026.

### `wasi:filesystem`

Nearly all `descriptor` methods are now `async func`. Streaming reads and writes use the stream-plus-future pattern, and directory listing returns `stream<directory-entry>`:

```wit
read-directory: func() -> tuple<stream<directory-entry>, future<result<_, error-code>>>;
```

The `error-code` enum gains a catch-all `other(option<string>)` variant for errors not captured by the existing variants.

### `wasi:clocks`

Interfaces and types have been renamed to align with POSIX and Rust `std::time` conventions:

| WASI P2       | WASI P3        |
|----------------|-----------------|
| `wall-clock`   | `system-clock`  |
| `datetime`     | `instant`       |

The `instant` record now uses `s64` for seconds (instead of `u64`), supporting pre-epoch timestamps.

The `subscribe-instant` and `subscribe-duration` functions (which returned `pollable`) are replaced with `async func` equivalents:

```wit
wait-until: async func(when: mark);
wait-for: async func(how-long: duration);
```

### `wasi:random`

The `len` parameter is renamed to `max-len` on `get-random-bytes` and `get-insecure-random-bytes`. The rename reflects a semantic change: implementations may return fewer bytes than requested, so callers should loop until they have collected the desired amount.

## Runtime and tooling support

WASI P3 support is available in:

- **[Wasmtime](https://wasmtime.dev/) 43+** for native execution
- **[jco](https://github.com/bytecodealliance/jco)** for JavaScript environments (streams support landed; futures support following)

Wasmtime v44 added initial `wasi:tls@0.3.0-draft` support. From v44 onward, `wasmtime serve` can serve P3 components when invoked with `-Sp3 -W component-model-async=y`, automatically falling back to the WASI P2 `wasi:http/proxy` world for components that don't export the P3 `service` world.

Runtimes verify WASI P3 conformance against the shared [`wasi-testsuite`](https://github.com/WebAssembly/wasi-testsuite). P3 coverage is now running on Wasmtime and jco across Linux, macOS, and Windows, with new tests landing weekly.

## Migrating from WASI P2

Migration to WASI P3 is not required in order to use a P3-capable runtime. As noted above, `wasmtime serve` runs both P3 and P2 components from the same binary, dispatching per component. The [roadmap](../roadmap.md) also notes that implementations may polyfill P2 in terms of P3, mapping P2 imports onto native P3 primitives at the host boundary.

To migrate:

- Pinning your toolchain to a consistent WASI P3 version. Wasmtime and the bindings generator (`wit-bindgen` for Rust, `jco` for JavaScript, and so on) must target the same WIT version, currently `0.3.0`. Mismatches surface as confusing `wrong type` errors at instantiation.
- Replacing `wasi:io` types with their Component Model equivalents (see the [`wasi:io` (removed)](#wasiio-removed) section above for the mapping).
- Switching to the appropriate world: `wasi:cli/command` for CLI programs, `wasi:http/service` for HTTP servers, `wasi:http/middleware` for middleware components.
- Updating `start-foo` / `finish-foo` call sites to use the corresponding `async func` declarations.

A detailed P2-to-P3 migration guide with worked examples is forthcoming in the [Component Model documentation](https://component-model.bytecodealliance.org/).

## Further reading

- [WASI releases and proposals](../releases/)
- [Component Model documentation](https://component-model.bytecodealliance.org/)
- [WASI GitHub repository](https://github.com/WebAssembly/WASI)
