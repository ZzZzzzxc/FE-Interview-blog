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
    // 导航栏 Logo
    logo: `/logo.png`,
    // 搜索
    search: false,
    // 最后更新
    lastUpdated: "最后更新于",
    // 下一篇
    nextLinks: false,
    // 上一篇
    prevLinks: false,
    // 滚动
    smoothScroll: true,
    sidebarDepth: 2,
    sidebar: {
      "/FE-Interview/base/HTML/": ["HTML5"],
      "/FE-Interview/base/CSS/": ["基操", "BFC"],
      "/FE-Interview/base/JavaScript/": [
        "数据类型",
        "this",
        "对象的属性与值",
        "原型与继承",
        "作用域与闭包",
        "异步",
        "常见Api的原理与实现",
        "工具函数",
      ],
      "/FE-Interview/frame/React/": [],
      "/FE-Interview/frame/Vue/": ["设计理念", "响应式原理"],
      "/FE-Interview/browser/": [
        "浏览器的工作原理",
        "缓存",
        "本地存储",
        "跨域",
        "事件循环",
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
        text: "框架",
        items: [
          {
            text: "React",
            link: "/FE-Interview/frame/React/",
          },
          {
            text: "Vue",
            link: "/FE-Interview/frame/Vue/响应式原理/",
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
            text: "缓存",
            link: "/FE-Interview/browser/缓存",
          },
          {
            text: "存储",
            link: "/FE-Interview/browser/本地存储",
          },
          {
            text: "跨域",
            link: "/FE-Interview/browser/跨域",
          },
          {
            text: "事件循环",
            link: "/FE-Interview/browser/事件循环",
          },
        ],
      },
      { text: "Github", link: "https://github.com/ZzZzzzxc" },
      { text: "Blog", link: "https://blog.zhangxc.cn/home" },
    ],
  },
  plugins: ["@vuepress/nprogress", "@vuepress/back-to-top"],
};
