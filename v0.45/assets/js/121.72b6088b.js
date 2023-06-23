(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{647:function(e,t,s){"use strict";s.r(t);var o=s(1),c=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"messages-and-queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#messages-and-queries"}},[e._v("#")]),e._v(" Messages and Queries")]),e._v(" "),s("p",{attrs:{synopsis:""}},[s("code",[e._v("Msg")]),e._v("s and "),s("code",[e._v("Queries")]),e._v(" are the two primary objects handled by modules. Most of the core components defined in a module, like "),s("code",[e._v("Msg")]),e._v(" services, "),s("code",[e._v("keeper")]),e._v("s and "),s("code",[e._v("Query")]),e._v(" services, exist to process "),s("code",[e._v("message")]),e._v("s and "),s("code",[e._v("queries")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"pre-requisite-readings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),s("ul",[s("li",{attrs:{prereq:""}},[s("RouterLink",{attrs:{to:"/building-modules/intro.html"}},[e._v("Introduction to SDK Modules")])],1)]),e._v(" "),s("h2",{attrs:{id:"messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),s("p",[s("code",[e._v("Msg")]),e._v("s are objects whose end-goal is to trigger state-transitions. They are wrapped in "),s("RouterLink",{attrs:{to:"/core/transactions.html"}},[e._v("transactions")]),e._v(", which may contain one or more of them.")],1),e._v(" "),s("p",[e._v("When a transaction is relayed from the underlying consensus engine to the SDK application, it is first decoded by "),s("RouterLink",{attrs:{to:"/core/baseapp.html"}},[s("code",[e._v("BaseApp")])]),e._v(". Then, each message contained in the transaction is extracted and routed to the appropriate module via "),s("code",[e._v("BaseApp")]),e._v("'s "),s("code",[e._v("MsgServiceRouter")]),e._v(" so that it can be processed by the module's "),s("RouterLink",{attrs:{to:"/building-modules/msg-services.html"}},[s("code",[e._v("Msg")]),e._v(" service")]),e._v(". For a more detailed explanation of the lifecycle of a transaction, click "),s("RouterLink",{attrs:{to:"/basics/tx-lifecycle.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),s("h3",{attrs:{id:"msg-services"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#msg-services"}},[e._v("#")]),e._v(" "),s("code",[e._v("Msg")]),e._v(" Services")]),e._v(" "),s("p",[e._v("Starting from v0.40, defining Protobuf "),s("code",[e._v("Msg")]),e._v(" services is the recommended way to handle messages. A Protobuf "),s("code",[e._v("Msg")]),e._v(" service should be created for each module, typically in "),s("code",[e._v("tx.proto")]),e._v(" (see more info about "),s("RouterLink",{attrs:{to:"/core/encoding.html#faq"}},[e._v("conventions and naming")]),e._v("). It must have an RPC service method defined for each message in the module.")],1),e._v(" "),s("p",[e._v("See an example of a "),s("code",[e._v("Msg")]),e._v(" service definition from "),s("code",[e._v("x/bank")]),e._v(" module:")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnIGRlZmluZXMgdGhlIGJhbmsgTXNnIHNlcnZpY2UuCnNlcnZpY2UgTXNnIHsKICAvLyBTZW5kIGRlZmluZXMgYSBtZXRob2QgZm9yIHNlbmRpbmcgY29pbnMgZnJvbSBvbmUgYWNjb3VudCB0byBhbm90aGVyIGFjY291bnQuCiAgcnBjIFNlbmQoTXNnU2VuZCkgcmV0dXJucyAoTXNnU2VuZFJlc3BvbnNlKTsKCiAgLy8gTXVsdGlTZW5kIGRlZmluZXMgYSBtZXRob2QgZm9yIHNlbmRpbmcgY29pbnMgZnJvbSBzb21lIGFjY291bnRzIHRvIG90aGVyIGFjY291bnRzLgogIHJwYyBNdWx0aVNlbmQoTXNnTXVsdGlTZW5kKSByZXR1cm5zIChNc2dNdWx0aVNlbmRSZXNwb25zZSk7Cn0="}})],1),e._v(" "),s("p",[e._v("Each "),s("code",[e._v("Msg")]),e._v(" service method must have exactly one argument, which must implement the "),s("code",[e._v("sdk.Msg")]),e._v(" interface, and a Protobuf response. The naming convention is to call the RPC argument "),s("code",[e._v("Msg<service-rpc-name>")]),e._v(" and the RPC response "),s("code",[e._v("Msg<service-rpc-name>Response")]),e._v(". For example:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ICBycGMgU2VuZChNc2dTZW5kKSByZXR1cm5zIChNc2dTZW5kUmVzcG9uc2UpOwo="}}),e._v(" "),s("p",[s("code",[e._v("sdk.Msg")]),e._v(" interface is a simplified version of the Amino "),s("code",[e._v("LegacyMsg")]),e._v(" interface described "),s("a",{attrs:{href:"#legacy-amino-msgs"}},[e._v("below")]),e._v(" with only "),s("code",[e._v("ValidateBasic()")]),e._v(" and "),s("code",[e._v("GetSigners()")]),e._v(" methods. For backwards compatibility with "),s("a",{attrs:{href:"#legacy-amino-msgs"}},[e._v("Amino "),s("code",[e._v("LegacyMsg")]),e._v("s")]),e._v(", existing "),s("code",[e._v("LegacyMsg")]),e._v(" types should be used as the request parameter for "),s("code",[e._v("service")]),e._v(" RPC definitions. Newer "),s("code",[e._v("sdk.Msg")]),e._v(" types, which only support "),s("code",[e._v("service")]),e._v(" definitions, should use canonical "),s("code",[e._v("Msg...")]),e._v(" name.")]),e._v(" "),s("p",[e._v("Cosmos SDK uses Protobuf definitions to generate client and server code:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("MsgServer")]),e._v(" interface defines the server API for the "),s("code",[e._v("Msg")]),e._v(" service and its implementation is described as part of the "),s("RouterLink",{attrs:{to:"/building-modules/msg-services.html"}},[s("code",[e._v("Msg")]),e._v(" services")]),e._v(" documentation.")],1),e._v(" "),s("li",[e._v("Structures are generated for all RPC request and response types.")])]),e._v(" "),s("p",[e._v("A "),s("code",[e._v("RegisterMsgServer")]),e._v(" method is also generated and should be used to register the module's "),s("code",[e._v("MsgServer")]),e._v(" implementation in "),s("code",[e._v("RegisterServices")]),e._v(" method from the "),s("RouterLink",{attrs:{to:"/building-modules/module-manager.html#appmodule"}},[s("code",[e._v("AppModule")]),e._v(" interface")]),e._v(".")],1),e._v(" "),s("p",[e._v("In order for clients (CLI and grpc-gateway) to have these URLs registered, the SDK provides the function "),s("code",[e._v("RegisterMsgServiceDesc(registry codectypes.InterfaceRegistry, sd *grpc.ServiceDesc)")]),e._v(" that should be called inside module's "),s("RouterLink",{attrs:{to:"/building-modules/module-manager.html#appmodulebasic"}},[s("code",[e._v("RegisterInterfaces")])]),e._v(" method, using the proto-generated "),s("code",[e._v("&_Msg_serviceDesc")]),e._v(" as "),s("code",[e._v("*grpc.ServiceDesc")]),e._v(" argument.")],1),e._v(" "),s("h3",{attrs:{id:"legacy-amino-legacymsgs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#legacy-amino-legacymsgs"}},[e._v("#")]),e._v(" Legacy Amino "),s("code",[e._v("LegacyMsg")]),e._v("s")]),e._v(" "),s("p",[e._v("The following way of defining messages is deprecated and using "),s("a",{attrs:{href:"#msg-services"}},[s("code",[e._v("Msg")]),e._v(" services")]),e._v(" is preferred.")]),e._v(" "),s("p",[e._v("Amino "),s("code",[e._v("LegacyMsg")]),e._v("s can be defined as protobuf messages. The messages definition usually includes a list of parameters needed to process the message that will be provided by end-users when they want to create a new transaction containing said message.")]),e._v(" "),s("p",[e._v("A "),s("code",[e._v("LegacyMsg")]),e._v(" is typically accompanied by a standard constructor function, that is called from one of the "),s("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html"}},[e._v("module's interface")]),e._v(". "),s("code",[e._v("message")]),e._v("s also need to implement the "),s("code",[e._v("sdk.Msg")]),e._v(" interface:")],1),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CS8vIE1zZyBkZWZpbmVzIHRoZSBpbnRlcmZhY2UgYSB0cmFuc2FjdGlvbiBtZXNzYWdlIG11c3QgZnVsZmlsbC4KCU1zZyBpbnRlcmZhY2UgewoJCXByb3RvLk1lc3NhZ2UKCgkJLy8gUmV0dXJuIHRoZSBtZXNzYWdlIHR5cGUuCgkJLy8gTXVzdCBiZSBhbHBoYW51bWVyaWMgb3IgZW1wdHkuCgkJUm91dGUoKSBzdHJpbmcKCgkJLy8gUmV0dXJucyBhIGh1bWFuLXJlYWRhYmxlIHN0cmluZyBmb3IgdGhlIG1lc3NhZ2UsIGludGVuZGVkIGZvciB1dGlsaXphdGlvbgoJCS8vIHdpdGhpbiB0YWdzCgkJVHlwZSgpIHN0cmluZwoKCQkvLyBWYWxpZGF0ZUJhc2ljIGRvZXMgYSBzaW1wbGUgdmFsaWRhdGlvbiBjaGVjayB0aGF0CgkJLy8gZG9lc24ndCByZXF1aXJlIGFjY2VzcyB0byBhbnkgb3RoZXIgaW5mb3JtYXRpb24uCgkJVmFsaWRhdGVCYXNpYygpIGVycm9yCgoJCS8vIEdldCB0aGUgY2Fub25pY2FsIGJ5dGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIE1zZy4KCQlHZXRTaWduQnl0ZXMoKSBbXWJ5dGUKCgkJLy8gU2lnbmVycyByZXR1cm5zIHRoZSBhZGRycyBvZiBzaWduZXJzIHRoYXQgbXVzdCBzaWduLgoJCS8vIENPTlRSQUNUOiBBbGwgc2lnbmF0dXJlcyBtdXN0IGJlIHByZXNlbnQgdG8gYmUgdmFsaWQuCgkJLy8gQ09OVFJBQ1Q6IFJldHVybnMgYWRkcnMgaW4gc29tZSBkZXRlcm1pbmlzdGljIG9yZGVyLgoJCUdldFNpZ25lcnMoKSBbXUFjY0FkZHJlc3MKCX0="}})],1),e._v(" "),s("p",[e._v("It extends "),s("code",[e._v("proto.Message")]),e._v(" and contains the following methods:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Route() string")]),e._v(": Name of the route for this message. Typically all "),s("code",[e._v("message")]),e._v("s in a module have the same route, which is most often the module's name.")]),e._v(" "),s("li",[s("code",[e._v("Type() string")]),e._v(": Type of the message, used primarly in "),s("RouterLink",{attrs:{to:"/core/events.html"}},[e._v("events")]),e._v(". This should return a message-specific "),s("code",[e._v("string")]),e._v(", typically the denomination of the message itself.")],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/basics/tx-lifecycle.html#ValidateBasic"}},[s("code",[e._v("ValidateBasic() error")])]),e._v(".")],1),e._v(" "),s("li",[s("code",[e._v("GetSignBytes() []byte")]),e._v(": Return the canonical byte representation of the message. Used to generate a signature.")]),e._v(" "),s("li",[s("code",[e._v("GetSigners() []AccAddress")]),e._v(": Return the list of signers. The SDK will make sure that each "),s("code",[e._v("message")]),e._v(" contained in a transaction is signed by all the signers listed in the list returned by this method.")])]),e._v(" "),s("p",[e._v("See an example implementation of a "),s("code",[e._v("message")]),e._v(" from the "),s("code",[e._v("gov")]),e._v(" module:")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUm91dGUgaW1wbGVtZW50cyBNc2cKZnVuYyAobSBNc2dTdWJtaXRQcm9wb3NhbCkgUm91dGUoKSBzdHJpbmcgeyByZXR1cm4gUm91dGVyS2V5IH0KCi8vIFR5cGUgaW1wbGVtZW50cyBNc2cKZnVuYyAobSBNc2dTdWJtaXRQcm9wb3NhbCkgVHlwZSgpIHN0cmluZyB7IHJldHVybiBUeXBlTXNnU3VibWl0UHJvcG9zYWwgfQoKLy8gVmFsaWRhdGVCYXNpYyBpbXBsZW1lbnRzIE1zZwpmdW5jIChtIE1zZ1N1Ym1pdFByb3Bvc2FsKSBWYWxpZGF0ZUJhc2ljKCkgZXJyb3IgewoJaWYgbS5Qcm9wb3NlciA9PSAmcXVvdDsmcXVvdDsgewoJCXJldHVybiBzZGtlcnJvcnMuV3JhcChzZGtlcnJvcnMuRXJySW52YWxpZEFkZHJlc3MsIG0uUHJvcG9zZXIpCgl9CglpZiAhbS5Jbml0aWFsRGVwb3NpdC5Jc1ZhbGlkKCkgewoJCXJldHVybiBzZGtlcnJvcnMuV3JhcChzZGtlcnJvcnMuRXJySW52YWxpZENvaW5zLCBtLkluaXRpYWxEZXBvc2l0LlN0cmluZygpKQoJfQoJaWYgbS5Jbml0aWFsRGVwb3NpdC5Jc0FueU5lZ2F0aXZlKCkgewoJCXJldHVybiBzZGtlcnJvcnMuV3JhcChzZGtlcnJvcnMuRXJySW52YWxpZENvaW5zLCBtLkluaXRpYWxEZXBvc2l0LlN0cmluZygpKQoJfQoKCWNvbnRlbnQgOj0gbS5HZXRDb250ZW50KCkKCWlmIGNvbnRlbnQgPT0gbmlsIHsKCQlyZXR1cm4gc2RrZXJyb3JzLldyYXAoRXJySW52YWxpZFByb3Bvc2FsQ29udGVudCwgJnF1b3Q7bWlzc2luZyBjb250ZW50JnF1b3Q7KQoJfQoJaWYgIUlzVmFsaWRQcm9wb3NhbFR5cGUoY29udGVudC5Qcm9wb3NhbFR5cGUoKSkgewoJCXJldHVybiBzZGtlcnJvcnMuV3JhcChFcnJJbnZhbGlkUHJvcG9zYWxUeXBlLCBjb250ZW50LlByb3Bvc2FsVHlwZSgpKQoJfQoJaWYgZXJyIDo9IGNvbnRlbnQuVmFsaWRhdGVCYXNpYygpOyBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gZXJyCgl9CgoJcmV0dXJuIG5pbAp9CgovLyBHZXRTaWduQnl0ZXMgaW1wbGVtZW50cyBNc2cKZnVuYyAobSBNc2dTdWJtaXRQcm9wb3NhbCkgR2V0U2lnbkJ5dGVzKCkgW11ieXRlIHsKCWJ6IDo9IE1vZHVsZUNkYy5NdXN0TWFyc2hhbEpTT04oJmFtcDttKQoJcmV0dXJuIHNkay5NdXN0U29ydEpTT04oYnopCn0KCi8vIEdldFNpZ25lcnMgaW1wbGVtZW50cyBNc2cKZnVuYyAobSBNc2dTdWJtaXRQcm9wb3NhbCkgR2V0U2lnbmVycygpIFtdc2RrLkFjY0FkZHJlc3MgewoJcHJvcG9zZXIsIF8gOj0gc2RrLkFjY0FkZHJlc3NGcm9tQmVjaDMyKG0uUHJvcG9zZXIpCglyZXR1cm4gW11zZGsuQWNjQWRkcmVzc3twcm9wb3Nlcn0KfQoKLy8gU3RyaW5nIGltcGxlbWVudHMgdGhlIFN0cmluZ2VyIGludGVyZmFjZQpmdW5jIChtIE1zZ1N1Ym1pdFByb3Bvc2FsKSBTdHJpbmcoKSBzdHJpbmcgewoJb3V0LCBfIDo9IHlhbWwuTWFyc2hhbChtKQoJcmV0dXJuIHN0cmluZyhvdXQpCn0="}})],1),e._v(" "),s("h2",{attrs:{id:"queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#queries"}},[e._v("#")]),e._v(" Queries")]),e._v(" "),s("p",[e._v("A "),s("code",[e._v("query")]),e._v(" is a request for information made by end-users of applications through an interface and processed by a full-node. A "),s("code",[e._v("query")]),e._v(" is received by a full-node through its consensus engine and relayed to the application via the ABCI. It is then routed to the appropriate module via "),s("code",[e._v("BaseApp")]),e._v("'s "),s("code",[e._v("queryrouter")]),e._v(" so that it can be processed by the module's query service (./query-services.md). For a deeper look at the lifecycle of a "),s("code",[e._v("query")]),e._v(", click "),s("RouterLink",{attrs:{to:"/basics/query-lifecycle.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),s("h3",{attrs:{id:"grpc-queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grpc-queries"}},[e._v("#")]),e._v(" gRPC Queries")]),e._v(" "),s("p",[e._v("Starting from v0.40, the prefered way to define queries is by using "),s("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto#services",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protobuf services"),s("OutboundLink")],1),e._v(". A "),s("code",[e._v("Query")]),e._v(" service should be created per module in "),s("code",[e._v("query.proto")]),e._v(". This service lists endpoints starting with "),s("code",[e._v("rpc")]),e._v(".")]),e._v(" "),s("p",[e._v("Here's an example of such a "),s("code",[e._v("Query")]),e._v(" service definition:")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gUXVlcnkgZGVmaW5lcyB0aGUgZ1JQQyBxdWVyaWVyIHNlcnZpY2UuCnNlcnZpY2UgUXVlcnkgewogIC8vIEFjY291bnQgcmV0dXJucyBhY2NvdW50IGRldGFpbHMgYmFzZWQgb24gYWRkcmVzcy4KICBycGMgQWNjb3VudChRdWVyeUFjY291bnRSZXF1ZXN0KSByZXR1cm5zIChRdWVyeUFjY291bnRSZXNwb25zZSkgewogICAgb3B0aW9uIChnb29nbGUuYXBpLmh0dHApLmdldCA9ICZxdW90Oy9jb3Ntb3MvYXV0aC92MWJldGExL2FjY291bnRzL3thZGRyZXNzfSZxdW90OzsKICB9CgogIC8vIFBhcmFtcyBxdWVyaWVzIGFsbCBwYXJhbWV0ZXJzLgogIHJwYyBQYXJhbXMoUXVlcnlQYXJhbXNSZXF1ZXN0KSByZXR1cm5zIChRdWVyeVBhcmFtc1Jlc3BvbnNlKSB7CiAgICBvcHRpb24gKGdvb2dsZS5hcGkuaHR0cCkuZ2V0ID0gJnF1b3Q7L2Nvc21vcy9hdXRoL3YxYmV0YTEvcGFyYW1zJnF1b3Q7OwogIH0KfQ=="}})],1),e._v(" "),s("p",[e._v("As "),s("code",[e._v("proto.Message")]),e._v("s, generated "),s("code",[e._v("Response")]),e._v(" types implement by default "),s("code",[e._v("String()")]),e._v(" method of "),s("a",{attrs:{href:"https://golang.org/pkg/fmt/#Stringer",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("fmt.Stringer")]),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("A "),s("code",[e._v("RegisterQueryServer")]),e._v(" method is also generated and should be used to register the module's query server in the "),s("code",[e._v("RegisterServices")]),e._v(" method from the "),s("RouterLink",{attrs:{to:"/building-modules/module-manager.html#appmodule"}},[s("code",[e._v("AppModule")]),e._v(" interface")]),e._v(".")],1),e._v(" "),s("h3",{attrs:{id:"legacy-queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#legacy-queries"}},[e._v("#")]),e._v(" Legacy Queries")]),e._v(" "),s("p",[e._v("Before the introduction of Protobuf and gRPC in the SDK, there was usually no specific "),s("code",[e._v("query")]),e._v(" object defined by module developers, contrary to "),s("code",[e._v("message")]),e._v("s. Instead, the SDK took the simpler approach of using a simple "),s("code",[e._v("path")]),e._v(" to define each "),s("code",[e._v("query")]),e._v(". The "),s("code",[e._v("path")]),e._v(" contains the "),s("code",[e._v("query")]),e._v(" type and all the arguments needed in order to process it. For most module queries, the "),s("code",[e._v("path")]),e._v(" should look like the following:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"cXVlcnlDYXRlZ29yeS9xdWVyeVJvdXRlL3F1ZXJ5VHlwZS9hcmcxL2FyZzIvLi4uCg=="}}),e._v(" "),s("p",[e._v("where:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("queryCategory")]),e._v(" is the category of the "),s("code",[e._v("query")]),e._v(", typically "),s("code",[e._v("custom")]),e._v(" for module queries. It is used to differentiate between different kinds of queries within "),s("code",[e._v("BaseApp")]),e._v("'s "),s("RouterLink",{attrs:{to:"/core/baseapp.html#query"}},[s("code",[e._v("Query")]),e._v(" method")]),e._v(".")],1),e._v(" "),s("li",[s("code",[e._v("queryRoute")]),e._v(" is used by "),s("code",[e._v("BaseApp")]),e._v("'s "),s("RouterLink",{attrs:{to:"/core/baseapp.html#query-routing"}},[s("code",[e._v("queryRouter")])]),e._v(" to map the "),s("code",[e._v("query")]),e._v(" to its module. Usually, "),s("code",[e._v("queryRoute")]),e._v(" should be the name of the module.")],1),e._v(" "),s("li",[s("code",[e._v("queryType")]),e._v(" is used by the module's "),s("RouterLink",{attrs:{to:"/building-modules/query-services.html#legacy-queriers"}},[s("code",[e._v("querier")])]),e._v(" to map the "),s("code",[e._v("query")]),e._v(" to the appropriate "),s("code",[e._v("querier function")]),e._v(" within the module.")],1),e._v(" "),s("li",[s("code",[e._v("args")]),e._v(" are the actual arguments needed to process the "),s("code",[e._v("query")]),e._v(". They are filled out by the end-user. Note that for bigger queries, you might prefer passing arguments in the "),s("code",[e._v("Data")]),e._v(" field of the request "),s("code",[e._v("req")]),e._v(" instead of the "),s("code",[e._v("path")]),e._v(".")])]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("path")]),e._v(" for each "),s("code",[e._v("query")]),e._v(" must be defined by the module developer in the module's "),s("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#query-commands"}},[e._v("command-line interface file")]),e._v(".Overall, there are 3 mains components module developers need to implement in order to make the subset of the state defined by their module queryable:")],1),e._v(" "),s("ul",[s("li",[e._v("A "),s("RouterLink",{attrs:{to:"/building-modules/query-services.html#legacy-queriers"}},[s("code",[e._v("querier")])]),e._v(", to process the "),s("code",[e._v("query")]),e._v(" once it has been "),s("RouterLink",{attrs:{to:"/core/baseapp.html#query-routing"}},[e._v("routed to the module")]),e._v(".")],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#query-commands"}},[e._v("Query commands")]),e._v(" in the module's CLI file, where the "),s("code",[e._v("path")]),e._v(" for each "),s("code",[e._v("query")]),e._v(" is specified.")],1),e._v(" "),s("li",[s("code",[e._v("query")]),e._v(" return types. Typically defined in a file "),s("code",[e._v("types/querier.go")]),e._v(", they specify the result type of each of the module's "),s("code",[e._v("queries")]),e._v(". These custom types must implement the "),s("code",[e._v("String()")]),e._v(" method of "),s("a",{attrs:{href:"https://golang.org/pkg/fmt/#Stringer",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("fmt.Stringer")]),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("h3",{attrs:{id:"store-queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#store-queries"}},[e._v("#")]),e._v(" Store Queries")]),e._v(" "),s("p",[e._v("Store queries query directly for store keys. They use "),s("code",[e._v("clientCtx.QueryABCI(req abci.RequestQuery)")]),e._v(" to return the full "),s("code",[e._v("abci.ResponseQuery")]),e._v(" with inclusion Merkle proofs.")]),e._v(" "),s("p",[e._v("See following examples:")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CXJlcSA6PSBhYmNpLlJlcXVlc3RRdWVyeXsKCQlQYXRoOiAgIGZtdC5TcHJpbnRmKCZxdW90O3N0b3JlLyVzL2tleSZxdW90OywgaG9zdC5TdG9yZUtleSksCgkJSGVpZ2h0OiBoZWlnaHQsCgkJRGF0YTogICBrZXksCgkJUHJvdmU6ICB0cnVlLAoJfQoKCXJlcywgZXJyIDo9IGNsaWVudEN0eC5RdWVyeUFCQ0kocmVxKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIG5pbCwgbmlsLCBjbGllbnR0eXBlcy5IZWlnaHR7fSwgZXJyCgl9"}})],1),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBoYW5kbGVRdWVyeVN0b3JlKGFwcCAqQmFzZUFwcCwgcGF0aCBbXXN0cmluZywgcmVxIGFiY2kuUmVxdWVzdFF1ZXJ5KSBhYmNpLlJlc3BvbnNlUXVlcnkgewoJLy8gJnF1b3Q7L3N0b3JlJnF1b3Q7IHByZWZpeCBmb3Igc3RvcmUgcXVlcmllcwoJcXVlcnlhYmxlLCBvayA6PSBhcHAuY21zLihzZGsuUXVlcnlhYmxlKQoJaWYgIW9rIHsKCQlyZXR1cm4gc2RrZXJyb3JzLlF1ZXJ5UmVzdWx0KHNka2Vycm9ycy5XcmFwKHNka2Vycm9ycy5FcnJVbmtub3duUmVxdWVzdCwgJnF1b3Q7bXVsdGlzdG9yZSBkb2Vzbid0IHN1cHBvcnQgcXVlcmllcyZxdW90OykpCgl9CgoJcmVxLlBhdGggPSAmcXVvdDsvJnF1b3Q7ICsgc3RyaW5ncy5Kb2luKHBhdGhbMTpdLCAmcXVvdDsvJnF1b3Q7KQoKCS8vIHdoZW4gYSBjbGllbnQgZGlkIG5vdCBwcm92aWRlIGEgcXVlcnkgaGVpZ2h0LCBtYW51YWxseSBpbmplY3QgdGhlIGxhdGVzdAoJaWYgcmVxLkhlaWdodCA9PSAwIHsKCQlyZXEuSGVpZ2h0ID0gYXBwLkxhc3RCbG9ja0hlaWdodCgpCgl9CgoJaWYgcmVxLkhlaWdodCAmbHQ7PSAxICZhbXA7JmFtcDsgcmVxLlByb3ZlIHsKCQlyZXR1cm4gc2RrZXJyb3JzLlF1ZXJ5UmVzdWx0KAoJCQlzZGtlcnJvcnMuV3JhcCgKCQkJCXNka2Vycm9ycy5FcnJJbnZhbGlkUmVxdWVzdCwKCQkJCSZxdW90O2Nhbm5vdCBxdWVyeSB3aXRoIHByb29mIHdoZW4gaGVpZ2h0ICZsdDs9IDE7IHBsZWFzZSBwcm92aWRlIGEgdmFsaWQgaGVpZ2h0JnF1b3Q7LAoJCQkpLAoJCSkKCX0KCglyZXNwIDo9IHF1ZXJ5YWJsZS5RdWVyeShyZXEpCglyZXNwLkhlaWdodCA9IHJlcS5IZWlnaHQKCglyZXR1cm4gcmVzcAp9"}})],1),e._v(" "),s("h2",{attrs:{hide:"",id:"next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),s("p",{attrs:{hide:""}},[e._v("Learn about "),s("RouterLink",{attrs:{to:"/building-modules/msg-services.html"}},[s("code",[e._v("Msg")]),e._v(" services")])],1)],1)}),[],!1,null,null,null);t.default=c.exports}}]);