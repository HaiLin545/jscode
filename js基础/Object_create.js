// Object.create(obj)
/*
    构造函数作为模板，可以生成实例对象。
    但有时候拿不到实例对象，只能拿到实例。
    Object.create(obj)可以以现有的实例对象作为模板，创建一个新的实例对象。
    该方法接受一个对象作为参数，然后以它为原型，返回一个实例对象。该实例完全继承原型对象的属性。

*/


Object.create = function (obj) {
    function F() { }
    F.prototype = obj;
    return new F();
}

var a = {
    name: 'hailin',
    age: 20
}

var b = Object.create(a);
console.log(b);
console.log(b.name);


// 修改原型对象会影响到实例对象
a.name = 'luo'
console.log(b.name)