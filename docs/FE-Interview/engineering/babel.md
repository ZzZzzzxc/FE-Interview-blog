# Babel

我们常说的 Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

## 依赖版本

```js
{
    "@babel/cli": "^7.12.10",
    "@babel/core": "^7.12.10",
    "@babel/plugin-transform-runtime": "^7.12.10",
    "@babel/preset-env": "^7.12.11",
    "@babel/runtime": "^7.12.5",
    "core-js": "^3.8.1",
    "regenerator-runtime": "^0.13.7"
}
```

## Babel 的调用方式

- 直接在 js 代码内调用，
- 命令行工具 `@babel/cli`，
- 构建工具，如 `webpack`，通过 `babel-loader` 进行使用。

## Babel 的配置文件

同时 babel 支持如下多种配置方式：

- package.json
- .babelrc
- babel.config.json
- .babelrc.js

## Presets 和 Plugins

由于 Babel 本身是一个编译器，输入代码再输出编译后的代码（不会对代码进行额外处理，类似于 `const babel = code => code`），所以需要在其中加入 Plugins（相当于 `const babel = code => plugins(code)`），完成对代码的加工处理，同时为了避免繁杂的 Plugins 配置，我们可以通过 Presets 去使用一系列组合好的 Plugins 的集合。

**需要注意：`Presets` 在 `Plugins` 之后执行，`Presets` 设置内的执行顺序为从数组的后面往前，与 `Plugins` 相反**。

例如：

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

会先执行 `@babel/preset-react`，然后再执行 `@babel/preset-env`。

```json
{
  "plugins": ["transform-decorators-legacy", "transform-class-properties"]
}
```

则会先执行`transform-decorators-legacy`，然后再执行`transform-class-properties`。

常见的 Presets 有：

- @babel/preset-env：适用于常规项目，允许你在项目内使用最新的 Javascript 语法。
- @babel/preset-flow：适用于 [Flow](https://flow.org/en/docs/getting-started/) 项目。
- @babel/preset-react：适用于 React 项目。
- @babel/preset-typescript：适用于 [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) 项目。
- @vue/babel-preset-app：适用于 Vue-Cli 构建的项目，是 `@babel/preset-env` 、`@babel/plugin-syntax-jsx`、`@vue/babel-preset-jsx` 等模块的集合。

常见的 Plugins 有：

- @babel/plugin-transform-runtime：用于复用 Babel 注入代码内的 `helper code`，与 `@babel/runtime` 结合使用。

## @babel/preset-env

### targets

该选项用于描述你的项目所需要支持的环境，类型为 `string | Array<string> | { [string]: string }`，默认值是 `{}`。

具体属性如下：

- browserslist：需要支持的最低版本浏览器
- esmodules：如果浏览器支持ES模块，则 browserslist 会被忽略，结合 `<script type="module"></script>` 可以向用户提供更小体积的脚本。
- node
- safari
- browsers：后续版本该字段会被移除。

如果没有设置 `targets`，babel 会将 ES2015+ 的代码全部转换为 ES5兼容，这样就会丧失 `preset-env` 可以兼容指定浏览器的优势。

### useBuiltIns

该选项用于配置 babel 如何处理 `polyfill`，可选值包括 `"usage"| "entry"| false`，默认为 `false`。

- false：不对 `polyfill` 进行处理。
- entry：根据 `targets` 中设置的浏览器列表，引入需要提供支持的所有 `polyfill`。
- usage：按需引入当前所需的 `polyfill`。

该选项不为 `false` 的时候，`@babel/preset-env` 会建立对 `core-js` 的直接引用，所以需要安装 `core-js`。

### corejs

此选项添加于 `v7.4.0`，用于配置 `core-js` 包（该依赖包含 promises, symbols, collections, iterators, typed arrays 等功能的 polyfills）,值可以设置为 `2` 、`3` 或者 `{ version: 2|3, proposals: boolean }`，默认为 `2`。

由于 `core-js@2` 已经不再添加新的特性（`polyfill` 默认使用的是该版本），所以最好使用 `core-js@3`。

其他的，还有诸如 `bugfixes`、`spec`、`modules` 等字段，可以去 [Babel文档](https://www.babeljs.cn/docs/babel-preset-env#forcealltransforms) 进行查阅。

## @babel/plugin-transform-runtime 和 @babel/runtime

Babel 会自行实现一些如 `_extend` 的功能函数，这些功能 Babel 会在每次使用的时候都实现一遍，增大编译后的体积，使用 `@babel/plugin-transform-runtime` 插件会将这些函数都改为从 `@babel/runtime` 进行引用，就可以避免这个问题。

> 需要注意：与 `@babel/plugin-transform-runtime` 不同，`@babel/runtime` 需要在作为生产环境的依赖进行安装。

## 常用依赖总结

| 包名                            | 功能                                    | 说明                                                   |
| ------------------------------- | --------------------------------------- | ------------------------------------------------------ |
| @babel/core                     | babel 核心编译包                        | dev 依赖                                               |
| @babel/polyfill                 | 兼容库                                  | prod 依赖                                              |
| @babel/preset-env               | 常用预设                                | dev 依赖，依赖 core-js                                 |
| @babel/plugin-transform-runtime | 实现对 helper code 的复用               | dev 依赖，与 @babel/runtime 配合使用                   |
| @babel/runtime                  | 对 helper code 的封装                   | prod 依赖，与 @babel/plugin-transform-runtime 配合使用 |
| core-js                         | 兼容库                                  | prod 依赖，被 @babel/preset-env 依赖                   |
| @babel/cli                      | 命令行工具                              | dev 依赖                                               |
| babel-loader                    | webpack 中的 loader，用于 js 文件的解析 | dev 依赖，在 webpack 项目中使用                        |


## babel 插件开发
