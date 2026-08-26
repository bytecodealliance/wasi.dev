---
title: "Roadmap"
sidebar_position: 4
---

This roadmap is a living document representing projected timelines for WASI releases. Goals and projections are provisional and subject to revision.

## WASI releases

WASI patch releases follow a **release train model**: a regular cadence in which releases are published regardless of the enhancements and fixes that are "ready for the train." Patch releases include smaller features and bug fixes. Larger features and breaking changes are reserved for milestone releases such as 0.3.0.

WASI 0.3 patch releases ship every two months, on the second Tuesday. WASI 0.2.1 through 0.2.12 shipped on the same cadence.

WASI 0.3.0 was an exception to the release train, shipping on June 11, 2026 following a WASI Subgroup vote. WASI 1.0 may also be scheduled outside the train. The cadence after 1.0 is undetermined.

### Release schedule

| Release | Date | Status |
| ------- | ---- | ------ |
| WASI 0.3.0 | June 11, 2026 | Shipped, outside the train |
| WASI 0.3.1 | August 11, 2026 | Shipped |
| WASI 0.3.2 | October 13, 2026 | Planned |
| WASI 0.3.3 | December 8, 2026 | Planned |
| WASI 0.3.4 | February 9, 2027 | Planned |
| WASI 0.3.5 | April 13, 2027 | Planned |
| WASI 0.3.6 | June 8, 2027 | Planned |
| WASI 0.3.7 | August 10, 2027 | Planned |
| WASI 0.3.8 | October 12, 2027 | Planned |
| WASI 0.3.9 | December 14, 2027 | Planned |

Releases are cut by a WASI Subgroup co-chair through an automated GitHub Actions workflow. For the full process, see [Release](https://github.com/WebAssembly/WASI/blob/main/docs/Release.md) in the WASI repository.

## WASI 0.3

WASI 0.3 support is available in [Wasmtime](https://wasmtime.dev/) 46 and later, which enables WASI 0.3 by default, and in [jco](https://github.com/bytecodealliance/jco).

WASI 0.3 adds **native async support** to the Component Model and refactors WASI 0.2 interfaces to take advantage of native async primitives: `async func`, `stream<T>`, and `future<T>`. The `wasi:io` package is removed entirely, with its functionality absorbed into the Component Model's Canonical ABI. For a full overview of changes, see [WASI 0.3](releases/wasi-p3.md).

Implementations may continue to support WASI 0.2 alongside 0.3, either by implementing both versions or by virtualizing (polyfilling) 0.2 in terms of 0.3.

Following WASI 0.3.0, incremental and backwards-compatible 0.3.x releases ship on the release train. WASI 0.3.1 adopted the Component Model `map<K, V>` type and the `implements` and `external-id` annotations, which WASI interfaces may use from that release onward.

Later releases may adopt further Component Model features. Candidates are developed behind [gated features](https://github.com/WebAssembly/component-model/blob/main/design/mvp/Explainer.md#gated-features) and reach a WASI release only after a Subgroup vote, as described in [Component Model features](releases/index.md#component-model-features). Current candidates include threading built-ins, stackful async lift, fixed-length lists, the `error-context` type, and canonical interface names.

## Project timeline

![Timeline of WASI releases. WASI 0.2.0 shipped in January 2024, followed by twelve patch releases every two months through 0.2.12. WASI 0.3.0 shipped two and a half years later, in June 2026, followed by 0.3.1 in August 2026. Further 0.3.x patch releases are planned every two months through 2027.](../static/img/wasi-timeline.svg)
