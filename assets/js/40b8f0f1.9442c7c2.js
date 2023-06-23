"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[5206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_position:1},i="Main Components of the Cosmos SDK",s={unversionedId:"intro/sdk-design",id:"version-v0.50/intro/sdk-design",title:"Main Components of the Cosmos SDK",description:"The Cosmos SDK is a framework that facilitates the development of secure state-machines on top of CometBFT. At its core, the Cosmos SDK is a boilerplate implementation of the ABCI in Golang. It comes with a multistore to persist data and a router to handle transactions.",source:"@site/versioned_docs/version-v0.50/intro/03-sdk-design.md",sourceDirName:"intro",slug:"/intro/sdk-design",permalink:"/v0.50/intro/sdk-design",draft:!1,tags:[],version:"v0.50",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Blockchain Architecture",permalink:"/v0.50/intro/sdk-app-architecture"},next:{title:"Anatomy of a Cosmos SDK Application",permalink:"/v0.50/basics/app-anatomy"}},l={},p=[{value:"<code>baseapp</code>",id:"baseapp",level:2},{value:"Multistore",id:"multistore",level:2},{value:"Modules",id:"modules",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"main-components-of-the-cosmos-sdk"},"Main Components of the Cosmos SDK"),(0,o.kt)("p",null,"The Cosmos SDK is a framework that facilitates the development of secure state-machines on top of CometBFT. At its core, the Cosmos SDK is a boilerplate implementation of the ",(0,o.kt)("a",{parentName:"p",href:"/v0.50/intro/sdk-app-architecture#abci"},"ABCI")," in Golang. It comes with a ",(0,o.kt)("a",{parentName:"p",href:"/v0.50/core/store#multistore"},(0,o.kt)("inlineCode",{parentName:"a"},"multistore"))," to persist data and a ",(0,o.kt)("a",{parentName:"p",href:"/v0.50/core/baseapp#routing"},(0,o.kt)("inlineCode",{parentName:"a"},"router"))," to handle transactions."),(0,o.kt)("p",null,"Here is a simplified view of how transactions are handled by an application built on top of the Cosmos SDK when transferred from CometBFT via ",(0,o.kt)("inlineCode",{parentName:"p"},"DeliverTx"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Decode ",(0,o.kt)("inlineCode",{parentName:"li"},"transactions")," received from the CometBFT consensus engine (remember that CometBFT only deals with ",(0,o.kt)("inlineCode",{parentName:"li"},"[]bytes"),")."),(0,o.kt)("li",{parentName:"ol"},"Extract ",(0,o.kt)("inlineCode",{parentName:"li"},"messages")," from ",(0,o.kt)("inlineCode",{parentName:"li"},"transactions")," and do basic sanity checks."),(0,o.kt)("li",{parentName:"ol"},"Route each message to the appropriate module so that it can be processed."),(0,o.kt)("li",{parentName:"ol"},"Commit state changes.")),(0,o.kt)("h2",{id:"baseapp"},(0,o.kt)("inlineCode",{parentName:"h2"},"baseapp")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"baseapp")," is the boilerplate implementation of a Cosmos SDK application. It comes with an implementation of the ABCI to handle the connection with the underlying consensus engine. Typically, a Cosmos SDK application extends ",(0,o.kt)("inlineCode",{parentName:"p"},"baseapp")," by embedding it in ",(0,o.kt)("a",{parentName:"p",href:"/v0.50/basics/app-anatomy#core-application-file"},(0,o.kt)("inlineCode",{parentName:"a"},"app.go")),"."),(0,o.kt)("p",null,"Here is an example of this from ",(0,o.kt)("inlineCode",{parentName:"p"},"simapp"),", the Cosmos SDK demonstration app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/simapp/app.go#L164-L203\n")),(0,o.kt)("p",null,"The goal of ",(0,o.kt)("inlineCode",{parentName:"p"},"baseapp")," is to provide a secure interface between the store and the extensible state machine while defining as little about the state machine as possible (staying true to the ABCI)."),(0,o.kt)("p",null,"For more on ",(0,o.kt)("inlineCode",{parentName:"p"},"baseapp"),", please click ",(0,o.kt)("a",{parentName:"p",href:"/v0.50/core/baseapp"},"here"),"."),(0,o.kt)("h2",{id:"multistore"},"Multistore"),(0,o.kt)("p",null,"The Cosmos SDK provides a ",(0,o.kt)("a",{parentName:"p",href:"/v0.50/core/store#multistore"},(0,o.kt)("inlineCode",{parentName:"a"},"multistore"))," for persisting state. The multistore allows developers to declare any number of ",(0,o.kt)("a",{parentName:"p",href:"/v0.50/core/store#base-layer-kvstores"},(0,o.kt)("inlineCode",{parentName:"a"},"KVStores")),". These ",(0,o.kt)("inlineCode",{parentName:"p"},"KVStores")," only accept the ",(0,o.kt)("inlineCode",{parentName:"p"},"[]byte")," type as value and therefore any custom structure needs to be marshalled using ",(0,o.kt)("a",{parentName:"p",href:"/v0.50/core/encoding"},"a codec")," before being stored."),(0,o.kt)("p",null,"The multistore abstraction is used to divide the state in distinct compartments, each managed by its own module. For more on the multistore, click ",(0,o.kt)("a",{parentName:"p",href:"/v0.50/core/store#multistore"},"here")),(0,o.kt)("h2",{id:"modules"},"Modules"),(0,o.kt)("p",null,"The power of the Cosmos SDK lies in its modularity. Cosmos SDK applications are built by aggregating a collection of interoperable modules. Each module defines a subset of the state and contains its own message/transaction processor, while the Cosmos SDK is responsible for routing each message to its respective module."),(0,o.kt)("p",null,"Here is a simplified view of how a transaction is processed by the application of each full-node when it is received in a valid block:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"                                      +\n                                      |\n                                      |  Transaction relayed from the full-node's\n                                      |  CometBFT engine to the node's application\n                                      |  via DeliverTx\n                                      |\n                                      |\n                +---------------------v--------------------------+\n                |                 APPLICATION                    |\n                |                                                |\n                |     Using baseapp's methods: Decode the Tx,    |\n                |     extract and route the message(s)           |\n                |                                                |\n                +---------------------+--------------------------+\n                                      |\n                                      |\n                                      |\n                                      +---------------------------+\n                                                                  |\n                                                                  |\n                                                                  |  Message routed to\n                                                                  |  the correct module\n                                                                  |  to be processed\n                                                                  |\n                                                                  |\n+----------------+  +---------------+  +----------------+  +------v----------+\n|                |  |               |  |                |  |                 |\n|  AUTH MODULE   |  |  BANK MODULE  |  | STAKING MODULE |  |   GOV MODULE    |\n|                |  |               |  |                |  |                 |\n|                |  |               |  |                |  | Handles message,|\n|                |  |               |  |                |  | Updates state   |\n|                |  |               |  |                |  |                 |\n+----------------+  +---------------+  +----------------+  +------+----------+\n                                                                  |\n                                                                  |\n                                                                  |\n                                                                  |\n                                       +--------------------------+\n                                       |\n                                       | Return result to CometBFT\n                                       | (0=Ok, 1=Err)\n                                       v\n")),(0,o.kt)("p",null,"Each module can be seen as a little state-machine. Developers need to define the subset of the state handled by the module, as well as custom message types that modify the state (",(0,o.kt)("em",{parentName:"p"},"Note:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"messages")," are extracted from ",(0,o.kt)("inlineCode",{parentName:"p"},"transactions")," by ",(0,o.kt)("inlineCode",{parentName:"p"},"baseapp"),"). In general, each module declares its own ",(0,o.kt)("inlineCode",{parentName:"p"},"KVStore")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"multistore")," to persist the subset of the state it defines. Most developers will need to access other 3rd party modules when building their own modules. Given that the Cosmos SDK is an open framework, some of the modules may be malicious, which means there is a need for security principles to reason about inter-module interactions. These principles are based on ",(0,o.kt)("a",{parentName:"p",href:"/v0.50/core/ocap"},"object-capabilities"),". In practice, this means that instead of having each module keep an access control list for other modules, each module implements special objects called ",(0,o.kt)("inlineCode",{parentName:"p"},"keepers")," that can be passed to other modules to grant a pre-defined set of capabilities."),(0,o.kt)("p",null,"Cosmos SDK modules are defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"x/")," folder of the Cosmos SDK. Some core modules include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/auth"),": Used to manage accounts and signatures."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/bank"),": Used to enable tokens and token transfers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x/staking")," + ",(0,o.kt)("inlineCode",{parentName:"li"},"x/slashing"),": Used to build Proof-Of-Stake blockchains.")),(0,o.kt)("p",null,"In addition to the already existing modules in ",(0,o.kt)("inlineCode",{parentName:"p"},"x/"),", that anyone can use in their app, the Cosmos SDK lets you build your own custom modules. You can check an ",(0,o.kt)("a",{parentName:"p",href:"https://tutorials.cosmos.network/"},"example of that in the tutorial"),"."))}c.isMDXComponent=!0}}]);