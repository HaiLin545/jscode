// 手写函数防抖

/**
 * 函数防抖是指，触发事件后，在n秒后执行，但是n秒内重新触发，那么又重新计时。
 * 1. 非立即执行版： 触发事件后，n秒后执行，若n秒内从新触发，则重新计算执行时间。
 * 2. 立即执行版，触发事件后立即执行，n秒后才能重新触发。
 */


//1. 立即执行

function debounce(fn, wait) {
    let timer = null;
    return function callback() {
        let context = this;
        let args = arguments;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, wait);
    }
}

//2. 非立即执行



const input = document.getElementById('input');
input.addEventListener('input', debounce(function (x) {
    console.log(this);
    console.log(x.target.value);
}, 500))