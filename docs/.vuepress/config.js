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
      "/FE-Interview/base/HTML/": ["语义化"],
      "/FE-Interview/base/CSS/": ["常见布局", "BFC"],
      "/FE-Interview/base/JavaScript/": [
        "数据类型",
        "this",
        "闭包",
        "原型",
        "继承",
        "EventLoop",
        "生成器与迭代器",
        "异步",
        "节流和防抖",
        "常见Api的原理与实现",
        "深浅拷贝",
        "工具函数",
      ],
      "/FE-Interview/frame/React/": [],
      "/FE-Interview/frame/Vue/": ["设计理念", "响应式原理"],
    },
    // 导航栏
    nav: [
      { text: "Home", link: "/" },
      {
        text: "基础",
        items: [
          {
            text: "HTML",
            link: "/FE-Interview/base/HTML/语义化/",
          },
          {
            text: "CSS",
            link: "/FE-Interview/base/CSS/常见布局/",
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
      { text: "Github", link: "https://github.com/ZzZzzzxc" },
      { text: "Blog", link: "https://blog.zhangxc.cn/home" },
    ],
  },
  plugins: ["@vuepress/nprogress", "@vuepress/back-to-top"],
};
