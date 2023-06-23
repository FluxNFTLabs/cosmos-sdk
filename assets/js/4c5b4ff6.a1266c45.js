"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[5157],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},32135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const r={},i="ADR 033: Protobuf-based Inter-Module Communication",l={unversionedId:"architecture/adr-033-protobuf-inter-module-comm",id:"version-v0.50/architecture/adr-033-protobuf-inter-module-comm",title:"ADR 033: Protobuf-based Inter-Module Communication",description:"Changelog",source:"@site/versioned_docs/version-v0.50/architecture/adr-033-protobuf-inter-module-comm.md",sourceDirName:"architecture",slug:"/architecture/adr-033-protobuf-inter-module-comm",permalink:"/v0.50/architecture/adr-033-protobuf-inter-module-comm",draft:!1,tags:[],version:"v0.50",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADR 032: Typed Events",permalink:"/v0.50/architecture/adr-032-typed-events"},next:{title:"ADR 034: Account Rekeying",permalink:"/v0.50/architecture/adr-034-account-rekeying"}},s={},d=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"<code>x/bank</code> Case Study",id:"xbank-case-study",level:3},{value:"Decision",id:"decision",level:2},{value:"New &quot;Keeper&quot; Paradigm",id:"new-keeper-paradigm",level:3},{value:"Inter-module Communication",id:"inter-module-communication",level:3},{value:"<code>ModuleKey</code>s and <code>ModuleID</code>s",id:"modulekeys-and-moduleids",level:3},{value:"<code>AppModule</code> Wiring and Requirements",id:"appmodule-wiring-and-requirements",level:3},{value:"Security Considerations",id:"security-considerations",level:3},{value:"Recursion and Re-entry",id:"recursion-and-re-entry",level:4},{value:"Queries",id:"queries",level:4},{value:"Internal Methods",id:"internal-methods",level:3},{value:"Authorization",id:"authorization",level:3},{value:"Future Work",id:"future-work",level:3},{value:"Alternatives",id:"alternatives",level:2},{value:"MsgServices vs <code>x/capability</code>",id:"msgservices-vs-xcapability",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Test Cases optional",id:"test-cases-optional",level:2},{value:"References",id:"references",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"adr-033-protobuf-based-inter-module-communication"},"ADR 033: Protobuf-based Inter-Module Communication"),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"2020-10-05: Initial Draft")),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("p",null,"Proposed"),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,"This ADR introduces a system for permissioned inter-module communication leveraging the protobuf ",(0,o.kt)("inlineCode",{parentName:"p"},"Query")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Msg"),"\nservice definitions defined in ",(0,o.kt)("a",{parentName:"p",href:"/v0.50/architecture/adr-021-protobuf-query-encoding"},"ADR 021")," and\n",(0,o.kt)("a",{parentName:"p",href:"/v0.50/architecture/adr-031-msg-service"},"ADR 031")," which provides:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"stable protobuf based module interfaces to potentially later replace the keeper paradigm"),(0,o.kt)("li",{parentName:"ul"},"stronger inter-module object capabilities (OCAPs) guarantees"),(0,o.kt)("li",{parentName:"ul"},"module accounts and sub-account authorization")),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"In the current Cosmos SDK documentation on the ",(0,o.kt)("a",{parentName:"p",href:"/v0.50/core/ocap"},"Object-Capability Model"),", it is stated that:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We assume that a thriving ecosystem of Cosmos SDK modules that are easy to compose into a blockchain application will contain faulty or malicious modules.")),(0,o.kt)("p",null,"There is currently not a thriving ecosystem of Cosmos SDK modules. We hypothesize that this is in part due to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"lack of a stable v1.0 Cosmos SDK to build modules off of. Module interfaces are changing, sometimes dramatically, from\npoint release to point release, often for good reasons, but this does not create a stable foundation to build on."),(0,o.kt)("li",{parentName:"ol"},"lack of a properly implemented object capability or even object-oriented encapsulation system which makes refactors\nof module keeper interfaces inevitable because the current interfaces are poorly constrained.")),(0,o.kt)("h3",{id:"xbank-case-study"},(0,o.kt)("inlineCode",{parentName:"h3"},"x/bank")," Case Study"),(0,o.kt)("p",null,"Currently the ",(0,o.kt)("inlineCode",{parentName:"p"},"x/bank")," keeper gives pretty much unrestricted access to any module which references it. For instance, the\n",(0,o.kt)("inlineCode",{parentName:"p"},"SetBalance")," method allows the caller to set the balance of any account to anything, bypassing even proper tracking of supply."),(0,o.kt)("p",null,"There appears to have been some later attempts to implement some semblance of OCAPs using module-level minting, staking\nand burning permissions. These permissions allow a module to mint, burn or delegate tokens with reference to the module\u2019s\nown account. These permissions are actually stored as a ",(0,o.kt)("inlineCode",{parentName:"p"},"[]string")," array on the ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleAccount")," type in state."),(0,o.kt)("p",null,"However, these permissions don\u2019t really do much. They control what modules can be referenced in the ",(0,o.kt)("inlineCode",{parentName:"p"},"MintCoins"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"BurnCoins")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"DelegateCoins***")," methods, but for one there is no unique object capability token that controls access \u2014\njust a simple string. So the ",(0,o.kt)("inlineCode",{parentName:"p"},"x/upgrade")," module could mint tokens for the ",(0,o.kt)("inlineCode",{parentName:"p"},"x/staking")," module simple by calling\n",(0,o.kt)("inlineCode",{parentName:"p"},"MintCoins(\u201cstaking\u201d)"),". Furthermore, all modules which have access to these keeper methods, also have access to\n",(0,o.kt)("inlineCode",{parentName:"p"},"SetBalance")," negating any other attempt at OCAPs and breaking even basic object-oriented encapsulation."),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,"Based on ",(0,o.kt)("a",{parentName:"p",href:"/v0.50/architecture/adr-021-protobuf-query-encoding"},"ADR-021")," and ",(0,o.kt)("a",{parentName:"p",href:"/v0.50/architecture/adr-031-msg-service"},"ADR-031"),", we introduce the\nInter-Module Communication framework for secure module authorization and OCAPs.\nWhen implemented, this could also serve as an alternative to the existing paradigm of passing keepers between\nmodules. The approach outlined here-in is intended to form the basis of a Cosmos SDK v1.0 that provides the necessary\nstability and encapsulation guarantees that allow a thriving module ecosystem to emerge."),(0,o.kt)("p",null,"Of particular note \u2014 the decision is to ",(0,o.kt)("em",{parentName:"p"},"enable")," this functionality for modules to adopt at their own discretion.\nProposals to migrate existing modules to this new paradigm will have to be a separate conversation, potentially\naddressed as amendments to this ADR."),(0,o.kt)("h3",{id:"new-keeper-paradigm"},'New "Keeper" Paradigm'),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"/v0.50/architecture/adr-021-protobuf-query-encoding"},"ADR 021"),", a mechanism for using protobuf service definitions to define queriers\nwas introduced and in ",(0,o.kt)("a",{parentName:"p",href:"/v0.50/architecture/adr-031-msg-service"},"ADR 31"),", a mechanism for using protobuf service to define ",(0,o.kt)("inlineCode",{parentName:"p"},"Msg"),"s was added.\nProtobuf service definitions generate two golang interfaces representing the client and server sides of a service plus\nsome helper code. Here is a minimal example for the bank ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmos.bank.Msg/Send")," message type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"package bank\n\ntype MsgClient interface {\n    Send(context.Context, *MsgSend, opts ...grpc.CallOption) (*MsgSendResponse, error)\n}\n\ntype MsgServer interface {\n    Send(context.Context, *MsgSend) (*MsgSendResponse, error)\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/v0.50/architecture/adr-021-protobuf-query-encoding"},"ADR 021")," and ",(0,o.kt)("a",{parentName:"p",href:"/v0.50/architecture/adr-031-msg-service"},"ADR 31")," specifies how modules can implement the generated ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryServer"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgServer")," interfaces as replacements for the legacy queriers and ",(0,o.kt)("inlineCode",{parentName:"p"},"Msg")," handlers respectively."),(0,o.kt)("p",null,"In this ADR we explain how modules can make queries and send ",(0,o.kt)("inlineCode",{parentName:"p"},"Msg"),"s to other modules using the generated ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryClient"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgClient")," interfaces and propose this mechanism as a replacement for the existing ",(0,o.kt)("inlineCode",{parentName:"p"},"Keeper")," paradigm. To be clear,\nthis ADR does not necessitate the creation of new protobuf definitions or services. Rather, it leverages the same proto\nbased service interfaces already used by clients for inter-module communication."),(0,o.kt)("p",null,"Using this ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryClient"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"MsgClient")," approach has the following key benefits over exposing keepers to external modules:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Protobuf types are checked for breaking changes using ",(0,o.kt)("a",{parentName:"li",href:"https://buf.build/docs/breaking-overview"},"buf")," and because of\nthe way protobuf is designed this will give us strong backwards compatibility guarantees while allowing for forward\nevolution."),(0,o.kt)("li",{parentName:"ol"},"The separation between the client and server interfaces will allow us to insert permission checking code in between\nthe two which checks if one module is authorized to send the specified ",(0,o.kt)("inlineCode",{parentName:"li"},"Msg")," to the other module providing a proper\nobject capability system (see below)."),(0,o.kt)("li",{parentName:"ol"},"The router for inter-module communication gives us a convenient place to handle rollback of transactions,\nenabling atomicy of operations (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/8030"},"currently a problem"),"). Any failure within a module-to-module call would result in a failure of the entire\ntransaction")),(0,o.kt)("p",null,"This mechanism has the added benefits of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"reducing boilerplate through code generation, and"),(0,o.kt)("li",{parentName:"ul"},"allowing for modules in other languages either via a VM like CosmWasm or sub-processes using gRPC")),(0,o.kt)("h3",{id:"inter-module-communication"},"Inter-module Communication"),(0,o.kt)("p",null,"To use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Client")," generated by the protobuf compiler we need a ",(0,o.kt)("inlineCode",{parentName:"p"},"grpc.ClientConn")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/grpc/grpc-go/blob/v1.49.x/clientconn.go#L441-L450"},"interface"),"\nimplementation. For this we introduce\na new type, ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleKey"),", which implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"grpc.ClientConn")," interface. ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleKey"),' can be thought of as the "private\nkey" corresponding to a module account, where authentication is provided through use of a special ',(0,o.kt)("inlineCode",{parentName:"p"},"Invoker()")," function,\ndescribed in more detail below."),(0,o.kt)("p",null,"Blockchain users (external clients) use their account's private key to sign transactions containing ",(0,o.kt)("inlineCode",{parentName:"p"},"Msg"),"s where they are listed as signers (each\nmessage specifies required signers with ",(0,o.kt)("inlineCode",{parentName:"p"},"Msg.GetSigner"),"). The authentication checks is performed by ",(0,o.kt)("inlineCode",{parentName:"p"},"AnteHandler"),"."),(0,o.kt)("p",null,"Here, we extend this process, by allowing modules to be identified in ",(0,o.kt)("inlineCode",{parentName:"p"},"Msg.GetSigners"),". When a module wants to trigger the execution a ",(0,o.kt)("inlineCode",{parentName:"p"},"Msg")," in another module,\nits ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleKey")," acts as the sender (through the ",(0,o.kt)("inlineCode",{parentName:"p"},"ClientConn")," interface we describe below) and is set as a sole \"signer\". It's worth to note\nthat we don't use any cryptographic signature in this case.\nFor example, module ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," could use its ",(0,o.kt)("inlineCode",{parentName:"p"},"A.ModuleKey")," to create ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgSend")," object for ",(0,o.kt)("inlineCode",{parentName:"p"},"/cosmos.bank.Msg/Send")," transaction. ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgSend")," validation\nwill assure that the ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," account (",(0,o.kt)("inlineCode",{parentName:"p"},"A.ModuleKey")," in this case) is the signer."),(0,o.kt)("p",null,"Here's an example of a hypothetical module ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," interacting with ",(0,o.kt)("inlineCode",{parentName:"p"},"x/bank"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package foo\n\n\ntype FooMsgServer {\n  // ...\n\n  bankQuery bank.QueryClient\n  bankMsg   bank.MsgClient\n}\n\nfunc NewFooMsgServer(moduleKey RootModuleKey, ...) FooMsgServer {\n  // ...\n\n  return FooMsgServer {\n    // ...\n    modouleKey: moduleKey,\n    bankQuery: bank.NewQueryClient(moduleKey),\n    bankMsg: bank.NewMsgClient(moduleKey),\n  }\n}\n\nfunc (foo *FooMsgServer) Bar(ctx context.Context, req *MsgBarRequest) (*MsgBarResponse, error) {\n  balance, err := foo.bankQuery.Balance(&bank.QueryBalanceRequest{Address: fooMsgServer.moduleKey.Address(), Denom: "foo"})\n\n  ...\n\n  res, err := foo.bankMsg.Send(ctx, &bank.MsgSendRequest{FromAddress: fooMsgServer.moduleKey.Address(), ...})\n\n  ...\n}\n')),(0,o.kt)("p",null,"This design is also intended to be extensible to cover use cases of more fine grained permissioning like minting by\ndenom prefix being restricted to certain modules (as discussed in\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/pull/7459#discussion_r529545528"},"#7459"),")."),(0,o.kt)("h3",{id:"modulekeys-and-moduleids"},(0,o.kt)("inlineCode",{parentName:"h3"},"ModuleKey"),"s and ",(0,o.kt)("inlineCode",{parentName:"h3"},"ModuleID"),"s"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleKey"),' can be thought of as a "private key" for a module account and a ',(0,o.kt)("inlineCode",{parentName:"p"},"ModuleID"),' can be thought of as the\ncorresponding "public key". From the ',(0,o.kt)("a",{parentName:"p",href:"/v0.50/architecture/adr-028-public-key-addresses"},"ADR 028"),", modules can have both a root module account and any number of sub-accounts\nor derived accounts that can be used for different pools (ex. staking pools) or managed accounts (ex. group\naccounts). We can also think of module sub-accounts as similar to derived keys - there is a root key and then some\nderivation path. ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleID"),' is a simple struct which contains the module name and optional "derivation" path,\nand forms its address based on the ',(0,o.kt)("inlineCode",{parentName:"p"},"AddressHash")," method from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-028-public-key-addresses.md"},"the ADR-028"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type ModuleID struct {\n  ModuleName string\n  Path []byte\n}\n\nfunc (key ModuleID) Address() []byte {\n  return AddressHash(key.ModuleName, key.Path)\n}\n")),(0,o.kt)("p",null,"In addition to being able to generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleID")," and address, a ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleKey")," contains a special function called\n",(0,o.kt)("inlineCode",{parentName:"p"},"Invoker")," which is the key to safe inter-module access. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Invoker")," creates an ",(0,o.kt)("inlineCode",{parentName:"p"},"InvokeFn")," closure which is used as an ",(0,o.kt)("inlineCode",{parentName:"p"},"Invoke")," method in\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"grpc.ClientConn")," interface and under the hood is able to route messages to the appropriate ",(0,o.kt)("inlineCode",{parentName:"p"},"Msg")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Query")," handlers\nperforming appropriate security checks on ",(0,o.kt)("inlineCode",{parentName:"p"},"Msg"),"s. This allows for even safer inter-module access than keeper's whose\nprivate member variables could be manipulated through reflection. Golang does not support reflection on a function\nclosure's captured variables and direct manipulation of memory would be needed for a truly malicious module to bypass\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleKey")," security."),(0,o.kt)("p",null,"The two ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleKey")," types are ",(0,o.kt)("inlineCode",{parentName:"p"},"RootModuleKey")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"DerivedModuleKey"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Invoker func(callInfo CallInfo) func(ctx context.Context, request, response interface{}, opts ...interface{}) error\n\ntype CallInfo {\n  Method string\n  Caller ModuleID\n}\n\ntype RootModuleKey struct {\n  moduleName string\n  invoker Invoker\n}\n\nfunc (rm RootModuleKey) Derive(path []byte) DerivedModuleKey { /* ... */}\n\ntype DerivedModuleKey struct {\n  moduleName string\n  path []byte\n  invoker Invoker\n}\n")),(0,o.kt)("p",null,"A module can get access to a ",(0,o.kt)("inlineCode",{parentName:"p"},"DerivedModuleKey"),", using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Derive(path []byte)")," method on ",(0,o.kt)("inlineCode",{parentName:"p"},"RootModuleKey")," and then\nwould use this key to authenticate ",(0,o.kt)("inlineCode",{parentName:"p"},"Msg"),"s from a sub-account. Ex:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"package foo\n\nfunc (fooMsgServer *MsgServer) Bar(ctx context.Context, req *MsgBar) (*MsgBarResponse, error) {\n  derivedKey := fooMsgServer.moduleKey.Derive(req.SomePath)\n  bankMsgClient := bank.NewMsgClient(derivedKey)\n  res, err := bankMsgClient.Balance(ctx, &bank.MsgSend{FromAddress: derivedKey.Address(), ...})\n  ...\n}\n")),(0,o.kt)("p",null,"In this way, a module can gain permissioned access to a root account and any number of sub-accounts and send\nauthenticated ",(0,o.kt)("inlineCode",{parentName:"p"},"Msg"),"s from these accounts. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Invoker")," ",(0,o.kt)("inlineCode",{parentName:"p"},"callInfo.Caller")," parameter is used under the hood to\ndistinguish between different module accounts, but either way the function returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"Invoker")," only allows ",(0,o.kt)("inlineCode",{parentName:"p"},"Msg"),"s\nfrom either the root or a derived module account to pass through."),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"Invoker")," itself returns a function closure based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"CallInfo")," passed in. This will allow client implementations\nin the future that cache the invoke function for each method type avoiding the overhead of hash table lookup.\nThis would reduce the performance overhead of this inter-module communication method to the bare minimum required for\nchecking permissions."),(0,o.kt)("p",null,"To re-iterate, the closure only allows access to authorized calls. There is no access to anything else regardless of any\nname impersonation."),(0,o.kt)("p",null,"Below is a rough sketch of the implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"grpc.ClientConn.Invoke")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"RootModuleKey"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (key RootModuleKey) Invoke(ctx context.Context, method string, args, reply interface{}, opts ...grpc.CallOption) error {\n  f := key.invoker(CallInfo {Method: method, Caller: ModuleID {ModuleName: key.moduleName}})\n  return f(ctx, args, reply)\n}\n")),(0,o.kt)("h3",{id:"appmodule-wiring-and-requirements"},(0,o.kt)("inlineCode",{parentName:"h3"},"AppModule")," Wiring and Requirements"),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"/v0.50/architecture/adr-031-msg-service"},"ADR 031"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"AppModule.RegisterService(Configurator)")," method was introduced. To support\ninter-module communication, we extend the ",(0,o.kt)("inlineCode",{parentName:"p"},"Configurator")," interface to pass in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleKey")," and to allow modules to\nspecify their dependencies on other modules using ",(0,o.kt)("inlineCode",{parentName:"p"},"RequireServer()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Configurator interface {\n   MsgServer() grpc.Server\n   QueryServer() grpc.Server\n\n   ModuleKey() ModuleKey\n   RequireServer(msgServer interface{})\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleKey")," is passed to modules in the ",(0,o.kt)("inlineCode",{parentName:"p"},"RegisterService")," method itself so that ",(0,o.kt)("inlineCode",{parentName:"p"},"RegisterServices")," serves as a single\nentry point for configuring module services. This is intended to also have the side-effect of greatly reducing boilerplate in\n",(0,o.kt)("inlineCode",{parentName:"p"},"app.go"),". For now, ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleKey"),"s will be created based on ",(0,o.kt)("inlineCode",{parentName:"p"},"AppModuleBasic.Name()"),", but a more flexible system may be\nintroduced in the future. The ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleManager")," will handle creation of module accounts behind the scenes."),(0,o.kt)("p",null,"Because modules do not get direct access to each other anymore, modules may have unfulfilled dependencies. To make sure\nthat module dependencies are resolved at startup, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Configurator.RequireServer")," method should be added. The ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleManager"),"\nwill make sure that all dependencies declared with ",(0,o.kt)("inlineCode",{parentName:"p"},"RequireServer")," can be resolved before the app starts. An example\nmodule ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," could declare it's dependency on ",(0,o.kt)("inlineCode",{parentName:"p"},"x/bank")," like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"package foo\n\nfunc (am AppModule) RegisterServices(cfg Configurator) {\n  cfg.RequireServer((*bank.QueryServer)(nil))\n  cfg.RequireServer((*bank.MsgServer)(nil))\n}\n")),(0,o.kt)("h3",{id:"security-considerations"},"Security Considerations"),(0,o.kt)("p",null,"In addition to checking for ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleKey")," permissions, a few additional security precautions will need to be taken by\nthe underlying router infrastructure."),(0,o.kt)("h4",{id:"recursion-and-re-entry"},"Recursion and Re-entry"),(0,o.kt)("p",null,"Recursive or re-entrant method invocations pose a potential security threat. This can be a problem if Module A\ncalls Module B and Module B calls module A again in the same call."),(0,o.kt)("p",null,"One basic way for the router system to deal with this is to maintain a call stack which prevents a module from\nbeing referenced more than once in the call stack so that there is no re-entry. A ",(0,o.kt)("inlineCode",{parentName:"p"},"map[string]interface{}")," table\nin the router could be used to perform this security check."),(0,o.kt)("h4",{id:"queries"},"Queries"),(0,o.kt)("p",null,"Queries in Cosmos SDK are generally un-permissioned so allowing one module to query another module should not pose\nany major security threats assuming basic precautions are taken. The basic precaution that the router system will\nneed to take is making sure that the ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk.Context")," passed to query methods does not allow writing to the store. This\ncan be done for now with a ",(0,o.kt)("inlineCode",{parentName:"p"},"CacheMultiStore")," as is currently done for ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseApp")," queries."),(0,o.kt)("h3",{id:"internal-methods"},"Internal Methods"),(0,o.kt)("p",null,"In many cases, we may wish for modules to call methods on other modules which are not exposed to clients at all. For this\npurpose, we add the ",(0,o.kt)("inlineCode",{parentName:"p"},"InternalServer")," method to ",(0,o.kt)("inlineCode",{parentName:"p"},"Configurator"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Configurator interface {\n   MsgServer() grpc.Server\n   QueryServer() grpc.Server\n   InternalServer() grpc.Server\n}\n")),(0,o.kt)("p",null,"As an example, x/slashing's Slash must call x/staking's Slash, but we don't want to expose x/staking's Slash to end users\nand clients."),(0,o.kt)("p",null,"Internal protobuf services will be defined in a corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"internal.proto")," file in the given module's\nproto package."),(0,o.kt)("p",null,"Services registered against ",(0,o.kt)("inlineCode",{parentName:"p"},"InternalServer")," will be callable from other modules but not by external clients."),(0,o.kt)("p",null,"An alternative solution to internal-only methods could involve hooks / plugins as discussed ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/pull/7459#issuecomment-733807753"},"here"),".\nA more detailed evaluation of a hooks / plugin system will be addressed later in follow-ups to this ADR or as a separate\nADR."),(0,o.kt)("h3",{id:"authorization"},"Authorization"),(0,o.kt)("p",null,"By default, the inter-module router requires that messages are sent by the first signer returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"GetSigners"),". The\ninter-module router should also accept authorization middleware such as that provided by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-030-authz-module.md"},"ADR 030"),'.\nThis middleware will allow accounts to otherwise specific module accounts to perform actions on their behalf.\nAuthorization middleware should take into account the need to grant certain modules effectively "admin" privileges to\nother modules. This will be addressed in separate ADRs or updates to this ADR.'),(0,o.kt)("h3",{id:"future-work"},"Future Work"),(0,o.kt)("p",null,"Other future improvements may include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"custom code generation that:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"simplifies interfaces (ex. generates code with ",(0,o.kt)("inlineCode",{parentName:"li"},"sdk.Context")," instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"context.Context"),")"),(0,o.kt)("li",{parentName:"ul"},"optimizes inter-module calls - for instance caching resolved methods after first invocation"))),(0,o.kt)("li",{parentName:"ul"},"combining ",(0,o.kt)("inlineCode",{parentName:"li"},"StoreKey"),"s and ",(0,o.kt)("inlineCode",{parentName:"li"},"ModuleKey"),"s into a single interface so that modules have a single OCAPs handle"),(0,o.kt)("li",{parentName:"ul"},"code generation which makes inter-module communication more performant"),(0,o.kt)("li",{parentName:"ul"},"decoupling ",(0,o.kt)("inlineCode",{parentName:"li"},"ModuleKey")," creation from ",(0,o.kt)("inlineCode",{parentName:"li"},"AppModuleBasic.Name()")," so that app's can override root module account names"),(0,o.kt)("li",{parentName:"ul"},"inter-module hooks and plugins")),(0,o.kt)("h2",{id:"alternatives"},"Alternatives"),(0,o.kt)("h3",{id:"msgservices-vs-xcapability"},"MsgServices vs ",(0,o.kt)("inlineCode",{parentName:"h3"},"x/capability")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"x/capability")," module does provide a proper object-capability implementation that can be used by any module in the\nCosmos SDK and could even be used for inter-module OCAPs as described in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/5931"},"#","5931"),"."),(0,o.kt)("p",null,"The advantages of the approach described in this ADR are mostly around how it integrates with other parts of the Cosmos SDK,\nspecifically:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"protobuf so that:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"code generation of interfaces can be leveraged for a better dev UX"),(0,o.kt)("li",{parentName:"ul"},"module interfaces are versioned and checked for breakage using ",(0,o.kt)("a",{parentName:"li",href:"https://docs.buf.build/breaking-overview"},"buf")))),(0,o.kt)("li",{parentName:"ul"},"sub-module accounts as per ADR 028"),(0,o.kt)("li",{parentName:"ul"},"the general ",(0,o.kt)("inlineCode",{parentName:"li"},"Msg")," passing paradigm and the way signers are specified by ",(0,o.kt)("inlineCode",{parentName:"li"},"GetSigners"))),(0,o.kt)("p",null,"Also, this is a complete replacement for keepers and could be applied to ",(0,o.kt)("em",{parentName:"p"},"all")," inter-module communication whereas the\n",(0,o.kt)("inlineCode",{parentName:"p"},"x/capability")," approach in #5931 would need to be applied method by method."),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,o.kt)("p",null,"This ADR is intended to provide a pathway to a scenario where there is greater long term compatibility between modules.\nIn the short-term, this will likely result in breaking certain ",(0,o.kt)("inlineCode",{parentName:"p"},"Keeper")," interfaces which are too permissive and/or\nreplacing ",(0,o.kt)("inlineCode",{parentName:"p"},"Keeper")," interfaces altogether."),(0,o.kt)("h3",{id:"positive"},"Positive"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"an alternative to keepers which can more easily lead to stable inter-module interfaces"),(0,o.kt)("li",{parentName:"ul"},"proper inter-module OCAPs"),(0,o.kt)("li",{parentName:"ul"},"improved module developer DevX, as commented on by several particpants on\n",(0,o.kt)("a",{parentName:"li",href:"https://hackmd.io/E0wxxOvRQ5qVmTf6N_k84Q"},"Architecture Review Call, Dec 3")),(0,o.kt)("li",{parentName:"ul"},"lays the groundwork for what can be a greatly simplified ",(0,o.kt)("inlineCode",{parentName:"li"},"app.go")),(0,o.kt)("li",{parentName:"ul"},"router can be setup to enforce atomic transactions for module-to-module calls")),(0,o.kt)("h3",{id:"negative"},"Negative"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"modules which adopt this will need significant refactoring")),(0,o.kt)("h3",{id:"neutral"},"Neutral"),(0,o.kt)("h2",{id:"test-cases-optional"},"Test Cases ","[optional]"),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v0.50/architecture/adr-021-protobuf-query-encoding"},"ADR 021")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v0.50/architecture/adr-031-msg-service"},"ADR 031")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v0.50/architecture/adr-028-public-key-addresses"},"ADR 028")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/7105"},"ADR 030 draft")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.network.com/main/core/ocap"},"Object-Capability Model"))))}p.isMDXComponent=!0}}]);