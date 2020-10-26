# webpack

## 核心概念

- entry：告诉 webpack 应该使用那个模块作为其内部依赖图的起点。
- output：告诉 webpack 应该在哪里输出处理完成的文件。
- loader：赋予 webpack 处理非 js 文件的能力。
- plugins：赋予 webpack 各种不同的能力，如代码压缩，构建信息分析等。

## 语法解析

- Babel

## 样式文件解析

- style-loader：向 DOM 插入 由 js 字符串生成的 style 标签
- css-loader：将 css 转成 CommonJS 模块
- less-loader：将 less 转为 css

比如我们使用 less 作为 css 的预处理器：

```js
{
  test: /.less$/,
  use: [
    "style-loader", //向 DOM 插入 由JS字符串生成的 style 标签 （最后执行）
    "css-loader", // 将 css 转成 CommonJS 模块
    "less-loader", // less 转为 css （最先执行）
  ],
},
```

通过上述配置，webpack 就具有了处理 less 文件的能力。

需要注意：webpack 中对多个 loader 的处理采用的是 compose （从右到左）的方式。

## 样式增强

- postcss-loader：前缀补齐
- px2rem-loader：将 px 转为 rem

需要注意，该插件是对 css 文件进行处理的，在使用了 css 预处理器的情况下，要先将对应的文件转为 css。

```js
// 需要在 less-loader 前引入，否则单行注释会报错
{
  loader: "postcss-loader",
  options: {
    plugins: () => [
      // css 前缀补全
      require("autoprefixer")({
        overrideBrowserslist: ["last 2 version", ">1%", "ios 7"],
      }),
    ],
  },
},
```

## 静态资源文件解析

- file-loader：对文件进行简单处理。
- url-loader：依赖 file-loader ，集成了更多功能，如可以将小资源以 base 64 的方式插入代码。

```js
// 解析图片资源
{
  test: /.(png|jpg|gif|jpeg)$/,
  use: [
    {
      loader: "url-loader", // url-loader 内依赖了 file-loader
      options: {
        name: "[name]_[hash:8].[ext]", // hash 策略 8位hash
        limit: 10240,
      },
    },
  ],
},
// 解析字体资源
{
  test: /.(woff|woff2|eot|ttf|otf)$/,
  use: [
    {
      loader: "url-loader", // url-loader 内依赖了 file-loader
      options: {
        name: "[name]_[hash:8].[ext]", // hash 策略 8位 hash
      },
    },
  ],
},
```

## 目录清理

使用 clean-webpack-plugin 插件，可以在每次进行构建前清理文件目录。

## 配置别名

配置别名可以使项目中的资源引用更加简单，就不会出现 `../../../../../..` 这种情况了。

```js
{
	resolve: {
    // 配置别名，替换导入路径
    alias: {
      "@": path.resolve("src"), // 使用 @ 替代 src 文件夹的路径
      vue$: "vue/dist/vue.esm.js",
    },
  },
}
```

## 环境变量

```js
{
  plugins: [
    // 环境变量
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
    }),
  ];
}
```

## 模块的热更新

在本地开发过程中，当代码文件出现变动的时候，无需重新加载整个页面，只进行局部的更新并保留页面的状态，这种行为就是模块的热更新（Hot Module Replacement），简称 HMR。

简单配置如下：

```js
const webpack = require("webpack");

module.exports = {
  // 省略部分代码
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};
```

## Sourcemap

使用 `devtool` 选项，可以为我们的项目开启 sourcemap 功能，开启了该功能之后，我们的项目在出现错误之后，错误信息的地址指向会从打包后文件中映射到原文件目录中，这在本地开发中是非常有必要的。

## 配置合并

使用 webpack-merge 插件，我们可以将 webpack 的选项合并在一起，以此来对生产环境和开发环境进行区分。

这时候，我们的目录可以是这样的：

```js
|- build
    |- webpack.base.js  // 通用配置
    |- webpack.dev.js    // 开发环境配置
    |- webpack.prod.js  // 生产环境配置
```

在开发环境中：

```js
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const devConfig = {}; // dev config

const webpackConfig = merge(baseConfig, devConfig);

module.exports = webpackConfig;
```

针对不同的环境，可以使用不同的插件，不同的策略进行打包。

## 代码压缩

- html-webpack-plugin：负责 html 文件的压缩
- optimize-css-assets-webpack-plugin：负责 css 文件的压缩
- mini-css-extract-plugin：负责 css 文件的压缩
- uglifyjs-webpack-plugin：负责 js 文件的压缩，已经内置

## 打包速度分析

使用 speed-measure-webpack-plugin 插件，即可在控制台打印出各个插件执行花费的时间，帮助开发者分析影响构建速度的因素。

```js
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// 构建速度分析，与 html-webpack-externals-plugin 冲突
const smp = new SpeedMeasurePlugin();
const webpackconfig = {};
smp.wrap(webpackconfig);
```

## 打包体积分析

使用 webpack-bundle-analyzer 插件，可以在打包完成后生成模块的分析图谱。

```js
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const config = {
  plugins: [new BundleAnalyzerPlugin()],
};
```

## Tree Shaking

Tree Sharking 机制是用于移除上下文中未使用的代码模块，从而达到缩小构建后体积的效果，该效果依赖于 ES6 中的模块机制，在静态检查的时候发现代码中未使用的模块。

为了使用该机制，首先要满足如下条件：

- 使用 ES2015 的模块机制，确保没有 compiler 将 ES2015 模块语法转换为 CommonJS 模块（这也是流行的 Babel preset中@babel/preset-env的默认行为）
- 在项目 package.json 文件中，添加一个 `sideEffects` 入口，告知 webpack 一些不那么容易识别的模块是否要删除。
- 通过将 mode 选项设置为 production，启用 minification (代码压缩)和 tree shaking。

在 webpack4 的生产模式下，该机制默认开启。

## Scope Hoisting

作用域提升，合并模块的作用域，不仅减小了打包后的体积，也减小了运行时的体积，只需要在插件中引用即可开启。

```js
const webpack = require("webpack");

const prodConfig = {
  plugins: [
    // scope hoising
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};
```

## 抽离基础库

使用 webpack 提供的 externals 选项，我们可以将不想打包进去的依赖剔除。

```js
const config = {
  externals: {
    vue: "Vue",
    "vue-router": "VueRouter",
    vuex: "Vuex",
  },
};
```

该方法往往配合 CDN 一起使用。

## 资源文件引入

使用 html-webpack-plugin 插件，我们可以在项目的入口 html 文件中引用我们打包好的 js 文件。

## 多进程并行处理

使用 terser-webpack-plugin 插件，在 optimization 的 minimizer 配置下引入插件，开启多进程并行压缩代码。

```js
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
```

## 缓存

使用 hard-source-webpack-plugin 插件开启缓存，大多数的 loader 也已经内置了缓存开关。

## Git 提交信息规范

- husky：使用该插件，我们可以在 Git 的一些命令完成时进行一些我们想要的操作。
- commitlint：提交信息校验。
- commitizen/cz-cli：使用该插件替代 git commit 命令, 帮助我们生成符合规范的 commit message.

## 语法检查

- Eslint

## 版本更新信息输出

- conventional-changelog-cli
- conventional-changelog
