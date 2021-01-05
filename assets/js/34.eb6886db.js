(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{275:function(t,v,_){"use strict";_.r(v);var e=_(3),o=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"客户端存储"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#客户端存储"}},[t._v("#")]),t._v(" 客户端存储")]),t._v(" "),_("h2",{attrs:{id:"local-storage、session-storage-和-cookie"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#local-storage、session-storage-和-cookie"}},[t._v("#")]),t._v(" Local Storage、Session Storage 和 Cookie")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("分类")]),t._v(" "),_("th",[t._v("生命周期")]),t._v(" "),_("th",[t._v("存储量")]),t._v(" "),_("th",[t._v("位置")]),t._v(" "),_("th",[t._v("设置方式")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("cookie")]),t._v(" "),_("td",[t._v("默认保存在内存中，随浏览器关闭失效（如果设置过期时间，在到过期时间后失效）")]),t._v(" "),_("td",[t._v("4 KB")]),t._v(" "),_("td",[t._v("键值对方式存储在客户端（对应同一域名），请求的时候自动携带")]),t._v(" "),_("td",[t._v("服务端响应时携带 "),_("code",[t._v("Set-Cookie")]),t._v(" 请求头，浏览器接收到之后就会在 cookie 中存储")])]),t._v(" "),_("tr",[_("td",[t._v("localStorage")]),t._v(" "),_("td",[t._v("永久有效")]),t._v(" "),_("td",[t._v("5MB（各个浏览器存在差异）")]),t._v(" "),_("td",[t._v("键值对方式存储在客户端（对应一个域，受同源策略限制）")]),t._v(" "),_("td",[t._v("WEB API")])]),t._v(" "),_("tr",[_("td",[t._v("sessionStorage")]),t._v(" "),_("td",[t._v("当前会话有效，关闭浏览器或网页后失效")]),t._v(" "),_("td",[t._v("5MB（各个浏览器存在差异）")]),t._v(" "),_("td",[t._v("键值对方式存储在客户端（对应一个会话，同样受到跨域限制）")]),t._v(" "),_("td",[t._v("WEB API")])])])]),t._v(" "),_("h2",{attrs:{id:"cookie"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" cookie")]),t._v(" "),_("p",[t._v("cookie 是为了解决 HTTP 协议无状态特点导致的问题出现的，通过在发起请求的时候携带以标识请求者的身份，因为存储内容的不同，cookie 存储对于安全性有更高的需求。")]),t._v(" "),_("p",[t._v("cookie 存在的安全问题")]),t._v(" "),_("ul",[_("li",[t._v("HTTP 明文传输导致被劫持。")]),t._v(" "),_("li",[t._v("可以被 JavaScript 脚本读取，容易造成 XSS 攻击。")]),t._v(" "),_("li",[t._v("可以被跨域传输，导致 cookie 泄露，造成 CSRF 攻击。")])]),t._v(" "),_("p",[t._v("对应的解决方案")]),t._v(" "),_("ul",[_("li",[t._v("为 cookie 设置 "),_("code",[t._v("secure")]),t._v("，只能使用 HTTPS 传输。")]),t._v(" "),_("li",[t._v("为 cookie 设置 "),_("code",[t._v("http-only")]),t._v("，禁止 JavaScript 脚本读取 cookie。")]),t._v(" "),_("li",[t._v("为 cookie 设置 "),_("code",[t._v("same-site")]),t._v("，禁止跨域传输 cookie，减少 CSRF 攻击。")])]),t._v(" "),_("h2",{attrs:{id:"indexeddb"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#indexeddb"}},[t._v("#")]),t._v(" IndexedDB")]),t._v(" "),_("h2",{attrs:{id:"web-sql"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#web-sql"}},[t._v("#")]),t._v(" Web SQL")])])}),[],!1,null,null,null);v.default=o.exports}}]);