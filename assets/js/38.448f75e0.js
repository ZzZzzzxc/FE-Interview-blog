(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{262:function(t,a,s){"use strict";s.r(a);var n=s(3),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"模块化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块化"}},[t._v("#")]),t._v(" 模块化")]),t._v(" "),s("h2",{attrs:{id:"主要概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主要概念"}},[t._v("#")]),t._v(" 主要概念")]),t._v(" "),s("ul",[s("li",[t._v("模块标识符：模块系统本质上是一个键/值实体，每个模块都存在一个标识符用于模块的检索，在原生系统下，标识符可能是文件的实际路径，而在模拟的模块系统下，标识符是一个命名空间路径的字符串。")]),t._v(" "),s("li",[t._v("模块依赖：模块系统的核心是管理依赖，依赖指的是本地模块向模块系统声明的一组外部模块，依赖本质上也是模块，本地模块的正常运行需要这些外部依赖的正确加载。")]),t._v(" "),s("li",[t._v("模块加载：指依赖模块的初始化工作。")]),t._v(" "),s("li",[t._v("入口：模块的入口，代码执行的起点。")]),t._v(" "),s("li",[t._v("异步依赖：模块在需要的时候进行加载，加载完成后提供一组回调，即按需加载。")]),t._v(" "),s("li",[t._v("动态依赖：在程序执行过程由开发者中动态地添加依赖。")]),t._v(" "),s("li",[t._v("静态分析：在不执行代码的情况下推断其行为。")]),t._v(" "),s("li",[t._v("循环依赖：加载已经加载过的模块。")])]),t._v(" "),s("h2",{attrs:{id:"思想"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思想"}},[t._v("#")]),t._v(" 思想")]),t._v(" "),s("p",[t._v("模块化的思想在于把逻辑分块，各自封装，相互独立，每个块自行决定对外暴露什么，同时自行决定引入执行哪些外部代码。")]),t._v(" "),s("h2",{attrs:{id:"优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[t._v("#")]),t._v(" 优势")]),t._v(" "),s("ul",[s("li",[t._v("提供命名空间，避免变量污染。")]),t._v(" "),s("li",[t._v("高复用性")]),t._v(" "),s("li",[t._v("高可维护性")])]),t._v(" "),s("h2",{attrs:{id:"发展历史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发展历史"}},[t._v("#")]),t._v(" 发展历史")]),t._v(" "),s("p",[t._v("长期以来，JavaScript 都没有独立的模块体系，针对这个问题，社区提供了一些解决方案，主要有 CommonJS 和 AMD 两种，CommonJS 用于服务端，AMD 用于浏览器。")]),t._v(" "),s("p",[t._v("CommonJS 采用同步的方式加载模块，因为在服务端中，文件都存储在本地磁盘上，文件读取的速度非常快，不容易造成阻塞，而在浏览器端，模块的加载速度受限于网络，因此，AMD 采用了异步的加载方式，模块的加载不会阻塞代码的执行，所有依赖于外部模块的代码都会通过模块加载完成的回调函数进行执行。")]),t._v(" "),s("p",[t._v("直至 ES6 的出现，ES6 在语言标准层面实现了模块功能，其模块功能完全可以替代 CommonJS 和 AMD 两种方案成为通用的解决方案。")]),t._v(" "),s("h2",{attrs:{id:"commonjs-和-es6-模块之间的差异"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-和-es6-模块之间的差异"}},[t._v("#")]),t._v(" CommonJS 和 ES6 模块之间的差异")]),t._v(" "),s("p",[t._v("此处主要参考"),s("a",{attrs:{href:"https://es6.ruanyifeng.com/#docs/module-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰老师的 ECMAScript 6 入门"),s("OutboundLink")],1),t._v("，再加上一些个人理解。")]),t._v(" "),s("p",[t._v("两者之间的差异主要有三点：")]),t._v(" "),s("ul",[s("li",[t._v("模块的输出不同")]),t._v(" "),s("li",[t._v("加载时机不同")]),t._v(" "),s("li",[t._v("加载方式不同")])]),t._v(" "),s("h3",{attrs:{id:"模块的输出不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块的输出不同"}},[t._v("#")]),t._v(" 模块的输出不同")]),t._v(" "),s("ul",[s("li",[t._v("CommonJS 模块输出的是一个值的拷贝。")]),t._v(" "),s("li",[t._v("ES6 模块输出的是值的引用。")])]),t._v(" "),s("p",[t._v("CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// lib.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" counter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("incCounter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  counter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  counter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" counter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  incCounter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" incCounter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mod "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./lib"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("counter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\nmod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("incCounter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("counter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n")])])]),s("p",[t._v("在 "),s("code",[t._v("main.js")]),t._v(" 文件中引入 "),s("code",[t._v("lib.js")]),t._v("，执行 "),s("code",[t._v("mod.incCounter()")]),t._v(" 方法之后，"),s("code",[t._v("lib.js")]),t._v(" 中 "),s("code",[t._v("counter")]),t._v(" 的值实际上是已经改变了的，但是第二次打印输出的只是最开始引入模块时拷贝的值，而不是模块最新的状态。")]),t._v(" "),s("p",[t._v("而在 ES6 模块机制中，JavaScript 引擎对脚本静态分析的时候，遇到模块加载命令 import 时会生成一个只读引用，等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。换句话说，ES6 模块的 import 有点像 Unix 系统的“符号连接”，原始值变了，import 加载的值也会跟着变。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。")]),t._v(" "),s("h3",{attrs:{id:"加载时机不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载时机不同"}},[t._v("#")]),t._v(" 加载时机不同")]),t._v(" "),s("p",[t._v("CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。")]),t._v(" "),s("p",[t._v("原因在于：")]),t._v(" "),s("ul",[s("li",[t._v("CommonJS 加载的是一个对象（即 "),s("code",[t._v("module.exports")]),t._v(" 属性），该对象在脚本运行完后才会生成，后续再从这个对象直接读取属性。")]),t._v(" "),s("li",[t._v("ES6 模块加载的不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。")])]),t._v(" "),s("h3",{attrs:{id:"加载方式不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载方式不同"}},[t._v("#")]),t._v(" 加载方式不同")]),t._v(" "),s("p",[t._v("CommonJS 模块的 require() 是同步加载模块，ES6 模块的 import 命令是异步加载，有一个独立的模块依赖的解析阶段。")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://es6.ruanyifeng.com/#docs/module-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECMAScript 6 入门"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.ituring.com.cn/book/2472",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 高级程序设计（第 4 版）"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);