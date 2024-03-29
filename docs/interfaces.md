---
title: "Interfaces"
sidebar_position: 2
---

## Modules and components

WebAssembly binaries may be **components** built according to the [Component Model](https://component-model.bytecodealliance.org/) or **modules** built to the core WebAssembly specification. 

As you begin writing a Wasm application using WASI APIs, one of your first decisions will be which type of binary you want to produce&mdash;a decision typically guided by your use-case and the runtime you wish to use. Check to see which WASI releases your runtime supports. 

* **Components** can use WASI 0.2 and the Component Model for composability and interoperability, meaning that a WebAssembly component compiled from one language (Rust, for example) can communicate or be combined with a component compiled from another language (such as Go). WASI 0.2 sets the stage for the future of WASI.

* **Modules** can use APIs from WASI 0.1, an earlier stage of WASI's development. Since WASI 0.2 was released in February 2024, WASI 0.1 support is more widespread among Wasm runtimes, and it is widely used in production today. 

## WASI 0.2

WASI 0.2 is the most recent WASI release. APIs designed for WASI 0.2 and the Component Model are defined with the [**WebAssembly Interface Type (WIT)**](https://github.com/WebAssembly/component-model/blob/main/design/mvp/WIT.md) Interface Description Language (IDL). WIT API definitions are made in `.wit` files which are composed into Wasm component binaries. The following interfaces are included in WASI P2:

| API          | Repository                                     | Version |
| ------------ | ---------------------------------------------- | ------- |
| I/O          | https://github.com/WebAssembly/wasi-io         | 0.2.0   |
| Clocks       | https://github.com/WebAssembly/wasi-clocks     | 0.2.0   |
| Random       | https://github.com/WebAssembly/wasi-random     | 0.2.0   |
| Filesystem   | https://github.com/WebAssembly/wasi-filesystem | 0.2.0   |
| Sockets      | https://github.com/WebAssembly/wasi-sockets    | 0.2.0   |
| CLI          | https://github.com/WebAssembly/wasi-cli        | 0.2.0   |
| HTTP         | https://github.com/WebAssembly/wasi-http       | 0.2.0   |

You can explore the types and definitions for a given WASI 0.2 API in its WIT files. When you're ready to start using the API, you will typically generate bindings between the WIT definitions and the language you will be compiling to Wasm. For more information on WIT, see the [WIT section of the Component Model documentation](https://component-model.bytecodealliance.org/design/wit.html). 

## WASI 0.1

WASI P1 APIs were defined with WITX Interface Description Language (IDL), which was an iterative step toward WIT but bears notable differences, including that it was developed as a lower-level derivation of WebAssembly Text Format (a human-readable source format for Wasm modules). Documentation for WASI 0.1 and WITX can be found in the [`legacy` directory of the WASI GitHub repository](https://github.com/WebAssembly/WASI/blob/main/legacy/README.md), along with a [complete list of 0.1 types and modules](https://github.com/WebAssembly/WASI/blob/main/legacy/preview1/docs.md).

## Proposals for the standard

All WASI APIs are **proposals** for standardization by the WASI Subgroup. The API proposals in WASI 0.1 and 0.2 met implementation and portability criteria for inclusion at the time of those releases. 

All active WASI API proposals can be found on the [WASI GitHub repository](https://github.com/WebAssembly/WASI/blob/main/Proposals.md), along with the [process for making a proposal](https://github.com/WebAssembly/WASI/blob/main/Contributing.md#the-phase-process).