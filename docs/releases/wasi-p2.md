---
title: "WASI P2"
sidebar_position: 2
---

WASI P2 is the most recent stable WASI release. It marked the full rebase of WASI onto the [Component Model](https://component-model.bytecodealliance.org/) and the [WebAssembly Interface Type (WIT)](https://github.com/WebAssembly/component-model/blob/main/design/mvp/WIT.md) Interface Description Language, replacing the C-like WITX IDL used in WASI P1.

## Overview

The WASI P2 release is characterized by the following key features:

* **Component Model foundation.** WASI P2 APIs are defined in WIT and consumed as WebAssembly components. This enables modularity, virtualizability (polyfilling one implementation with another), and cross-language interoperability. A component compiled from Rust can communicate or be combined with a component compiled from Go, JavaScript, Python, or any other language with component tooling.

* **Worlds.** WASI P2 defines two standard worlds:
     - `wasi:cli/command` targets command-line programs that export a `run` function, with access to filesystem, environment variables, stdin/stdout/stderr, and other CLI capabilities.
     - `wasi:http/proxy` targets HTTP proxies that export an `incoming-handler`, with support for concurrent streaming of multiple HTTP requests.

* **The `wasi:io` package.** Asynchronous I/O in WASI P2 is modeled through the `wasi:io` package, which provides:
     - A `pollable` resource for non-blocking I/O polling across multiple handles
     - `input-stream` and `output-stream` abstractions for reading and writing byte data
     - A `poll` function for waiting on multiple pollables simultaneously
  The `wasi:io` package underpins all other WASI P2 interfaces that perform I/O. In [WASI 0.3](wasi-p3.md), `wasi:io` is removed and replaced by the Component Model's native `stream<T>`, `future<T>`, and `async func` primitives.

## Interfaces

APIs designed for WASI P2 are defined in `.wit` files. The following interfaces are included:

| API          | WIT definitions                                                    | Description |
| ------------ | ------------------------------------------------------------------ | ----------- |
| I/O          | [wit](https://github.com/WebAssembly/WASI/tree/main/proposals/io/wit) | Pollable resources, input/output streams, error handling |
| Clocks       | [wit](https://github.com/WebAssembly/WASI/tree/main/proposals/clocks/wit) | Wall clock and monotonic clock access |
| Random       | [wit](https://github.com/WebAssembly/WASI/tree/main/proposals/random/wit) | Cryptographically secure and insecure random number generation |
| Filesystem   | [wit](https://github.com/WebAssembly/WASI/tree/main/proposals/filesystem/wit) | File and directory operations on preopened directories |
| Sockets      | [wit](https://github.com/WebAssembly/WASI/tree/main/proposals/sockets/wit) | TCP and UDP networking, DNS resolution |
| CLI          | [wit](https://github.com/WebAssembly/WASI/tree/main/proposals/cli/wit) | Environment variables, arguments, stdin/stdout/stderr, process exit |
| HTTP         | [wit](https://github.com/WebAssembly/WASI/tree/main/proposals/http/wit) | HTTP request/response handling for clients and servers |

You can explore the types and definitions for a given WASI P2 API in its WIT files. When you're ready to start using the API, you will typically generate bindings between the WIT definitions and the language you will be compiling to Wasm. For more information on WIT, see the [WIT section of the Component Model documentation](https://component-model.bytecodealliance.org/design/wit.html).

## Runtime support

WASI P2 portability criteria were met by [Wasmtime](https://wasmtime.dev/) and [jco](https://github.com/bytecodealliance/jco), both of which passed the WASI P2 test suite at the time of certification. Other runtimes including [WAMR](https://bytecodealliance.github.io/wamr.dev/) and [WasmEdge](https://wasmedge.org/) have varying levels of WASI P2 support.

## Patch releases

WASI P2 includes several patch releases:

| Version                                                            | Changelog |
| ------------------------------------------------------------------ | --------- |
| [0.2.12](https://github.com/WebAssembly/WASI/releases/tag/v0.2.12) | This release removes the `CLI: Exit With Code` proposal from Phase 2 following its stabilization in WASI P3. |
| [0.2.11](https://github.com/WebAssembly/WASI/releases/tag/v0.2.11) | This release includes documentation updates for `wasi:filesystem` and `wasi:sockets`. |
| [0.2.10](https://github.com/WebAssembly/WASI/releases/tag/v0.2.10) | This release advances `wasi-otel` from Phase 0 to Phase 1. |
| [0.2.9](https://github.com/WebAssembly/WASI/releases/tag/v0.2.9)   | This release includes a variety of organizational and documentation updates. |
| [0.2.8](https://github.com/WebAssembly/WASI/releases/tag/v0.2.8)   | This is a regular release with no major changes. |
| [0.2.7](https://github.com/WebAssembly/WASI/releases/tag/v0.2.7)   | This release adds a caveat about support for sync flags. |
| [0.2.6](https://github.com/WebAssembly/WASI/releases/tag/v0.2.6)   | This release adds wasi-otel as a phase 0 proposal as well as a release workflow. |
| [0.2.5](https://github.com/WebAssembly/WASI/releases/tag/v0.2.5)   | This release includes minor documentation updates. |
| [0.2.4](https://github.com/WebAssembly/WASI/releases/tag/v0.2.4)   | This release adds `wasi-tls` in Phase 1. |
| [0.2.3](https://github.com/WebAssembly/WASI/releases/tag/v0.2.3)   | This release includes minor documentation updates. |
| [0.2.2](https://github.com/WebAssembly/WASI/releases/tag/v0.2.2)   | This release includes new WIT features for `@deprecated` feature gates and is exercised in the [wasi:http/proxy](https://github.com/WebAssembly/wasi-http/blob/main/wit/types.wit#L148-L158) world. For more information, see [component-model/WIT.md](https://github.com/WebAssembly/component-model/blob/main/design/mvp/WIT.md#feature-gates). |
| [0.2.1](https://github.com/WebAssembly/WASI/releases/tag/v0.2.1)   | This release includes new WIT features for `@since` and `@unstable` feature gates. For more information, see [component-model/WIT.md](https://github.com/WebAssembly/component-model/blob/main/design/mvp/WIT.md#feature-gates). |
| [0.2.0](https://github.com/WebAssembly/WASI/releases/tag/v0.2.0)   | This version officially launched with the vote in the WASI Subgroup January 24th, 2024. |

## Further reading

- [WASI P2 GitHub repository](https://github.com/WebAssembly/WASI/blob/main/wasip2/README.md)
- [Component Model documentation](https://component-model.bytecodealliance.org/)
- [Roadmap](../roadmap.md)
