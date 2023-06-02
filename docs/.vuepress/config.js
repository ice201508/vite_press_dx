module.exports = {
  title: "武汉设计工程学院yyds",
  // 本地开发 图片 403问题
  head: [
    ["meta", { name: "referrer", content: "no-referrer" }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }],
  ],
  // github 部署的地址是 /   对应 history 模式看看
  // gitee  部署的地址是 /renzi_89/ 或者./ 都可以 -----   app.js 文件 采用history模式，刷新不报错
  base: "/", // 开发不用，打包时候放开  目标地址是：https://openhacking.github.io/vuepress-template/，所以需要配置base地址后缀
  // base: '/',
  plugins: [
    "@vuepress/back-to-top",
    [
      // https://github.com/xuekai-china/vuepress-plugin-right-anchor/blob/0.5.4/zh-README.md
      "vuepress-plugin-right-anchor",
      {
        showDepth: 1,
        expand: {
          trigger: "click", // hover click
          clickModeDefaultOpen: false,
        },
      },
    ],
  ],
  smoothScroll: true,
  // devServer: {
  //   // https: true
  // },
  themeConfig: {
    displayAllHeaders: true,
    logo: "/doraameng.jpg",
    serviceWorker: {
      updatePopup: true, // 刷新内容的弹窗
    },
    nav: [
      { text: "小程序", link: "/xcx/" },
      {
        text: "小程序资源网站",
        items: [
          {
            text: "原生小程序",
            items: [
              { text: "微信公众平台-登录", link: "https://mp.weixin.qq.com/" },
              {
                text: "小程序开发文档",
                link: "https://developers.weixin.qq.com/miniprogram/dev/framework/",
              },
              {
                text: "小程序接口文档",
                link: "https://apifox.com/apidoc/shared-8d66c345-7a9a-4844-9a5a-1201852f6faa/doc-1492243",
              },
              {
                text: "Vant Weapp",
                link: "https://vant-contrib.gitee.io/vant-weapp/#/home",
              },
              {
                text: "在线思维导图",
                link: "https://www.zhixi.com/share/305d8208",
              },
              {
                text: "支付宝小程序开发文档",
                link: "https://opendocs.alipay.com/mini/introduce",
              },
              {
                text: "抖音小程序开发文档",
                link: "https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/guide/introduction",
              },
            ],
          },
          {
            text: "uni-app小程序",
            items: [
              {
                text: "接口文档",
                link: "https://www.showdoc.com.cn/128719739414963/2513235043485226",
              },
              { text: "uni-app小程序", link: "https://uniapp.dcloud.net.cn/" },
              { text: "uView", link: "https://www.uviewui.com/" },
            ],
          },
        ],
      },
    ],
    // sidebar: 'auto',
    collapsable: true,
    sidebar: {
      "/xcx/": [
        {
          title: "1-小程序基础",
          path: "/xcx/01", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true,
          displayAllHeaders: true,
          sidebarDepth: 2,
          children: ["01"],
        },
        {
          title: "2-小程序基础",
          path: "/xcx/02",
          collapsable: true,
          sidebarDepth: 2,
          children: ["02"],
        },
        {
          title: "3-小程序基础",
          path: "/xcx/03",
          collapsable: true,
          sidebarDepth: 2,
          children: ["03"],
        },
        {
          title: "4-享+本地生活",
          path: "/xcx/04",
          collapsable: true,
          sidebarDepth: 2,
          children: ["04"],
        },
        {
          title: "5-享+本地生活",
          path: "/xcx/05",
          collapsable: true,
          sidebarDepth: 2,
          children: ["05"],
        },
        {
          title: "6-享+本地生活",
          path: "/xcx/06",
          collapsable: true,
          sidebarDepth: 2,
          children: ["06"],
        },
        {
          title: "7-享+本地生活",
          path: "/xcx/07",
          collapsable: true,
          sidebarDepth: 2,
          children: ["07"],
        },
        {
          title: "8-uni-app项目",
          path: "/xcx/08",
          collapsable: true,
          sidebarDepth: 2,
          children: ["08"],
        },
        {
          title: "9-uni-app项目",
          path: "/xcx/09",
          collapsable: true,
          sidebarDepth: 2,
          children: ["09"],
        },
        {
          title: "10-uni-app项目",
          path: "/xcx/10",
          collapsable: true,
          sidebarDepth: 2,
          children: ["10"],
        },
      ],
    },
  },
  markdown: {
    // 图片中文路径的问题   npm i markdown-it-disable-url-encode
    extendMarkdown: (md) => {
      md.use(require("markdown-it-disable-url-encode"));
    },
  },
};
