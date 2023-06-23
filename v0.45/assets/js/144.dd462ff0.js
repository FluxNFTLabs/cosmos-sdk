(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{673:function(g,C,t){"use strict";t.r(C);var I=t(1),A=Object(I.a)({},(function(){var g=this,C=g.$createElement,t=g._self._c||C;return t("ContentSlotsDistributor",{attrs:{"slot-key":g.$parent.slotKey}},[t("h1",{attrs:{id:"特定应用区块链"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特定应用区块链"}},[g._v("#")]),g._v(" 特定应用区块链")]),g._v(" "),t("h2",{attrs:{id:"概要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[g._v("#")]),g._v(" 概要")]),g._v(" "),t("p",[g._v("本文档解释了什么是特定应用区块链，以及为什么开发者更希望构建特定应用区块链，而不是开发智能合约。")]),g._v(" "),t("h2",{attrs:{id:"什么是特定应用区块链"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是特定应用区块链"}},[g._v("#")]),g._v(" 什么是特定应用区块链？")]),g._v(" "),t("p",[g._v("特定应用区块链是面向单个具体应用程序的高度定制化区块链。与基于像以太坊这样的底层区块链搭建去中心化应用不同，开发者需要从头构建他们自己的区块链。这意味着构建全节点客户端、轻节点客户端和所有必要的接口（CLI, REST, 等等）来和节点交互。")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ICAgICAgICAgICAgICAgIF4gICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyAgXgogICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB8ICAgQnVpbHQgd2l0aCBDb3Ntb3MgU0RLCiAgICAgICAgICAgICAgICB8ICB8ICBTdGF0ZS1tYWNoaW5lID0gQXBwbGljYXRpb24gIHwgIHwKICAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdgogICAgICAgICAgICAgICAgfCAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rCiAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIF4KQmxvY2tjaGFpbiBub2RlIHwgIHwgICAgICAgICAgIENvbnNlbnN1cyAgICAgICAgICAgfCAgfAogICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB8CiAgICAgICAgICAgICAgICB8ICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsgIHwgICBUZW5kZXJtaW50IENvcmUKICAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgfAogICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgTmV0d29ya2luZyAgICAgICAgICB8ICB8CiAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHwKICAgICAgICAgICAgICAgIHYgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyAgdgo="}}),g._v(" "),t("h2",{attrs:{id:"智能合约的局限是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#智能合约的局限是什么"}},[g._v("#")]),g._v(" 智能合约的局限是什么？")]),g._v(" "),t("p",[g._v("早在 2014 年，像 Ethereum 这样的虚拟机区块链就满足了可编程性的需求。当时，开发去中心化应用的选项非常有限。许多开发者只能在复杂且有限制的比特币脚本语言上开发，或者 fork 难以运行和定制化的比特币代码。")]),g._v(" "),t("p",[g._v("虚拟机区块链在当时提出了新的价值主张。他们的状态机集成了虚拟机，从而能够执行被称为智能合约的图灵完备程序。虽然智能合约在一次性事件（如 ICO）的应用场景下非常有用，但在构建复杂的去中心化平台时无法达到要求。以下是原因：")]),g._v(" "),t("ul",[t("li",[t("p",[g._v("智能合约通常由可以被底层虚拟机解释的特定编程语言开发。这些编程语言常常并不成熟，并受限于虚拟机本身。例如，以太坊虚拟机并不允许开发者实现代码的自动执行。开发或者也被限制于 EVM 的账户体系，他们只能从一组有限的功能中进行加密操作。虽然这些只是示例，但它们展现了智能合约环境通常缺少"),t("strong",[g._v("灵活性")]),g._v("。")])]),g._v(" "),t("li",[t("p",[g._v("智能合约都运行在同一台虚拟机上，这意味着它们会相互争夺资源，并严重影响执行效果。即使状态机切分成多个子集（例如通过分片技术），智能合约依然需要由虚拟机解释，比起在状态机上实现的本地应用程序，这依然限制了合约应用的"),t("strong",[g._v("性能")]),g._v("。（我们的基准测试表明，在删除虚拟机后，应用程序的性能提高了 10 倍。）")])]),g._v(" "),t("li",[t("p",[g._v("智能合约共享底层环境带来的另一个问题是"),t("strong",[g._v("主导权")]),g._v("的最终限制。去中心化应用是一个涉及众多参与者的生态系统，如果去中心化应用建立在通用的虚拟机区块链上，利益相关者（stakeholders）对他们的应用程序就只有非常有限的主导权，并最终会被底层区块链的治理所取代。如果该应用程序还存在着漏洞，那任何人都无能为力。")])])]),g._v(" "),t("p",[g._v("特定应用区块链的出现，就是要解决上述问题。")]),g._v(" "),t("h2",{attrs:{id:"特定应用区块链的优势"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特定应用区块链的优势"}},[g._v("#")]),g._v(" 特定应用区块链的优势")]),g._v(" "),t("h3",{attrs:{id:"灵活性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#灵活性"}},[g._v("#")]),g._v(" 灵活性")]),g._v(" "),t("p",[g._v("特定应用区块链赋予了开发者最大的灵活性：")]),g._v(" "),t("ul",[t("li",[t("p",[g._v("在 Cosmos 区块链中，状态机通常通过被称为 "),t("a",{attrs:{href:"https://tendermint.com/docs/spec/abci/",target:"_blank",rel:"noopener noreferrer"}},[g._v("ABCI"),t("OutboundLink")],1),g._v(" 的接口和底层共识引擎连接。该接口可以被包装为任何编程语言，开发者可以自己决定用哪种编程语言来构建状态机。")])]),g._v(" "),t("li",[t("p",[g._v("开发者在构建状态机时有多种选择，目前最常用的是 Cosmos SDK，但也有其他的框架，如 "),t("a",{attrs:{href:"https://github.com/nomic-io/lotion",target:"_blank",rel:"noopener noreferrer"}},[g._v("Lotion"),t("OutboundLink")],1),g._v(" 和 "),t("a",{attrs:{href:"https://github.com/iov-one/weave",target:"_blank",rel:"noopener noreferrer"}},[g._v("Weave"),t("OutboundLink")],1),g._v(" 等。开发者通常都是基于他们使用的编程语言来选择使用哪一种框架（Cosmos SDK 和 Weave 基于 Golang，Lotion 则基于 JavaScript）。")])]),g._v(" "),t("li",[t("p",[g._v("ABCI 允许开发者更换特定应用链的共识引擎。目前只有 Tendermint 共识可以投入使用，但在未来还会有更多共识引擎可被使用。")])]),g._v(" "),t("li",[t("p",[g._v("即使已经选好了开发框架和共识引擎，但如果他们不能完全符合原始格式的要求，开发者依然可以对其进行调整。")])]),g._v(" "),t("li",[t("p",[g._v("开发者可以自由探索出最能满足实际需求的方案（如验证人数量 vs Transaction 吞吐量；安全性 vs 异步可用性等）和链的设计选项（如 DB 存储或 IAVL 树；UTXO 或账户模型，等）。")])]),g._v(" "),t("li",[t("p",[g._v("开发者可以实现代码的自动执行。在 Cosmos SDK 中，每个块的开头和结尾都可以自动触发逻辑。与虚拟机区块链环境下的合约开发者不同，特定应用区块链的开发者可以自由地选择应用程序所需要的加密库，而不会受到底层环境的功能限制。")])])]),g._v(" "),t("p",[g._v("上述的列表展示了特定应用区块链给予开发者的充分灵活性。Cosmos 和 Cosmos SDK 的目标是让开发者工具尽可能的通用化、模块化，从而在保持兼容的情况下对堆栈的每个部分进行分叉、调整和优化。随着社区的不断发展，每个核心构建模块都将有更多可替代方案，为开发者提供更多选项。")]),g._v(" "),t("h3",{attrs:{id:"性能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#性能"}},[g._v("#")]),g._v(" 性能")]),g._v(" "),t("p",[g._v("基于智能合约的去中心化应用在性能方面会天然地受到底层环境的限制。如果一个去中心化应用要进行性能优化，就需要将其构建为特定应用区块链。以下是特定应用区块链在性能方面的优势：")]),g._v(" "),t("ul",[t("li",[t("p",[g._v("特定应用区块链开发者可以选择像 Tendermint BFT 这样的新型共识引擎。与目前被大多数虚拟机区块链使用的 POW 共识相比，Tendermint BFT 在吞吐量方面有显著提高。")])]),g._v(" "),t("li",[t("p",[g._v("一个特定应用区块链只运行单个应用程序，所以该应用程序不需要和其他程序去竞争计算资源和存储资源。这与目前所有非分片虚拟机区块链正好相反，在这些区块链中的智能合约都会争夺计算和存储资源。")])]),g._v(" "),t("li",[t("p",[g._v("即使某种虚拟机区块链能够提供基于应用程序的分片和高效的共识算法，其性能也依然会被虚拟机本身所限制。真正的吞吐量瓶颈在于状态机，要求 Transaction 由虚拟机解释会大大增加处理它们的计算复杂度。")])])]),g._v(" "),t("h3",{attrs:{id:"安全性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安全性"}},[g._v("#")]),g._v(" 安全性")]),g._v(" "),t("p",[g._v("安全性很难进行量化，而且不同区块链平台之间存在很大差异。以下是特定应用区块链所能带来的重要优势：")]),g._v(" "),t("ul",[t("li",[t("p",[g._v("与不成熟的智能合约编程语言相反，开发者可以在构建特定应用区块链时选择像 Golang 这种可靠性已被验证的编程语言。")])]),g._v(" "),t("li",[t("p",[g._v("开发者不会局限于底层虚拟机所提供的加密功能，他们可以使用自定义的加密技术，也可以依赖经过可靠审核的加密库。")])]),g._v(" "),t("li",[t("p",[g._v("开发者无需担心底层虚拟机中潜在的漏洞或可被利用的机制，从而可以更容易地确保应用程序的安全性。")])])]),g._v(" "),t("h3",{attrs:{id:"主导权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主导权"}},[g._v("#")]),g._v(" 主导权")]),g._v(" "),t("p",[g._v("特定应用区块链的一大好处是主导权。去中心化应用是一个涉及众多参与者的生态系统，如用户、开发者、第三方服务，等等。当开发者在多个去中心化应用共存的虚拟机区块链上开发应用程序时，出现的一个问题是围绕应用程序所组成的社区人群和底层链的社区人群并不是一样的，但后者却会在治理的过程中取代前者。如果应用程序中存在一个漏洞，或者需要上线新的功能，应用的 stakeholders 几乎没有任何办法升级代码。如果底层区块链社区拒绝执行，那应用程序就无法升级。")]),g._v(" "),t("p",[g._v("根本问题是应用程序的治理和网络治理并不是统一的，而这个问题可以通过特定应用区块链解决。因为特定应用区块链只专门运行单个应用程序，所以应用的 stakeholders 对整条链有完全的主导权。这能确保社区在漏洞被发现时不会卡住，而且有充分的自由去选择链和应用程序的演化方向。")])],1)}),[],!1,null,null,null);C.default=A.exports}}]);