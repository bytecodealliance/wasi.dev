---
title: "Releases"
sidebar_position: 2
---

## Modules and components

WebAssembly binaries may be **components** built according to the [Component Model](https://component-model.bytecodealliance.org/) or **modules** built to the core WebAssembly specification. 

As you begin writing a Wasm application using WASI APIs, one of your first decisions will be which type of binary you want to produce. This decision is typically guided by your use case and the runtime you wish to use. Check to see which WASI releases your runtime supports. 

* **Components** can use WASI P2 or P3 and the Component Model for composability and interoperability, meaning that a WebAssembly component compiled from one language (Rust, for example) can communicate or be combined with a component compiled from another language (such as Go). WASI P3 adds native async support, building on the foundation established in WASI P2.

* **Modules** can use APIs from WASI P1, an earlier stage of WASI's development. Since WASI P2 was released end of January 2024, WASI P1 support is more widespread among Wasm runtimes, and it is widely used in production today. 

## WASI releases

| Release | Status | Description |
| ------- | ------ | ----------- |
| [WASI P3](wasi-p3.md) | Stable | Native async support with `async func`, `stream<T>`, and `future<T>`; refactored WASI P2 interfaces |
| [WASI P2](wasi-p2.md) | Stable | Component Model foundation with WIT interfaces, composability, and cross-language interoperability |
| [WASI P1](wasi-p1.md) | Legacy | POSIX-inspired module API with broad runtime support |

For more information on release timelines and plans, see the [Roadmap](../roadmap.md).

## Proposals for the standard

All WASI APIs are **proposals** for standardization by the WASI Subgroup. The API proposals in WASI P1 and P2 met implementation and portability criteria for inclusion at the time of those releases. A proposal advances through the following stages as defined in the [WASI Subgroup's Phase Process](https://github.com/WebAssembly/WASI/blob/main/Contributing.md#the-phase-process):

* **Phase 0 - Pre-proposal**: The pre-proposal phase serves as a way to share ideas. At this phase, the WASI subgroup has not yet decided that the pre-proposal is in scope for WASI, and there may be overlap between pre-proposals.
* **Phase 1 - Feature proposal**: In this phase, the proposal is added to the proposal list and a new fork of the spec repo is created.
* **Phase 2 - Feature description available**: During this phase, one or more implementations prototype the feature and a test suite is added.
* **Phase 3 - Implementation phase**: At this phase, project champions create releases following the conventions of semantic versioning (semver).
* **Phase 4 - Standardize the feature:** At this point, the feature is fully handed off to the Working Group, where edge cases are considered and only minor changes occur. 
* **Phase 5 - The feature is standardized**: Once the Working Group reaches consensus that the feature is complete, editors perform final editorial tweaks and merge the feature into the main branch of the primary spec repo.

Proposals are first made to the **WASI Subgroup** of the [WebAssembly Community Group](https://www.w3.org/community/webassembly/). (See the [WASI Subgroup's meeting schedule](https://github.com/WebAssembly/meetings/tree/main/wasi).) 

All active WASI API proposals can be found on the [WASI GitHub repository](https://github.com/WebAssembly/WASI/blob/main/docs/Proposals.md). See the [Contributing to WASI page](https://github.com/WebAssembly/WASI/blob/main/Contributing.md) for information about submitting a new proposal.

## WASI test suite

WASI runtimes are tested against a shared test suite, [`wasi-testsuite`](https://github.com/WebAssembly/wasi-testsuite), which exercises interfaces from WASI P1 and WASI P3 across runtime implementations. The repository includes a test runner with adapters for the major runtimes (Wasmtime, jco, WAMR, and others), and is the shared reference for verifying runtime conformance.

## Active proposals

### Phase 5 - The Feature is Standardized (WG)

| API Proposal | Description | Repository |
| ------------ | ----------- | ---------- |

### Phase 4 - Standardize the Feature (WG)

| API Proposal | Description | Repository |
| ------------ | ----------- | ---------- |

### Phase 3 - Implementation Phase (CG + WG)

| API Proposal                  | Description                                                              | Repository                                     |
| ----------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------- |
| [I/O][wasi-io]                | Streams, pollables, and async wait primitives; removed in WASI P3       | https://github.com/WebAssembly/WASI/tree/main/proposals/io         |
| [Clocks][wasi-clocks]         | Wall-clock and monotonic-clock access                                    | https://github.com/WebAssembly/WASI/tree/main/proposals/clocks     |
| [Random][wasi-random]         | Cryptographically secure and insecure random byte generation             | https://github.com/WebAssembly/WASI/tree/main/proposals/random     |
| [Filesystem][wasi-filesystem] | File and directory operations on preopened directories                   | https://github.com/WebAssembly/WASI/tree/main/proposals/filesystem |
| [Sockets][wasi-sockets]       | TCP and UDP networking, plus DNS resolution                              | https://github.com/WebAssembly/WASI/tree/main/proposals/sockets    |
| [CLI][wasi-cli]               | Environment variables, command-line arguments, stdio, and process exit   | https://github.com/WebAssembly/WASI/tree/main/proposals/cli        |
| [HTTP][wasi-http]             | Incoming and outgoing HTTP request and response handling                 | https://github.com/WebAssembly/WASI/tree/main/proposals/http       |

### Phase 2 - Proposed Spec Text Available (CG + WG)

| API Proposal                                       | Description                                                 | Repository                                         |
| -------------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------- |
| [Clocks: Timezone][wasi-clocks]                    | Timezone-aware datetime conversions and UTC offsets         | https://github.com/WebAssembly/WASI/tree/main/proposals/clocks         |
| [HTTP: Informational Outbound Response][wasi-http] | 1xx informational response support for outbound HTTP        | https://github.com/WebAssembly/WASI/tree/main/proposals/http           |
| [I2C][wasi-i2c]                                    | Inter-Integrated Circuit bus access for embedded peripherals| https://github.com/WebAssembly/wasi-i2c            |
| [Key-value Store][wasi-kv-store]                   | CRUD operations against a key-value backend                 | https://github.com/WebAssembly/wasi-kv-store       |
| [Machine Learning (wasi-nn)][wasi-nn]              | Inference against pre-trained ML models                     | https://github.com/WebAssembly/wasi-nn             |
| [Runtime Config][wasi-runtime-config]              | Read-only access to host-provided configuration values      | https://github.com/WebAssembly/wasi-runtime-config |
| [GFX][wasi-gfx]                                    | Cross-platform graphics primitives for surfaces and frames  | https://github.com/WebAssembly/wasi-gfx            |
| [Messaging][wasi-messaging]                        | Publish/subscribe and request/reply messaging primitives    | https://github.com/WebAssembly/wasi-messaging      |

### Phase 1 - Feature Proposal (CG)

| API Proposal                                              | Description                                                          | Repository                                                   |
| --------------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------ |
| [Blob Store][wasi-blob-store]                             | Object-storage operations on containers and blobs                    | https://github.com/WebAssembly/wasi-blob-store               |
| [Crypto][wasi-crypto]                                     | Signatures, hashing, and symmetric encryption primitives             | https://github.com/WebAssembly/wasi-crypto                   |
| [GPIO][wasi-gpio]                                         | General-purpose digital I/O pin control for embedded devices         | https://github.com/WebAssembly/wasi-gpio                     |
| [Distributed Lock Service][wasi-distributed-lock-service] | Distributed locking primitives for coordinating across nodes         | https://github.com/WebAssembly/wasi-distributed-lock-service |
| [Logging][wasi-logging]                                   | Structured logging with severity levels                              | https://github.com/WebAssembly/wasi-logging                  |
| [Observe][wasi-observe]                                   | Application telemetry plumbing for observability tooling             | https://github.com/dylibso/wasi-observe                      |
| [OTel][wasi-otel]                                         | OpenTelemetry traces, metrics, and logs                              | https://github.com/calebschoepp/wasi-otel                    |
| [Parallel][wasi-parallel]                                 | Parallel computation primitives such as map and reduce               | https://github.com/WebAssembly/wasi-parallel                 |
| [Pattern Match][wasi-pattern-match]                       | Pattern matching against strings using regex-style expressions       | https://github.com/WebAssembly/wasi-pattern-match            |
| [SPI][wasi-spi]                                           | Serial Peripheral Interface bus access for embedded peripherals      | https://github.com/WebAssembly/wasi-spi                      |
| [SQL][wasi-sql]                                           | Connection-oriented SQL database operations                          | https://github.com/WebAssembly/wasi-sql                      |
| [SQL Embed][wasi-sql-embed]                               | Embedded SQL execution against in-process databases                  | https://github.com/WebAssembly/wasi-sql-embed                |
| [Threads][wasi-threads]                                   | Native thread spawning and synchronization for components            | https://github.com/WebAssembly/wasi-native-threads           |
| [TLS][wasi-tls]                                           | Transport Layer Security for sockets and other byte streams          | https://github.com/WebAssembly/wasi-tls                      |
| [URL][wasi-url]                                           | URL parsing, construction, and manipulation                          | https://github.com/WebAssembly/wasi-url                      |
| [USB][wasi-usb]                                           | USB device enumeration and host communication                        | https://github.com/WebAssembly/wasi-usb                      |

### Phase 0 - Pre-Proposal (CG)

| Proposal                              | Description                                                                                     | Repository                          |
| ------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------- |
| [proxy-wasm/spec][wasi-proxy-wasm]    | Plugin interface for proxies and gateways; will advance as multiple smaller proposals           | https://github.com/proxy-wasm/spec  |

## Versioning

Proposals remain in the 0.x semver range until they reach Phase 5 and are fully standardized. At that point, a 1.0 release should be made available.

For some APIs, it makes sense to add new features after the API itself has reached Phase 5. These feature additions should go through the same standardization process. Once they have reached Phase 5, the minor version number of the release should be incremented.

Some APIs may require backwards-incompatible changes over time. In these cases, proposals are allowed to increment the major version number _only if_ the old API can be implemented in terms of the new API. As part of the new version, champions are expected to provide a tool that enables this backwards compatibility. If that is not possible, then a new API proposal with a new name should be started. The original API can then be deprecated over time if it makes sense to do so.

[wasi-blob-store]: https://github.com/WebAssembly/wasi-blob-store
[wasi-clocks]: https://github.com/WebAssembly/WASI/tree/main/proposals/clocks
[wasi-crypto]: https://github.com/WebAssembly/wasi-crypto
[wasi-data]: https://github.com/singlestore-labs/wasi-data
[wasi-distributed-lock-service]: https://github.com/WebAssembly/wasi-distributed-lock-service
[wasi-filesystem]: https://github.com/WebAssembly/WASI/tree/main/proposals/filesystem
[wasi-gpio]: https://github.com/WebAssembly/wasi-gpio
[wasi-http]: https://github.com/WebAssembly/WASI/tree/main/proposals/http
[wasi-i2c]: https://github.com/WebAssembly/wasi-i2c
[wasi-io]: https://github.com/WebAssembly/WASI/tree/main/proposals/io
[wasi-kv-store]: https://github.com/WebAssembly/wasi-kv-store
[wasi-logging]: https://github.com/WebAssembly/wasi-logging
[wasi-messaging]: https://github.com/WebAssembly/wasi-messaging
[wasi-nn]: https://github.com/WebAssembly/wasi-nn
[wasi-observe]: https://github.com/WebAssembly/wasi-observe
[wasi-otel]: https://github.com/calebschoepp/wasi-otel
[wasi-parallel]: https://github.com/WebAssembly/wasi-parallel
[wasi-pattern-match]: https://github.com/WebAssembly/wasi-pattern-match
[wasi-proxy-wasm]: https://github.com/proxy-wasm/spec
[wasi-random]: https://github.com/WebAssembly/WASI/tree/main/proposals/random
[wasi-runtime-config]: https://github.com/WebAssembly/wasi-runtime-config
[wasi-sockets]: https://github.com/WebAssembly/WASI/tree/main/proposals/sockets
[wasi-spi]: https://github.com/WebAssembly/wasi-spi
[wasi-sql]: https://github.com/WebAssembly/wasi-sql
[wasi-sql-embed]: https://github.com/WebAssembly/wasi-sql-embed
[wasi-threads]: https://github.com/WebAssembly/wasi-native-threads
[wasi-tls]: https://github.com/WebAssembly/wasi-tls
[wasi-url]: https://github.com/WebAssembly/wasi-url
[wasi-usb]: https://github.com/WebAssembly/wasi-usb
[wasi-gfx]: https://github.com/WebAssembly/wasi-gfx
[wasi-cli]: https://github.com/WebAssembly/WASI/tree/main/proposals/cli
