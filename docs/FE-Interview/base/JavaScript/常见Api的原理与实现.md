# 常见 Api 的原理与实现

## Array.prototype.sort

## Array.prototype.map

需要注意，使用 `map()` 的时候，我们不会去对原数组进行直接操作。

```js
Array.prototype.myMap = function(fn, thisArg) {
  const res = [],
    arr = [...this];
  for (let index = 0; index < arr.length; index++) {
    res.push(fn.call(thisArg, arr[index], index, arr));
  }
  return res;
};
```

## Array.prototype.reduce

根据是否传递了初始值，分两种情况：

- 未传递初始值时，数组迭代下标从 1 开始，迭代的初始值使用数组的第一个元素。
- 传递了初始值时，数组迭代下标从 0 开始，迭代的初始值使用传入的值。

```js
Array.prototype.myReduce = function(fn, initialValue) {
  const arr = [...this];
  let ini = initialValue ? initialValue : arr[0];
  for (let index = initialValue ? 0 : 1; index < arr.length; index++) {
    ini = fn.call(null, ini, arr[index], index, this);
  }
  return ini;
};
```

## Function.prototype.call

为调用函数绑定传入的作用域，传入相关的参数后执行调用函数并返回执行的结果。

```js
Function.prototype.myCall = function(ctx, ...args) {
  const tmpKey = Symbol("fn");
  ctx[tmpKey] = this;
  const res = ctx[tmpKey](...args);
  delete ctx[tmpKey];
  return res;
};
```

## Function.prototype.apply

与 `call()` 类似，参数不同

## Function.prototype.bind

需要注意被 `bind()` 的函数作为构造函数的情况，可以通过 `instanceof` 去进行判断，当作为构造函数使用的时候，就不对函数的作用域进行绑定了。

```js
Function.prototype.myBind = function(ctx, argArray = []) {
  if (typeof this !== "function") {
    throw new Error("need callable");
  }
  const self = this;
  const fBound = function(...args) {
    const useNew = this instanceof fBound;
    const currCtx = useNew ? this : ctx;
    return self.apply(currCtx, [...args, ...argArray]);
  };
  //保证原函数的原型对象上的属性不丢失
  fBound.prototype = Object.create(self.prototype);
  return fBound;
};
```

## new

无法模拟关键字的效果，所以使用函数的方式进行模拟，需要注意一点，当构造函数有返回值且返回值是一个普通对象时，`new` 之后得到的是该返回值，否则是一个新对象。
 
```js
function ObjFactory(constructor, ...args) {
  const obj = {};
  obj.__proto__ = constructor.prototype;
  const res = constructor.call(obj, ...args);
  return typeof res === "object" ? res : obj;
}
```

## extend 继承

寄生组合式继承，也是 ES6 实现 `extend` 的原理。

```js
function extend(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
```

## Promise