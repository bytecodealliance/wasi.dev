---
layout: page
title: WASI polyfill
permalink: /polyfill/index.html
subtitle: The WebAssembly System Interface Polyfill
header_text_feature_image: ./WASI-small.png
---

This directory previously held a polyfill implementing the WASI APIs in Wasm, with JS glue code to load a user Wasm program and run it with the polyfill, in a browser. The polyfill served its purpose of demonstrating that it's possible to polyfill WASI within browsers, but the way it was built turned out to be difficult to maintain.

People interested in doing such polyfilling may be interested in [this browser_wasi_shim], which is a much simpler and lighter-weight approach implemented directly in JS.

[this browser_wasi_shim]: https://github.com/bjorn3/browser_wasi_shim
