// 手写new操作符
/**
 * new 的作用： 执行构造函数（可接受参数），返回一个对象
 * 原理：
 * 1. 创建一个空对象，作为要返回的对象实例
 * 2. 将这个空对象的原型，指向构造函数的prototype属性
 * 3. 将这个空对象复制个函数内部的this关键字
 * 4. 执行构造函数内部的代码
 */


function myNew() {
    var args = Array.prototype.slice.call(arguments);
    console.log(args);
    var constructor = args.shift();
    var obj = Object.create(constructor.prototype);
    console.log('obj', obj);
    var result = constructor.apply(obj, args);
    console.log('result', result);
    var flag = result && (typeof result === 'object' || typeof result === 'function');
    console.log('flag', flag);
    return flag ? result : obj;
    // return 后面的条件判断解析
    /**
     * 构造函数可能有返回值
     * 1. 有返回值，且返回值为引用（数组、对象、函数），那么result为该引用
     * 2. 有返回值，返回值为原始数据类型，不影响obj
     * 3. 无返回值，同样不影响obj
     */
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

var p = myNew(Person, 'hailin', 20);
console.log(p) 