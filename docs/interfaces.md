---
title: "Interfaces"
sidebar_position: 2
---

## Modules and components

WebAssembly binaries may be **components** built according to the [Component Model](https://component-model.bytecodealliance.org/) or **modules** built to the core WebAssembly specification. 

As you begin writing a Wasm application using WASI APIs, one of your first decisions will be which type of binary you want to produce&mdash;a decision typically guided by your use-case and the runtime you wish to use. Check to see which WASI releases your runtime supports. 

* **Components** can use WASI 0.2 and the Component Model for composability and interoperability, meaning that a WebAssembly component compiled from one language (Rust, for example) can communicate or be combined with a component compiled from another language (such as Go). WASI 0.2 sets the stage for the future of WASI.

* **Modules** can use APIs from WASI 0.1, an earlier stage of WASI's development. Since WASI 0.2 was released in February 2024, WASI 0.1 support is more widespread among Wasm runtimes, and it is widely used in production today. 

## WASI 0.3

WASI 0.3 is a forthcoming WASI release. Where WASI 0.2 represented a major departure from WASI 0.1, WASI 0.3 is a more iterative progression from WASI 0.2. The following draft interfaces are proposed for WASI 0.3:

| API          | Repository                                                                         | 
| ------------ | ---------------------------------------------------------------------------------- | 
| Clocks       | https://github.com/WebAssembly/WASI/tree/main/proposals/clocks/wit-0.3.0-draft     | 
| Random       | https://github.com/WebAssembly/WASI/tree/main/proposals/random/wit-0.3.0-draft     | 
| Filesystem   | https://github.com/WebAssembly/WASI/tree/main/proposals/filesystem/wit-0.3.0-draft | 
| Sockets      | https://github.com/WebAssembly/WASI/tree/main/proposals/sockets/wit-0.3.0-draft    | 
| CLI          | https://github.com/WebAssembly/WASI/tree/main/proposals/cli/wit-0.3.0-draft        | 
| HTTP         | https://github.com/WebAssembly/WASI/tree/main/proposals/http/wit-0.3.0-draft       | 

For more information on the forthcoming WASI 0.3 release, see the [Roadmap](roadmap.md).

## WASI 0.2

### Presentation

WASI 0.2 is the most recent WASI release. APIs designed for WASI 0.2 and the Component Model are defined with the [**WebAssembly Interface Type (WIT)**](https://github.com/WebAssembly/component-model/blob/main/design/mvp/WIT.md) Interface Description Language (IDL). WIT API definitions are made in `.wit` files which are composed into Wasm component binaries. The following interfaces are included in WASI P2:

| API          | Repository                                                         | 
| ------------ | ------------------------------------------------------------------ | 
| Clocks       | https://github.com/WebAssembly/WASI/tree/main/proposals/clocks     | 
| Random       | https://github.com/WebAssembly/WASI/tree/main/proposals/random     | 
| Filesystem   | https://github.com/WebAssembly/WASI/tree/main/proposals/filesystem | 
| Sockets      | https://github.com/WebAssembly/WASI/tree/main/proposals/sockets    | 
| CLI          | https://github.com/WebAssembly/WASI/tree/main/proposals/cli        | 
| HTTP         | https://github.com/WebAssembly/WASI/tree/main/proposals/http       | 

You can explore the types and definitions for a given WASI 0.2 API in its WIT files. When you're ready to start using the API, you will typically generate bindings between the WIT definitions and the language you will be compiling to Wasm. For more information on WIT, see the [WIT section of the Component Model documentation](https://component-model.bytecodealliance.org/design/wit.html).

### Versions

WASI 0.2 includes several patch releases:

| Version                                                            | Changelog |
| ------------------------------------------------------------------ | --------- |
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

For more information on the release model for WASI, see the [Roadmap](roadmap.md).

## WASI 0.1

WASI P1 APIs were defined with WITX Interface Description Language (IDL), which was an iterative step toward WIT but bears notable differences, including that it was developed as a lower-level derivation of WebAssembly Text Format (a human-readable source format for Wasm modules). Documentation for WASI 0.1 and WITX can be found on the [`wasi-0.1` branch of the WASI GitHub repository](https://github.com/WebAssembly/WASI/tree/wasi-0.1), along with a [complete list of 0.1 types and modules](https://github.com/WebAssembly/WASI/blob/wasi-0.1/preview1/docs.md).

## Proposals for the standard

All WASI APIs are **proposals** for standardization by the WASI Subgroup. The API proposals in WASI 0.1 and 0.2 met implementation and portability criteria for inclusion at the time of those releases. A proposal advances through the following stages as defined in the [WASI Subgroup's Phase Process](https://github.com/WebAssembly/WASI/blob/main/Contributing.md#the-phase-process):

* **Phase 0 - Pre-proposal**: The pre-proposal phase serves as a way to share ideas. At this phase, the WASI subgroup has not yet decided that the pre-proposal is in scope for WASI, and there may be overlap between pre-proposals.
* **Phase 1 - Feature proposal**: In this phase, the proposal is added to the proposal list and a new fork of the spec repo is created.
* **Phase 2 - Feature description available**: During this phase, one or more implementations prototype the feature and a test suite is added.
* **Phase 3 - Implementation phase**: At this phase, project champions create releases following the conventions of semantic versioning (semver).
* **Phase 4 - Standardize the feature:** At this point, the feature is fully handed off to the Working Group, where edge cases are considered and only minor changes occur. 
* **Phase 5 - The feature is standardized**: Once the Working Group reaches consensus that the feature is complete, editors perform final editorial tweaks and merge the feature into the main branch of the primary spec repo.

Proposals are first made to the **WASI Subgroup** of the [WebAssembly Community Group](https://www.w3.org/community/webassembly/). (See the [WASI Subgroup's meeting schedule](https://github.com/WebAssembly/meetings/tree/main/wasi).) 

All active WASI API proposals can be found on the [WASI GitHub repository](https://github.com/WebAssembly/WASI/blob/main/docs/Proposals.md). See the [Contributing to WASI page](https://github.com/WebAssembly/WASI/blob/main/Contributing.md) for information about submitting a new proposal.

## Active proposals

### Phase 5 - The Feature is Standardized (WG)

| API Proposal                                                          | Repository                             |
| ----------------------------------------------------------------------| -------------------------------------- |

### Phase 4 - Standardize the Feature (WG)

| API Proposal                                                          | Repository                             |
| ----------------------------------------------------------------------| -------------------------------------- |

### Phase 3 - Implementation Phase (CG + WG)

| API Proposal                                                          | Repository                             |
| --------------------------------------------------------------------- | -------------------------------------- |
| [I/O][wasi-io]                                                        | https://github.com/WebAssembly/wasi-io |
| [Clocks][wasi-clocks]                                                 | https://github.com/WebAssembly/wasi-clocks |  
| [Random][wasi-random]                                                 | https://github.com/WebAssembly/wasi-random |   
| [Filesystem][wasi-filesystem]                                         | https://github.com/WebAssembly/wasi-filesystem | 
| [Sockets][wasi-sockets]                                               | https://github.com/WebAssembly/wasi-sockets |  
| [CLI][wasi-cli]                                                       | https://github.com/WebAssembly/wasi-cli |   
| [HTTP][wasi-http]                                                     | https://github.com/WebAssembly/wasi-http |  

### Phase 2 - Proposed Spec Text Available (CG + WG)

| API Proposal                                          | Repository                                   | 
| ----------------------------------------------------- | -------------------------------------------- | 
| [Machine Learning (wasi-nn)][wasi-nn]                 | https://github.com/WebAssembly/wasi-nn       | 
| [Clocks: Timezone][wasi-clocks]                       | https://github.com/WebAssembly/wasi-clocks   | 
| [GFX][wasi-gfx]                                       | https://github.com/WebAssembly/wasi-gfx      | 

### Phase 1 - Feature Proposal (CG)

| API Proposal                                                                       | Repository                         | 
| ------------------------------------------------------------------------ | -------------------------------------- | 
| [Blob Store][wasi-blob-store]                                            | https://github.com/WebAssembly/wasi-blob-store | 
| [Crypto][wasi-crypto]                                                    | https://github.com/WebAssembly/wasi-crypto             |
| [Digital I/O][wasi-digital-io]                                           | https://github.com/WebAssembly/wasi-digital-io |
| [Distributed Lock Service][wasi-distributed-lock-service]                | https://github.com/WebAssembly/wasi-distributed-lock-service | 
| [I2C][wasi-i2c]                                                          | https://github.com/WebAssembly/wasi-i2c | 
| [Key-value Store][wasi-kv-store]                                         | https://github.com/WebAssembly/wasi-kv-store | 
| [Logging][wasi-logging]                                                  | https://github.com/WebAssembly/wasi-logging | 
| [Messaging][wasi-messaging]                                              | https://github.com/WebAssembly/wasi-messaging | 
| [Observe][wasi-observe]                                                  | https://github.com/dylibso/wasi-observe  | 
| [Parallel][wasi-parallel]                                                | https://github.com/WebAssembly/wasi-parallel | 
| [Pattern Match][wasi-pattern-match]                                      | https://github.com/WebAssembly/wasi-pattern-match | 
| [Runtime Config][wasi-runtime-config]                                    | https://github.com/WebAssembly/wasi-runtime-config | 
| [SPI][wasi-spi]                                                          | https://github.com/WebAssembly/wasi-spi | 
| [SQL][wasi-sql]                                                          | https://github.com/WebAssembly/wasi-sql | 
| [SQL Embed][wasi-sql-embed]                                              | https://github.com/WebAssembly/wasi-sql-embed | 
| [Threads][wasi-threads]                                                  | https://github.com/WebAssembly/wasi-native-threads |
| [URL][wasi-url]                                                          | https://github.com/WebAssembly/wasi-url |  
| [USB][wasi-usb]                                                          | https://github.com/WebAssembly/wasi-usb | 

### Phase 0 - Pre-Proposal (CG)

| Proposal                                                                         | Repository                             | 
| -------------------------------------------------------------------------------- | -------------------------------------- | 
| [proxy-wasm/spec][wasi-proxy-wasm] (will advance as multiple, smaller proposals) | https://github.com/proxy-wasm/spec     | 

## Versioning

Proposals remain in the 0.x semver range until they reach Phase 5 and are fully standardized. At that point, a 1.0 release should be made available.

For some APIs, it makes sense to add new features after the API itself has reached Phase 5. These feature additions should go through the same standardization process. Once they have reached Phase 5, the minor version number of the release should be incremented.

Some APIs may require backwards-incompatible changes over time. In these cases, proposals are allowed to increment the major version number _only if_ the old API can be implmented in terms of the new API. As part of the new version, champions are expected to provide a tool that enables this backwards-compatibility. If that is not possible, then a new API proposal with a new name should be started. The original API can then be deprecated over time if it makes sense to do so.

[WebAssembly CG Phases process]: https://github.com/WebAssembly/meetings/blob/master/process/phases.md
[witx]: https://github.com/WebAssembly/WASI/blob/main/tools/witx-docs.md
[ephemeral/snapshot/old process]: https://github.com/WebAssembly/WASI/blob/master/phases/README.md

[wasi-blob-store]: https://github.com/WebAssembly/wasi-blob-store
[wasi-clocks]: https://github.com/WebAssembly/wasi-clocks
[wasi-crypto]: https://github.com/WebAssembly/wasi-crypto
[wasi-data]: https://github.com/singlestore-labs/wasi-data
[wasi-digital-io]: https://github.com/WebAssembly/wasi-digital-io
[wasi-distributed-lock-service]: https://github.com/WebAssembly/wasi-distributed-lock-service
[wasi-filesystem]: https://github.com/WebAssembly/wasi-filesystem
[wasi-http]: https://github.com/WebAssembly/wasi-http
[wasi-i2c]: https://github.com/WebAssembly/wasi-i2c
[wasi-io]: https://github.com/WebAssembly/wasi-io
[wasi-kv-store]: https://github.com/WebAssembly/wasi-kv-store
[wasi-logging]: https://github.com/WebAssembly/wasi-logging
[wasi-messaging]: https://github.com/WebAssembly/wasi-messaging
[wasi-nn]: https://github.com/WebAssembly/wasi-nn
[wasi-observe]: https://github.com/WebAssembly/wasi-observe
[wasi-parallel]: https://github.com/WebAssembly/wasi-parallel
[wasi-pattern-match]: https://github.com/WebAssembly/wasi-pattern-match
[wasi-proxy-wasm]: https://github.com/proxy-wasm/spec
[wasi-random]: https://github.com/WebAssembly/wasi-random
[wasi-runtime-config]: https://github.com/WebAssembly/wasi-runtime-config
[wasi-sockets]: https://github.com/WebAssembly/wasi-sockets
[wasi-spi]: https://github.com/WebAssembly/wasi-spi
[wasi-sql]: https://github.com/WebAssembly/wasi-sql
[wasi-sql-embed]: https://github.com/WebAssembly/wasi-sql-embed
[wasi-threads]: https://github.com/WebAssembly/wasi-native-threads
[wasi-url]: https://github.com/WebAssembly/wasi-url
[wasi-usb]: https://github.com/WebAssembly/wasi-usb
[wasi-gfx]: https://github.com/WebAssembly/wasi-gfx
[wasi-cli]: https://github.com/WebAssembly/wasi-cli
