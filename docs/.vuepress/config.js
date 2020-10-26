module.exports = {
  title: "FE-Interview",
  description: "从现在开始，和👴一起学",
  base: "/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: `/hello.jpg`,
      },
    ],
  ],
  dest: "./docs/.vuepress/dist",
  ga: "",
  evergreen: true,
  activeHeaderLinks: true,
  themeConfig: {
    logo: `/logo.png`, // 导航栏 Logo
    search: false, // 搜索
    lastUpdated: "最后更新于", // 最后更新
    nextLinks: false, // 下一篇
    prevLinks: false, // 上一篇
    smoothScroll: true, // 滚动
    sidebarDepth: 2,
    sidebar: {
      "/FE-Interview/base/HTML/": ["HTML5"],
      "/FE-Interview/base/CSS/": ["基操", "BFC"],
      "/FE-Interview/base/JavaScript/": [
        "数据类型",
        "this",
        "对象",
        "原型与继承",
        "作用域与闭包",
        "异步",
        "垃圾回收",
        "事件循环",
        "客户端存储",
        "模块化",
        "常见Api的原理与实现",
        "工具函数",
      ],
      "/FE-Interview/browser/": [
        "浏览器的工作原理",
        "渲染优化",
        "缓存",
        "跨域",
      ],
      "/FE-Interview/security/": ["常见的安全问题"],
      "/FE-Interview/network/传输层/": ["TCP"],
      "/FE-Interview/network/应用层/": ["HTTP"],
      "/FE-Interview/dataStruct/": ["链表"],
      "/FE-Interview/engineering/": ["webpack"],
      "/FE-Interview/designPatterns/": [
        "SOLID设计原则",
        "简单工厂模式",
        "抽象工厂模式",
        "原型模式",
        "单例模式",
        "适配器模式",
        "代理模式",
        "装饰器模式",
        "策略模式",
        "状态模式",
        "观察者模式",
        // "职责链模式",
        // "构造器模式",
        // "外观模式",
      ],
    },
    // 导航栏
    nav: [
      { text: "Home", link: "/" },
      { text: "关于", link: "/About/" },
      {
        text: "基础",
        items: [
          {
            text: "HTML",
            link: "/FE-Interview/base/HTML/HTML5/",
          },
          {
            text: "CSS",
            link: "/FE-Interview/base/CSS/基操/",
          },
          {
            text: "JavaScript",
            link: "/FE-Interview/base/JavaScript/数据类型/",
          },
        ],
      },
      {
        text: "浏览器",
        items: [
          {
            text: "浏览器的工作原理",
            link: "/FE-Interview/browser/浏览器的工作原理",
          },
          {
            text: "渲染优化",
            link: "/FE-Interview/browser/渲染优化",
          },
          {
            text: "缓存",
            link: "/FE-Interview/browser/缓存",
          },
          {
            text: "跨域",
            link: "/FE-Interview/browser/跨域",
          },
        ],
      },
      {
        text: "计算机网络",
        items: [
          {
            text: "HTTP",
            link: "/FE-Interview/network/应用层/HTTP",
          },
          {
            text: "TCP",
            link: "/FE-Interview/network/传输层/TCP",
          },
        ],
      },
      {
        text: "数据结构",
        items: [
          {
            text: "链表",
            link: "/FE-Interview/dataStruct/链表",
          },
        ],
      },
      {
        text: "工程化",
        items: [
          {
            text: "webpack",
            link: "/FE-Interview/engineering/webpack",
          },
        ],
      },
      {
        text: "设计模式",
        link: "/FE-Interview/designPatterns/SOLID设计原则",
      },
      {
        text: "安全",
        link: "/FE-Interview/security/常见的安全问题",
      },
      { text: "Github", link: "https://github.com/ZzZzzzxc" },
      { text: "Blog", link: "https://blog.zhangxc.cn/home" },
    ],
  },
  plugins: ["@vuepress/nprogress", "@vuepress/back-to-top"],
};
