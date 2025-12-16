---
title: "Languages"
sidebar_position: 2.5
---
## Language support for components

Currently, these languages can be compiled to Wasm components. Some languages have first-party support for Wasm components, while other languages rely on externally maintained tools.

| Language                  | Name                                                                                                   | WASI Version | Maintained By     | Notes                                                                                                                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------------------------ | ------------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C and C++                 | [`wasi-sdk`](https://github.com/WebAssembly/wasi-sdk)                                                  | 0.2 + 0.3    | W3C Wasm CG       | 0.3 is in-progress                                                                                                                                                                  |
| C#                        | [`componentize-dotnet`](https://github.com/bytecodealliance/componentize-dotnet)                       | 0.2          | Bytecode Alliance |                                                                                                                                                                                     |
| Go                        | [`go-modules`](https://github.com/bytecodealliance/go-modules)                                         | 0.2          | Bytecode Alliance |                                                                                                                                                                                     |
| Java                      | [`graal`](https://github.com/oracle/graal)                                                             | -            | Oracle            | Planned - [Tracking Issue](https://github.com/oracle/graal/issues/9762), [Roadmap](https://github.com/orgs/oracle/projects/21/views/1)                                              |
| JavaScript and TypeScript | [`jco`](https://github.com/bytecodealliance/jco)                                                       | 0.2          | Bytecode Alliance |                                                                                                                                                                                     |
| Kotlin                    | [Kotlin](https://kotlinlang.org/docs/wasm-wasi.html)                                                   | 0.2          | JetBrains         | Planned - [Tracking Issue](https://youtrack.jetbrains.com/issue/KT-64568)                                                                                                           |
| Python                    | [`componentize-py`](https://github.com/bytecodealliance/componentize-py)                               | 0.2          | Bytecode Alliance |                                                                                                                                                                                     |
| Python                    | [`cpython`](https://snarky.ca/state-of-wasi-support-for-cpython-march-2024/)                           | 0.2          | Python            | In-progress                                                                                                                                                                         |
| Ruby                      | [`ruby.wasm`](https://github.com/ruby/ruby.wasm)                                                       | 0.2          | Ruby              | In-progress                                                                                                                                                                         |
| Rust                      | [`wasm32-wasip2`](https://doc.rust-lang.org/rustc/platform-support/wasm32-wasip2.html) compiler target | 0.2 + 0.3    | Rust Project      | [0.2 Introduction](https://blog.rust-lang.org/2024/04/09/updates-to-rusts-wasi-targets/), [0.2 Stabilization](https://blog.rust-lang.org/2024/11/26/wasip2-tier-2/), 0.3 is planned |
| Swift                     | [Swift](https://www.swift.org/)                                                                        | 0.2          | Swift             | Planned - [Roadmap Accepted](https://forums.swift.org/t/accepted-vision-a-vision-for-webassembly-support-in-swift/80332)                                                            |

### Bindings generators

The bindings generators below provide a way to make Wasm function calls using [interfaces](./interfaces.md) in a given language.

| From                 | To                   | Name                                                                                              |
| -------------------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| Wasm Interface Types | C and C++            | [wit-bindgen c](https://github.com/bytecodealliance/wit-bindgen/tree/main/crates/c)               |
| Wasm Interface Types | C#                   | [wit-bindgen csharp](https://github.com/bytecodealliance/wit-bindgen/tree/main/crates/csharp)     |
| Wasm Interface Types | JSON Schema          | [component2json](https://github.com/microsoft/wassette/tree/main/crates/component2json)           |
| Wasm Interface Types | Markdown             | [wit-bindgen markdown](https://github.com/bytecodealliance/wit-bindgen/tree/main/crates/markdown) |
| Wasm Interface Types | Moonbit              | [wit-bindgen moonbit](https://github.com/bytecodealliance/wit-bindgen/tree/main/crates/moonbit)   |
| Wasm Interface Types | Rust                 | [wit-bindgen rust](https://github.com/bytecodealliance/wit-bindgen/tree/main/crates/guest-rust)   |
| WebIDL               | Wasm Interface Types | [webidl2wit](https://github.com/wasi-gfx/webidl2wit)                                              |