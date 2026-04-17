---
title: "WASI 0.1"
sidebar_position: 3
---

WASI 0.1 (also known as Preview 1 or `wasi_snapshot_preview1`) is the original stable WASI release. It provides a POSIX-inspired system interface for core WebAssembly modules and has the broadest runtime support of any WASI version. While WASI 0.2 and 0.3 represent the future of the standard, WASI 0.1 remains widely used in production.

## Overview

WASI 0.1 is characterized by three defining features:

* **POSIX-inspired design.** WASI 0.1 functions map closely to POSIX equivalents, and error codes are aligned with POSIX errno values. The API uses a global file descriptor table with preopened directories for capability-based sandboxing.

* **Module-level API.** WASI 0.1 targets core WebAssembly modules (not components). It is defined as a single flat module (`wasi_snapshot_preview1`) with 45 functions. Callees access the caller's linear memory directly, using raw pointers and a C-like type system.

* **WITX IDL.** APIs are defined with the WITX Interface Description Language, an iterative step toward WIT that was developed as a lower-level derivation of WebAssembly Text Format.

## API surface

WASI 0.1 provides functions in the following areas:

| Area | Functions | Description |
| ---- | --------- | ----------- |
| Arguments and environment | `args_get`, `args_sizes_get`, `environ_get`, `environ_sizes_get` | Access to command-line arguments and environment variables |
| Clocks | `clock_res_get`, `clock_time_get` | Wall clock and monotonic clock access |
| File descriptors | `fd_read`, `fd_write`, `fd_seek`, `fd_close`, `fd_sync`, `fd_advise`, `fd_allocate`, `fd_pread`, `fd_pwrite`, `fd_readdir`, `fd_prestat_get`, and others | Reading, writing, and managing open file descriptors |
| Paths | `path_open`, `path_create_directory`, `path_rename`, `path_unlink_file`, `path_symlink`, `path_link`, `path_readlink`, `path_remove_directory` | Filesystem path operations on preopened directories |
| Polling and process | `poll_oneoff`, `proc_exit`, `sched_yield` | Non-blocking I/O polling and process lifecycle |
| Random | `random_get` | Cryptographically secure random bytes |
| Sockets | `sock_accept`, `sock_recv`, `sock_send`, `sock_shutdown` | Limited socket operations (accept only, no listen or connect) |

## Limitations

Compared to WASI 0.2 and later releases, WASI 0.1 has several limitations:

- **No Component Model support.** WASI 0.1 targets core Wasm modules, so components cannot use WASI 0.1 APIs. Modules lack the composability and cross-language interoperability that the Component Model provides.
- **C-oriented type system.** The raw pointer and linear memory approach works naturally for C/C++ and Rust but creates friction for higher-level languages like Python, JavaScript, and Go.
- **Limited networking.** Socket support covers `accept`, `recv`, `send`, and `shutdown`, but does not include `listen` or `connect`. There is no HTTP support.
- **No modularity.** All functions live in a single flat namespace. APIs cannot be versioned or composed independently.

## Runtime support

WASI 0.1 has the broadest runtime support of any WASI version: [Wasmtime](https://wasmtime.dev/), [Wasmer](https://wasmer.io/), [WasmEdge](https://wasmedge.org/), [WAMR](https://bytecodealliance.github.io/wamr.dev/), [wazero](https://wazero.io/), [wasmi](https://github.com/wasmi-labs/wasmi), [wasm3](https://github.com/wasm3/wasm3), Node.js (via the [WASI module](https://nodejs.org/api/wasi.html)), and Deno all provide WASI 0.1 support.

## Further reading

- [WASI 0.1 documentation](https://github.com/WebAssembly/WASI/tree/wasi-0.1)
- [WASI 0.1 types and modules](https://github.com/WebAssembly/WASI/blob/wasi-0.1/preview1/docs.md)
