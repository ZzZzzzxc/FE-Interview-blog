# this

`this` 的指向遵循以下几种规则：

## 默认规则

`this` 的指向完全由调用他的上下文决定，谁调用就指向谁。

## 显式绑定

`this` 可以通过调用`call()`、`apply()`、`bind()`进行显式绑定。

```js
this.a = "global";
const b = {
  a: "b",
};
const c = {
  a: "c",
};
const foo = function () {
  console.log(this.a);
};

const bar = function () {
  foo.bind(b).call(c);
};

this.foo = foo;
this.foo(); // global
bar(); // b
```

通过 `bind()` 显式绑定的 `this` 始终会绑定到第一次 `bind()` 传入的上下文，因为 `bind()` 的内部实现大致为：

```js
function bind(fn, context) {
  return function () {
    return fn.apply(context, arguments);
  };
}
```

通过 `apply()` 为函数捆绑一个上下文，使 `this` 的值不会受到其他操作的影响。 

> **注意：** 在 ES6 中，`bind(..)` 生成的硬绑定函数有一个名为 `.name` 的属性，它源自于原始的 *目标函数（target function）*。举例来说：`bar = foo.bind(..)` 应该会有一个 `bar.name` 属性，它的值为 `"bound foo"`，这个值应当会显示在调用栈轨迹的函数调用名称中。

## 隐式绑定

### 全局上下文

全局上下文默认 `this` 指向 `window`， 严格模式下指向 `undefined` 。

### 对象调用

```js
function foo() {
	console.log( this.a );
}

var obj2 = {
	a: 42,
	foo: foo
};

var obj1 = {
	a: 2,
	obj2: obj2
};

obj1.obj2.foo(); // 42
```

 该例中，本质上 `foo()` 是由 `obj2` 调用的 ，只有对象属性引用链的最后一层是影响调用点的。

### 箭头函数

箭头函数没有 `this` ，因此也不能绑定。里面的 `this` 会指向当前最近的非箭头函数的 `this`，找不到就会指向全局上下文。

### DOM事件

`onclick()` 和 `addEventerListener()` 中 `this` 默认指向绑定事件的元素。

## new 绑定

这种方式会使 `this` 指向构造函数生成的实例对象。

## 优先级

1. `new` 绑定
2. 显式绑定 
3. 对象调用 
4. 默认规则

## 参考

- [You-Dont-Know-JS / this & object prototypes](https://github.com/getify/You-Dont-Know-JS/tree/1ed-zh-CN/this%20%26%20object%20prototypes)