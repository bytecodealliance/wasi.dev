---
title: "WASI 0.3"
sidebar_position: 1
---

WASI 0.3 brings **native async** to WebAssembly components, moving asynchronous functionality that previously lived in the `wasi:io` package down into the Component Model itself. WASI 0.3 is currently in **release candidate** stage. This page provides an overview of what changed in WASI 0.3 and why.

## Why native async?

In WASI 0.2, asynchronous operations were modeled with the `wasi:io` package, which provided `pollable` resources, `input-stream` and `output-stream` types, and a `poll` function. This system worked well when a component communicated directly with a host or a single peer, but broke down when components were **composed** in a chain.

Consider a scenario where component A calls component B, which in turn calls the host:

```
A → B → Host
```

In WASI 0.2, component B could not forward wake-ups from the host's `pollable` to component A, because `pollable` is a resource scoped to a single component instance. B would have to actively poll just to relay readiness signals. In practice, the wake-up chain gets dropped. This is sometimes called the **sandwich problem**: WASI 0.2 could express async, but could not compose it across component boundaries.

WASI 0.3 solves this by pushing async into the Component Model's Canonical ABI. The runtime owns the scheduling and wake-up propagation, so async works correctly regardless of how many components sit between a producer and a consumer.

## New primitives

WASI 0.3 introduces three primitives built into the Component Model:

### `async func`

Functions can now be declared as asynchronous in WIT. The runtime manages scheduling and suspension.

```wit
// A WASI 0.3 HTTP handler
handle: async func(request: request) -> result<response, error-code>;
```

Bindings generators emit language-native async constructs: `async fn` in Rust, `Promise` in JavaScript, coroutines in Python.

### `stream<T>`

A typed, asynchronous data channel. Unlike `input-stream` and `output-stream` in WASI 0.2, a `stream<T>` is a **value** that can be passed across component boundaries.

```wit
// Reading from stdin in WASI 0.3
read-via-stream: func() -> tuple<stream<u8>, future<result<_, error-code>>>;
```

### `future<T>`

A single-value async completion. Where WASI 0.2 used `pollable` resources, WASI 0.3 uses `future<T>` values.

```wit
// Writing to stdout in WASI 0.3
write-via-stream: func(data: stream<u8>) -> future<result<_, error-code>>;
```

## Common patterns

### The stream-plus-future pattern

A recurring pattern in WASI 0.3 pairs a `stream<T>` with a `future` that signals completion or error:

```wit
read-via-stream: func() -> tuple<stream<u8>, future<result<_, error-code>>>;
```

The stream delivers data incrementally. Once the stream closes, the future resolves to indicate whether the operation completed successfully or encountered an error. This pattern appears in stdin, filesystem reads, TCP receives, and directory listings.

### The write direction flip

In WASI 0.2, write operations gave you an `output-stream` that you wrote into. In WASI 0.3, the direction is reversed: you **pass in** a `stream<u8>` and receive a `future<result>` that resolves when the write completes. This applies to stdout, stderr, filesystem writes, and TCP sends.

```wit
// WASI 0.2: get a stream, write to it
get-stdout: func() -> output-stream;

// WASI 0.3: pass data in, get a completion future
write-via-stream: func(data: stream<u8>) -> future<result<_, error-code>>;
```

## What changed in each interface

### `wasi:io` (removed)

The entire `wasi:io` package has been removed. Its functionality is replaced by the Component Model's native `stream<T>`, `future<T>`, and `async func` primitives. There is no WASI 0.3 version of `wasi:io`.

| WASI 0.2 (`wasi:io`)              | WASI 0.3 (Component Model)           |
|------------------------------------|---------------------------------------|
| `resource pollable`                | `future<T>`                           |
| `resource input-stream`            | `stream<u8>`                          |
| `resource output-stream`           | `stream<u8>` (write direction)        |
| `poll(list<pollable>)`             | `await` on a future                   |
| `subscribe()` on resource          | return a `future` from the call       |
| `start-foo` / `finish-foo` pattern | `foo: async func(...)`                |

### `wasi:http`

HTTP saw the most dramatic restructuring in WASI 0.3.

**Resources dramatically simplified.** The `incoming-request`, `outgoing-request`, `incoming-response`, `outgoing-response`, `incoming-body`, `outgoing-body`, `future-trailers`, `future-incoming-response`, and `response-outparam` resources are all gone, replaced by unified `request` and `response` resources with `stream<u8>` bodies and `future` trailers.

**The handler is now an `async func`:**

```wit
// WASI 0.3 handler
handle: async func(request: request) -> result<response, error-code>;

// WASI 0.3 client
send: async func(request: request) -> result<response, error-code>;
```

**New worlds.** The `proxy` world has been replaced by `service`. A new `middleware` world both imports and exports the handler, providing first-class support for request-path middleware components.

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

### `wasi:cli`

stdin, stdout, and stderr use `stream<u8>` with the stream-plus-future pattern. The `run` function is now `async`:

```wit
run: async func() -> result;
```

A new shared `types` interface defines the `error-code` enum used across CLI interfaces.

### `wasi:filesystem`

Nearly all `descriptor` methods are now `async func`. Streaming reads and writes use the stream-plus-future pattern, and directory listing returns `stream<directory-entry>`:

```wit
read-directory: func() -> tuple<stream<directory-entry>, future<result<_, error-code>>>;
```

### `wasi:clocks`

Interfaces and types have been renamed to align with POSIX and Rust `std::time` conventions:

| WASI 0.2       | WASI 0.3        |
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

Minimal changes. The `len` parameter is renamed to `max-len` on `get-random-bytes` and related functions.

## Runtime and tooling support

WASI 0.3 support is available in:

- **[Wasmtime](https://wasmtime.dev/) 43+** for native execution
- **[jco](https://github.com/bytecodealliance/jco)** for JavaScript environments (streams support landed; futures support following)

## Further reading

- [WASI releases and proposals](../releases/)
- [Component Model documentation](https://component-model.bytecodealliance.org/)
- [WASI GitHub repository](https://github.com/WebAssembly/WASI)
