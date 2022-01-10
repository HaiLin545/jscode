// 手写call & apply & bind
// Function.prototype.call(context,arg1,arg2,..)
// Function.prototype.apply(context,[args])
// Function.prototype.bind(context)


Function.prototype.myCall = (context, ...args) => {
    if (typeof this != 'function') {
        console.error('type error');
    }
    let result = null;
    context = context || window;
    context.fn = this;
    result = context.fn(...args);
    delete context.fn;
    return result;
}


Function.prototype.myApply = (context, args) => {
    if (typeof this != 'function') {
        console.error('type error');
    }
    let result = null;
    context = context || window;
    context.fn = this;
    result = context.fn(...args);
    delete context.fn;
    return result;
}

Function.prototype.myApply = (context) => {
    if (typeof this != 'function') {
        console.error('type error');
    }
    var fn = this;
    context = context || window;
    return function Fn(...args) {
        return fn.apply(context, args);
    }
}

