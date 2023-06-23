(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{680:function(e,t,o){"use strict";o.r(t);var r=o(1),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"grpc-rest-and-tendermint-endpoints"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#grpc-rest-and-tendermint-endpoints"}},[e._v("#")]),e._v(" gRPC, REST, and Tendermint Endpoints")]),e._v(" "),o("p",{attrs:{synopsis:""}},[e._v("This document presents an overview of all the endpoints a node exposes: gRPC, REST as well as some other endpoints.")]),e._v(" "),o("h2",{attrs:{id:"an-overview-of-all-endpoints"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#an-overview-of-all-endpoints"}},[e._v("#")]),e._v(" An Overview of All Endpoints")]),e._v(" "),o("p",[e._v("Each node exposes the following endpoints for users to interact with a node, each endpoint is served on a different port. Details on how to configure each endpoint is provided in the endpoint's own section.")]),e._v(" "),o("ul",[o("li",[e._v("the gRPC server (default port: "),o("code",[e._v("9090")]),e._v("),")]),e._v(" "),o("li",[e._v("the REST server (default port: "),o("code",[e._v("1317")]),e._v("),")]),e._v(" "),o("li",[e._v("the Tendermint RPC endpoint (default port: "),o("code",[e._v("26657")]),e._v(").")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",[e._v("The node also exposes some other endpoints, such as the Tendermint P2P endpoint, or the "),o("a",{attrs:{href:"https://docs.tendermint.com/master/nodes/metrics.html#metrics",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus endpoint"),o("OutboundLink")],1),e._v(", which are not directly related to the Cosmos SDK. Please refer to the "),o("a",{attrs:{href:"https://docs.tendermint.com/master/tendermint-core/using-tendermint.html#configuration",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint documentation"),o("OutboundLink")],1),e._v(" for more information about these endpoints.")])]),e._v(" "),o("h2",{attrs:{id:"grpc-server"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#grpc-server"}},[e._v("#")]),e._v(" gRPC Server")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",[e._v("A patch introduced in "),o("code",[e._v("go-grpc v1.34.0")]),e._v(" made gRPC incompatible with the "),o("code",[e._v("gogoproto")]),e._v(" library, making some "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/8426",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC queries"),o("OutboundLink")],1),e._v(" panic. As such, the SDK requires that "),o("code",[e._v("go-grpc <=v1.33.2")]),e._v(" is installed in your "),o("code",[e._v("go.mod")]),e._v(".")]),e._v(" "),o("p",[e._v("To make sure that gRPC is working properly, it is "),o("strong",[e._v("highly recommended")]),e._v(" to add the following line in your application's "),o("code",[e._v("go.mod")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"cmVwbGFjZSBnb29nbGUuZ29sYW5nLm9yZy9ncnBjID0mZ3Q7IGdvb2dsZS5nb2xhbmcub3JnL2dycGMgdjEuMzMuMgo="}}),e._v(" "),o("p",[e._v("Please see "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/8392",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue #8392"),o("OutboundLink")],1),e._v(" for more info.")])],1),e._v(" "),o("p",[e._v("Cosmos SDK v0.40 introduced Protobuf as the main "),o("a",{attrs:{href:"./encoding"}},[e._v("encoding")]),e._v(" library, and this brings a wide range of Protobuf-based tools that can be plugged into the SDK. One such tool is "),o("a",{attrs:{href:"https://grpc.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC"),o("OutboundLink")],1),e._v(", a modern open source high performance RPC framework that has decent client support in several languages.")]),e._v(" "),o("p",[e._v("Each module exposes a "),o("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#queries"}},[e._v("Protobuf "),o("code",[e._v("Query")]),e._v(" service")]),e._v(" that defines state queries. The "),o("code",[e._v("Query")]),e._v(" services and a transaction service used to broadcast transactions are hooked up to the gRPC server via the following function inside the application:")],1),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CQkvLyBSZWdpc3RlckdSUENTZXJ2ZXIgcmVnaXN0ZXJzIGdSUEMgc2VydmljZXMgZGlyZWN0bHkgd2l0aCB0aGUgZ1JQQwoJCS8vIHNlcnZlci4KCQlSZWdpc3RlckdSUENTZXJ2ZXIoY2xpZW50LkNvbnRleHQsIGdycGMuU2VydmVyKQ=="}})],1),e._v(" "),o("p",[e._v("Note: It is not possible to expose any "),o("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[e._v("Protobuf "),o("code",[e._v("Msg")]),e._v(" service")]),e._v(" endpoints via gRPC. Transactions must be generated and signed using the CLI or programatically before they can be broadcasted using gRPC. See "),o("RouterLink",{attrs:{to:"/run-node/txs.html"}},[e._v("Generating, Signing, and Broadcasting Transactions")]),e._v(" for more information.")],1),e._v(" "),o("p",[e._v("The "),o("code",[e._v("grpc.Server")]),e._v(" is a concrete gRPC server, which spawns and serves all gRPC query requests and a broadcast transaction request. This server can be configured inside "),o("code",[e._v("~/.simapp/config/app.toml")]),e._v(":")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("grpc.enable = true|false")]),e._v(" field defines if the gRPC server should be enabled. Defaults to "),o("code",[e._v("true")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("grpc.address = {string}")]),e._v(" field defines the address (really, the port, since the host should be kept at "),o("code",[e._v("0.0.0.0")]),e._v(") the server should bind to. Defaults to "),o("code",[e._v("0.0.0.0:9090")]),e._v(".")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",[o("code",[e._v("~/.simapp")]),e._v(" is the directory where the node's configuration and databases are stored. By default, it's set to "),o("code",[e._v("~/.{app_name}")]),e._v(".")])]),e._v(" "),o("p",[e._v("Once the gRPC server is started, you can send requests to it using a gRPC client. Some examples are given in our "),o("RouterLink",{attrs:{to:"/run-node/interact-node.html#using-grpc"}},[e._v("Interact with the Node")]),e._v(" tutorial.")],1),e._v(" "),o("p",[e._v("An overview of all available gRPC endpoints shipped with the Cosmos SDK is "),o("RouterLink",{attrs:{to:"/core/proto-docs.html"}},[e._v("Protobuf documention")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"rest-server"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rest-server"}},[e._v("#")]),e._v(" REST Server")]),e._v(" "),o("p",[e._v("In Cosmos SDK v0.40, the node continues to serve a REST server. However, the existing routes present in version v0.39 and earlier are now marked as deprecated, and new routes have been added via gRPC-gateway.")]),e._v(" "),o("p",[e._v("All routes are configured under the following fields in "),o("code",[e._v("~/.simapp/config/app.toml")]),e._v(":")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("api.enable = true|false")]),e._v(" field defines if the REST server should be enabled. Defaults to "),o("code",[e._v("false")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("api.address = {string}")]),e._v(" field defines the address (really, the port, since the host should be kept at "),o("code",[e._v("0.0.0.0")]),e._v(") the server should bind to. Defaults to "),o("code",[e._v("tcp://0.0.0.0:1317")]),e._v(".")]),e._v(" "),o("li",[e._v("some additional API configuration options are defined in "),o("code",[e._v("~/.simapp/config/app.toml")]),e._v(", along with comments, please refer to that file directly.")])]),e._v(" "),o("h3",{attrs:{id:"grpc-gateway-rest-routes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#grpc-gateway-rest-routes"}},[e._v("#")]),e._v(" gRPC-gateway REST Routes")]),e._v(" "),o("p",[e._v("If, for various reasons, you cannot use gRPC (for example, you are building a web application, and browsers don't support HTTP2 on which gRPC is built), then the SDK offers REST routes via gRPC-gateway.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://grpc-ecosystem.github.io/grpc-gateway/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC-gateway"),o("OutboundLink")],1),e._v(" is a tool to expose gRPC endpoints as REST endpoints. For each gRPC endpoint defined in a Protobuf "),o("code",[e._v("Query")]),e._v(" service, the SDK offers a REST equivalent. For instance, querying a balance could be done via the "),o("code",[e._v("/cosmos.bank.v1beta1.QueryAllBalances")]),e._v(" gRPC endpoint, or alternatively via the gRPC-gateway "),o("code",[e._v('"/cosmos/bank/v1beta1/balances/{address}"')]),e._v(" REST endpoint: both will return the same result. For each RPC method defined in a Protobuf "),o("code",[e._v("Query")]),e._v(" service, the corresponding REST endpoint is defined as an option:")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"ICAvLyBBbGxCYWxhbmNlcyBxdWVyaWVzIHRoZSBiYWxhbmNlIG9mIGFsbCBjb2lucyBmb3IgYSBzaW5nbGUgYWNjb3VudC4KICBycGMgQWxsQmFsYW5jZXMoUXVlcnlBbGxCYWxhbmNlc1JlcXVlc3QpIHJldHVybnMgKFF1ZXJ5QWxsQmFsYW5jZXNSZXNwb25zZSkgewogICAgb3B0aW9uIChnb29nbGUuYXBpLmh0dHApLmdldCA9ICZxdW90Oy9jb3Ntb3MvYmFuay92MWJldGExL2JhbGFuY2VzL3thZGRyZXNzfSZxdW90OzsKICB9"}})],1),e._v(" "),o("p",[e._v("For application developers, gRPC-gateway REST routes needs to be wired up to the REST server, this is done by calling the "),o("code",[e._v("RegisterGRPCGatewayRoutes")]),e._v(" function on the ModuleManager.")]),e._v(" "),o("h3",{attrs:{id:"legacy-rest-api-routes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#legacy-rest-api-routes"}},[e._v("#")]),e._v(" Legacy REST API Routes")]),e._v(" "),o("p",[e._v("The REST routes present in Cosmos SDK v0.39 and earlier are marked as deprecated via a "),o("a",{attrs:{href:"https://tools.ietf.org/id/draft-dalal-deprecation-header-01.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP deprecation header"),o("OutboundLink")],1),e._v(". They are still maintained to keep backwards compatibility, but will be removed in v0.44. For updating from Legacy REST routes to new gRPC-gateway REST routes, please refer to our "),o("RouterLink",{attrs:{to:"/migrations/rest.html"}},[e._v("migration guide")]),e._v(".")],1),e._v(" "),o("p",[e._v("For application developers, Legacy REST API routes needs to be wired up to the REST server, this is done by calling the "),o("code",[e._v("RegisterRESTRoutes")]),e._v(" function on the ModuleManager.")]),e._v(" "),o("h3",{attrs:{id:"swagger"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#swagger"}},[e._v("#")]),e._v(" Swagger")]),e._v(" "),o("p",[e._v("A "),o("a",{attrs:{href:"https://swagger.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Swagger"),o("OutboundLink")],1),e._v(" (or OpenAPIv2) specification file is exposed under the "),o("code",[e._v("/swagger")]),e._v(" route on the API server. Swagger is an open specification describing the API endpoints a server serves, including description, input arguments, return types and much more about each endpoint.")]),e._v(" "),o("p",[e._v("Enabling the "),o("code",[e._v("/swagger")]),e._v(" endpoint is configurable inside "),o("code",[e._v("~/.simapp/config/app.toml")]),e._v(" via the "),o("code",[e._v("api.swagger")]),e._v(" field, which is set to true by default.")]),e._v(" "),o("p",[e._v("For application developers, you may want to generate your own Swagger definitions based on your custom modules. The SDK's "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.40.0-rc4/scripts/protoc-swagger-gen.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Swagger generation script"),o("OutboundLink")],1),e._v(" is a good place to start.")]),e._v(" "),o("h2",{attrs:{id:"tendermint-rpc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-rpc"}},[e._v("#")]),e._v(" Tendermint RPC")]),e._v(" "),o("p",[e._v("Independently from the Cosmos SDK, Tendermint also exposes a RPC server. This RPC server can be configured by tuning parameters under the "),o("code",[e._v("rpc")]),e._v(" table in the "),o("code",[e._v("~/.simapp/config/config.toml")]),e._v(", the default listening address is "),o("code",[e._v("tcp://0.0.0.0:26657")]),e._v(". An OpenAPI specification of all Tendermint RPC endpoints is available "),o("a",{attrs:{href:"https://docs.tendermint.com/master/rpc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Some Tendermint RPC endpoints are directly related to the Cosmos SDK:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("/abci_query")]),e._v(": this endpoint will query the application for state. As the "),o("code",[e._v("path")]),e._v(" parameter, you can send the following strings:\n"),o("ul",[o("li",[e._v("any Protobuf fully-qualified service method, such as "),o("code",[e._v("/cosmos.bank.v1beta1.QueryAllBalances")]),e._v(". The "),o("code",[e._v("data")]),e._v(" field should then include the method's request parameter(s) encoded as bytes using Protobuf.")]),e._v(" "),o("li",[o("code",[e._v("/app/simulate")]),e._v(": this will simulate a transaction, and return some information such as gas used.")]),e._v(" "),o("li",[o("code",[e._v("/app/version")]),e._v(": this will return the application's version.")]),e._v(" "),o("li",[o("code",[e._v("/store/{path}")]),e._v(": this will query the store directly.")]),e._v(" "),o("li",[o("code",[e._v("/p2p/filter/addr/{port}")]),e._v(": this will return a filtered list of the node's P2P peers by address port.")]),e._v(" "),o("li",[o("code",[e._v("/p2p/filter/id/{id}")]),e._v(": this will return a filtered list of the node's P2P peers by ID.")])])]),e._v(" "),o("li",[o("code",[e._v("/broadcast_tx_{aync,async,commit}")]),e._v(": these 3 endpoint will broadcast a transaction to other peers. CLI, gRPC and REST expose "),o("RouterLink",{attrs:{to:"/core/transactions.html#broadcasting-the-transaction"}},[e._v("a way to broadcast transations")]),e._v(", but they all use these 3 Tendermint RPCs under the hood.")],1)]),e._v(" "),o("h2",{attrs:{id:"comparison-table"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#comparison-table"}},[e._v("#")]),e._v(" Comparison Table")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Name")]),e._v(" "),o("th",[e._v("Advantages")]),e._v(" "),o("th",[e._v("Disadvantages")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("gRPC")]),e._v(" "),o("td",[e._v("- can use code-generated stubs in various languages"),o("br"),e._v("- supports streaming and bidirectional communication (HTTP2)"),o("br"),e._v("- small wire binary sizes, faster transmission")]),e._v(" "),o("td",[e._v("- based on HTTP2, not available in browsers"),o("br"),e._v("- learning curve (mostly due to Protobuf)")])]),e._v(" "),o("tr",[o("td",[e._v("REST")]),e._v(" "),o("td",[e._v("- ubiquitous"),o("br"),e._v("- client libraries in all languages, faster implementation"),o("br")]),e._v(" "),o("td",[e._v("- only supports unary request-response communication (HTTP1.1)"),o("br"),e._v("- bigger over-the-wire message sizes (JSON)")])]),e._v(" "),o("tr",[o("td",[e._v("Tendermint RPC")]),e._v(" "),o("td",[e._v("- easy to use")]),e._v(" "),o("td",[e._v("- bigger over-the-wire message sizes (JSON)")])])])]),e._v(" "),o("h2",{attrs:{hide:"",id:"next"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),o("p",{attrs:{hide:""}},[e._v("Learn about "),o("RouterLink",{attrs:{to:"/core/cli.html"}},[e._v("the CLI")])],1)])}),[],!1,null,null,null);t.default=s.exports}}]);