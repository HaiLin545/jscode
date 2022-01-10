// 手写节流
/**
 * 
 * 一定时间内，某个事件只能触发一次
 * 
 */

function throttle(fn, wait) {
    let timer = null;
    let flag = true;
    return function (...args) {
        if (flag) {
            flag = false;
            timer = setTimeout(() => {
                flag = true;
            }, wait)
            fn.apply(this, args);
        }
    }
}


const input = document.getElementById('input');

input.addEventListener('input', throttle((x) => {
    console.log(x.target.value);
}, 1000));