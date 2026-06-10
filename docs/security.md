---
title: "Security"
sidebar_position: 3
---

WASI is built on principles of **capability-based security**. Code running under WASI has no ambient authority: a WebAssembly module or component starts with no access to the outside world and can only perform operations that the host explicitly grants. The host decides what each Wasm binary can see and touch, and that decision is enforced at the runtime boundary.

This contrasts with the ambient-authority model used by operating systems like Linux or Windows, where a process inherits its user's broad permissions and can reach anything the user can reach (filesystem, network, environment variables) unless additional sandboxing is layered on top. WASI is deny-by-default.

## How capabilities are granted

The mechanism for granting capabilities differs between modules and components:

* **WASI P1 modules** import the `wasi_snapshot_preview1` functions but operate only on the resources the runtime hands them at startup, chiefly preopened file descriptors. A module can call `fd_read` but only against the descriptors it has been given, and there is no way to ask for a new one. Capability granting happens at runtime invocation, not in the module binary.
* **WASI P2 components** express capabilities directly in WIT. Each capability (filesystem access, networking, environment, clocks, randomness) is a separate import, and the host instantiates the component with only the imports it has granted. The component's interface contract is the capability surface, and it is statically inspectable in the component binary itself.
* **WASI P3 components** continue to refine this model. Capabilities that P2 required guests to thread explicitly through each call (such as the `wasi:sockets/network` handle passed into `bind`, `connect`, and DNS lookups) are implicit at the world level in P3. The host still grants network access at the world boundary; guests no longer plumb the handle through every operation.

## What this means in practice

A WASI binary can only do what its host has agreed to let it do. A component without a filesystem import cannot read files; a component without a network import cannot open sockets; a module without preopened file descriptors cannot reach the filesystem at all. These guarantees hold regardless of what the host process itself is permitted to do, which is what makes WASI sandboxing stronger than typical OS-level process isolation.

For more on how capabilities are represented in WIT for WASI P2 and P3, see the [Component Model documentation](https://component-model.bytecodealliance.org/).
