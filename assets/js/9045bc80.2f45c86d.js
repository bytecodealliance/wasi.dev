"use strict";(self.webpackChunkwasi_dev=self.webpackChunkwasi_dev||[]).push([[60],{5368:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=t(4848),i=t(8453);const o={title:"Interfaces",sidebar_position:2},r=void 0,a={id:"interfaces",title:"Interfaces",description:"Modules and components",source:"@site/docs/interfaces.md",sourceDirName:".",slug:"/interfaces",permalink:"/wasi.dev/interfaces",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/interfaces.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Interfaces",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/wasi.dev/"},next:{title:"Resources",permalink:"/wasi.dev/resources"}},d={},l=[{value:"Modules and components",id:"modules-and-components",level:2},{value:"WASI 0.2",id:"wasi-02",level:2},{value:"WASI 0.1",id:"wasi-01",level:2},{value:"Proposals for the standard",id:"proposals-for-the-standard",level:2}];function c(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"modules-and-components",children:"Modules and components"}),"\n",(0,n.jsxs)(s.p,{children:["WebAssembly binaries may be ",(0,n.jsx)(s.strong,{children:"components"})," built according to the ",(0,n.jsx)(s.a,{href:"https://component-model.bytecodealliance.org/",children:"Component Model"})," or ",(0,n.jsx)(s.strong,{children:"modules"})," built to the core WebAssembly specification."]}),"\n",(0,n.jsx)(s.p,{children:"As you begin writing a Wasm application using WASI APIs, one of your first decisions will be which type of binary you want to produce\u2014a decision typically guided by your use-case and the runtime you wish to use. Check to see which WASI releases your runtime supports."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Components"})," can use WASI 0.2 and the Component Model for composability and interoperability, meaning that a WebAssembly component compiled from one language (Rust, for example) can communicate or be combined with a component compiled from another language (such as Go). WASI 0.2 sets the stage for the future of WASI."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Modules"})," can use APIs from WASI 0.1, an earlier stage of WASI's development. Since WASI 0.2 was released in February 2024, WASI 0.1 support is more widespread among Wasm runtimes, and it is widely used in production today."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"wasi-02",children:"WASI 0.2"}),"\n",(0,n.jsxs)(s.p,{children:["WASI 0.2 is the most recent WASI release. APIs designed for WASI 0.2 and the Component Model are defined with the ",(0,n.jsx)(s.a,{href:"https://github.com/WebAssembly/component-model/blob/main/design/mvp/WIT.md",children:(0,n.jsx)(s.strong,{children:"WebAssembly Interface Type (WIT)"})})," Interface Description Language (IDL). WIT API definitions are made in ",(0,n.jsx)(s.code,{children:".wit"})," files which are composed into Wasm component binaries. The following interfaces are included in WASI P2:"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"API"}),(0,n.jsx)(s.th,{children:"Repository"}),(0,n.jsx)(s.th,{children:"Version"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"I/O"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://github.com/WebAssembly/wasi-io",children:"https://github.com/WebAssembly/wasi-io"})}),(0,n.jsx)(s.td,{children:"0.2.0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Clocks"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://github.com/WebAssembly/wasi-clocks",children:"https://github.com/WebAssembly/wasi-clocks"})}),(0,n.jsx)(s.td,{children:"0.2.0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Random"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://github.com/WebAssembly/wasi-random",children:"https://github.com/WebAssembly/wasi-random"})}),(0,n.jsx)(s.td,{children:"0.2.0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Filesystem"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://github.com/WebAssembly/wasi-filesystem",children:"https://github.com/WebAssembly/wasi-filesystem"})}),(0,n.jsx)(s.td,{children:"0.2.0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Sockets"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://github.com/WebAssembly/wasi-sockets",children:"https://github.com/WebAssembly/wasi-sockets"})}),(0,n.jsx)(s.td,{children:"0.2.0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"CLI"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://github.com/WebAssembly/wasi-cli",children:"https://github.com/WebAssembly/wasi-cli"})}),(0,n.jsx)(s.td,{children:"0.2.0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"HTTP"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://github.com/WebAssembly/wasi-http",children:"https://github.com/WebAssembly/wasi-http"})}),(0,n.jsx)(s.td,{children:"0.2.0"})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["You can explore the types and definitions for a given WASI 0.2 API in its WIT files. When you're ready to start using the API, you will typically generate bindings between the WIT definitions and the language you will be compiling to Wasm. For more information on WIT, see the ",(0,n.jsx)(s.a,{href:"https://component-model.bytecodealliance.org/design/wit.html",children:"WIT section of the Component Model documentation"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"wasi-01",children:"WASI 0.1"}),"\n",(0,n.jsxs)(s.p,{children:["WASI P1 APIs were defined with WITX Interface Description Language (IDL), which was an iterative step toward WIT but bears notable differences, including that it was developed as a lower-level derivation of WebAssembly Text Format (a human-readable source format for Wasm modules). Documentation for WASI 0.1 and WITX can be found in the ",(0,n.jsxs)(s.a,{href:"https://github.com/WebAssembly/WASI/blob/main/legacy/README.md",children:[(0,n.jsx)(s.code,{children:"legacy"})," directory of the WASI GitHub repository"]}),", along with a ",(0,n.jsx)(s.a,{href:"https://github.com/WebAssembly/WASI/blob/main/legacy/preview1/docs.md",children:"complete list of 0.1 types and modules"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"proposals-for-the-standard",children:"Proposals for the standard"}),"\n",(0,n.jsxs)(s.p,{children:["All WASI APIs are ",(0,n.jsx)(s.strong,{children:"proposals"})," for standardization by the WASI Subgroup. The API proposals in WASI 0.1 and 0.2 met implementation and portability criteria for inclusion at the time of those releases."]}),"\n",(0,n.jsxs)(s.p,{children:["All active WASI API proposals can be found on the ",(0,n.jsx)(s.a,{href:"https://github.com/WebAssembly/WASI/blob/main/Proposals.md",children:"WASI GitHub repository"}),", along with the ",(0,n.jsx)(s.a,{href:"https://github.com/WebAssembly/WASI/blob/main/Contributing.md#the-phase-process",children:"process for making a proposal"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>a});var n=t(6540);const i={},o=n.createContext(i);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);