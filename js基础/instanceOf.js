// 手写instanceOf方法


// Object.getPrototypeOf()是ES5中的标准方法
// Object.__proto__是非标准的方法

function myInstanceOf(left, right) {
    var proto = Object.getPrototypeOf(left);
    var prototype = right.prototype;
    while (true) {
        if (!proto) return false;
        if (proto === prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
}

function F() {
    this.name = 'a';
    this.age = 1;
}

var f = new F();

F.prototype.print = function () {
    console.log(this.name + this.age);
}
// console.log(F.prototype);
// console.log(f.prototype);

console.log(myInstanceOf(f, F));

console.log(f.__proto__, F.prototype, Object.getPrototypeOf(f), Object.getPrototypeOf(F))