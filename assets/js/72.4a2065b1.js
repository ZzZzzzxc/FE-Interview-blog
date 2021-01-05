(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{213:function(t,s,a){"use strict";a.r(s);var r=a(3),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"常见的安全问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的安全问题"}},[t._v("#")]),t._v(" 常见的安全问题")]),t._v(" "),a("h2",{attrs:{id:"xss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[t._v("#")]),t._v(" XSS")]),t._v(" "),a("p",[t._v("跨站脚本（Cross Site Scripting），简称 XSS 攻击，是指在浏览器中执行了一段恶意脚本，使用户信息被泄露，从而导致后续的恶意操作。")]),t._v(" "),a("p",[t._v("XSS 攻击通常有三种方式，存储型、反射型和文档型。")]),t._v(" "),a("h3",{attrs:{id:"存储型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储型"}},[t._v("#")]),t._v(" 存储型")]),t._v(" "),a("p",[t._v("存储型指恶意脚本被存储到了数据库中，然后在每个用户访问特定页面的时候执行这些脚本完成攻击。")]),t._v(" "),a("p",[t._v("比如：在评论区提交一段恶意脚本，如果前后端没有做好转译的工作，就会造成脚本被存储到服务器中，然后每次该页面渲染的时候都会执行该脚本。")]),t._v(" "),a("h3",{attrs:{id:"反射型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反射型"}},[t._v("#")]),t._v(" 反射型")]),t._v(" "),a("p",[t._v("反射型指在网络请求中拼接一段恶意脚本，如果拼接的脚本内容被前端作为 HTML 直接解析到页面中，就会造成恶意脚本的执行。")]),t._v(" "),a("p",[t._v("比如：在一个搜索框中，搜索"),a("code",[t._v('<script>alert("XSS")<\/script>')]),t._v("，这样就会发送 "),a("code",[t._v('https://interview.zhangxc.cn?q=<script>alert("XSS")<\/script>')]),t._v(" 请求给后端，前端最后可能会在页面中提示 "),a("code",[t._v('<script>alert("XSS")<\/script>')]),t._v(" 的搜索结果不存在，这样就无意中执行了一段恶意脚本，\n恶意脚本就完成了从前端到后端，最后再反射到 HTML 文档中的工作。")]),t._v(" "),a("h3",{attrs:{id:"文档型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档型"}},[t._v("#")]),t._v(" 文档型")]),t._v(" "),a("p",[t._v("文档型的 XSS 攻击并不会经过服务端，而是作为中间人的角色，在数据传输过程劫持到网络数据包，然后修改里面的 HTML 文档。")]),t._v(" "),a("h3",{attrs:{id:"xss-的防范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss-的防范"}},[t._v("#")]),t._v(" XSS 的防范")]),t._v(" "),a("ul",[a("li",[t._v("输入的转译和过滤：永远不要相信用户的输入。")]),t._v(" "),a("li",[t._v("内容安全策略（CSP）：通过 "),a("code",[t._v("Content-Security-Policy")]),t._v(" 响应头和 "),a("code",[t._v("<meta>")]),t._v(" 标签配置该策略，指定浏览器应该加载哪些资源。")]),t._v(" "),a("li",[t._v("HttpOnly：对 cookie 设置 "),a("code",[t._v("HttpOnly")]),t._v(" 属性，避免 JavaScript 脚本直接去读取 cookie，从而避免一些场景下的攻击。")])]),t._v(" "),a("h2",{attrs:{id:"csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[t._v("#")]),t._v(" CSRF")]),t._v(" "),a("p",[t._v("跨站请求伪造（Cross-site request forgery），简称 CSRF，指的是攻击者诱导用户点击某些恶意链接，然后利用用户当前的账户登录状态发起跨站请求。")]),t._v(" "),a("h3",{attrs:{id:"自动发送请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动发送请求"}},[t._v("#")]),t._v(" 自动发送请求")]),t._v(" "),a("p",[t._v("用户访问的站点中存在恶意脚本，比如页面中存在这种 "),a("code",[t._v('<img src="https://xxx.com/info?user=hhh&count=100"></img>')]),t._v(" 节点，进入页面后客户端会自动携带 "),a("code",[t._v("xxx.com")]),t._v(" 的 cookie 去进行请求，导致一些意外操作的发送。")]),t._v(" "),a("h3",{attrs:{id:"诱导发送请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#诱导发送请求"}},[t._v("#")]),t._v(" 诱导发送请求")]),t._v(" "),a("p",[t._v("在页面中留下恶意的超链接诱导用户进行点击，从而发生上述的情况。")]),t._v(" "),a("h3",{attrs:{id:"csrf-的防范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf-的防范"}},[t._v("#")]),t._v(" CSRF 的防范")]),t._v(" "),a("ul",[a("li",[t._v("SameSite：在 cookie 中设置 "),a("code",[t._v("SameSite")]),t._v(" 属性，对跨站携带 cookie 的行为做出限制。")]),t._v(" "),a("li",[t._v("CSRF Token：服务端生成一个 Token 存储在 HTML 文档中，然后在请求的时候要求用户携带一个由服务端生成的 Token，服务端在收到 Token 之后进行解密验证 Token 的正确性。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);