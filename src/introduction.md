![WASI logo](./images/wasi-head.png)
  
The **WebAssembly System Interface (WASI)** is a group of standard API specifications for software compiled to the **[W3C WebAssembly (Wasm) standard](https://www.w3.org/TR/wasm-core-2/)**. WASI is designed to provide a secure standard interface for applications that can be compiled to Wasm from any language, and that may run anywhere&mdash;from browsers to clouds to embedded devices.  

By standardizing APIs for WebAssembly, WASI provides a way to compose software written in different languages&mdash;without costly and clunky interface systems like HTTP-based microservices. We believe that every project with a plugin model should be using WASI, and that WASI is ideally suited for projects with SDKs for multiple languages, e.g. client libraries.

To date, WASI has seen two milestone releases known as **P1** and **P2**. (Sometimes you will see these referred to as Preview 1 and Preview 2, or 0.1 and 0.2). The concepts and vocabulary of Wasm and WASI can sometimes be opaque to newcomers, so WASI.dev serves as an introduction to WASI for users of all backgrounds. It's very much a work-in-progress, and we welcome contributions on the [GitHub repo](https://github.com/bytecodealliance/wasi.dev). 

## Who are we?

WASI is an open standard under active development by the [**WASI Subgroup**](https://github.com/WebAssembly/WASI/blob/main/Charter.md) in the **W3C WebAssembly Community Group**. Discussions happen in [GitHub issues](https://github.com/WebAssembly/WASI/issues), [pull requests](https://github.com/WebAssembly/WASI/pulls), and [bi-weekly Zoom meetings](https://github.com/WebAssembly/meetings/tree/main/wasi).

The **[Bytecode Alliance](https://bytecodealliance.org/)** is a community comprised of many individual contributors and 30+ companies involved in the WebAssembly space. This site is a community effort supported by volunteers through the Bytecode Alliance's Special Interest Group for Documentation. If you would like to get involved, you can find us on the SIG Documentation channel of the [Bytecode Alliance's Zulip server](https://bytecodealliance.zulipchat.com/). 

## Who are you?

WASI and Wasm are tools for any type of software developer: whether you're writing web apps, plugins, serverless functions, User-Defined Functions (UDFs) in a database, embedded controller components, sidecar networking filters, or something completely different. This site is intended to make WASI understandable regardless of your background, use-case, or familiarity with the WebAssembly ecosystem.

## How to get started

There are many different runtimes that support WASI including [Wasmtime](), [WAMR](), [WasmEdge](), [wazero](), [wasmer](), [wasmi](), and [wasm3](). Many of these runtimes have different areas of focus (i.e., embedded devices, browser-based use-cases, or non-web embeddings), and the introductory documentation for each is a great place to start.

WASI can be implemented by both core Wasm modules and applications built according to the **Component Model**, a specification for Wasm applications that are interoperable and composable. You can learn more about components in the Bytecode Alliance's **[WebAssembly Component Model](https://component-model.bytecodealliance.org/)** documentation. 

[Continue reading](./interfaces.md) to learn more about WASI interfaces, including available APIs and how they are defined. 


