---
layout: page
title: WASI
permalink: /
subtitle: The WebAssembly System Interface
header_text_feature_image: polyfill/WASI-small.png
---

WASI is a modular system interface for WebAssembly. As described in [the initial announcement](https://hacks.mozilla.org/2019/03/standardizing-wasi-a-webassembly-system-interface/), it's focused on security and portability.

WASI is being standardized in [a subgroup of the WebAssembly CG](https://github.com/WebAssembly/WASI/blob/master/Charter.md). Discussions happen in [GitHub issues](https://github.com/WebAssembly/WASI/issues), [pull requests](https://github.com/WebAssembly/WASI/pulls), and [bi-weekly Zoom meetings](https://github.com/WebAssembly/WASI/tree/master/meetings).

For a quick intro to WASI, including getting started using it, see [the intro document](https://github.com/CraneStation/wasmtime/blob/master/docs/WASI-intro.md).

The Wasmtime runtime's [tutorial](https://github.com/CraneStation/wasmtime/blob/master/docs/WASI-tutorial.md) contains [examples](https://github.com/CraneStation/wasmtime/blob/master/docs/WASI-tutorial.md#running-common-languages-with-wasi) for how to target WASI from [C](https://github.com/CraneStation/wasmtime/blob/master/docs/WASI-tutorial.md#from-c) and [Rust](https://github.com/CraneStation/wasmtime/blob/master/docs/WASI-tutorial.md#from-rust). The resulting .wasm modules can be run in any WASI-compliant runtime.

For more documentation, see [the documents guide](https://github.com/CraneStation/wasmtime/blob/master/docs/WASI-documents.md).
