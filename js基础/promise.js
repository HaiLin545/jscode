
// 手写一个promise
/**
 * Promise是一个对象，也是一个构造函数
 * Promise有三个状态
 * 1. 异步操作未完成 pending
 * 2. 成功  fulfilled
 * 3. 失败  rejected     （和fulfilled合并为resolved）
 *                                
 */



class myPromise {

    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';


    constructor(fn) {
        this.status = myPromise.PENDING;
        this.result = null;
        this.resolveCallbacks = [];
        this.rejectCallbacks = [];
        // fn(this.resolve.bind(this), this.reject.bind(this));
        try {
            fn(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error);
        }
    }

    resolve(result) {
        setTimeout(() => {
            if (this.status === myPromise.PENDING) {
                this.status = myPromise.FULFILLED;
                this.result = result;
                this.resolveCallbacks.forEach(callback => {
                    callback(result);
                })
            }
        }, 0);
    }

    reject(result) {
        setTimeout(() => {
            if (this.status === myPromise.PENDING) {
                this.status = myPromise.REJECTED;
                this.result = result;
                this.rejectCallbacks.forEach(callback => {
                    callback(result);
                })
            }
        }, 0);
    }

    then(onFulfilled, onRejected) {
        let self = this;
        return new myPromise((resolve, reject) => {
            console.log('链式调用');
            onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { };
            onRejected = typeof onRejected === 'function' ? onRejected : () => { };

            let fulfilled = () => {
                try {
                    const result = onFulfilled(self.result);
                    console.log('result');
                    return result instanceof myPromise ? result.then(resolve, reject) : resolve(result);
                } catch (error) {
                    reject(error);
                }
            }
            let rejected = () => {
                try {
                    const result = onRejected(self.result);
                    return result instanceof myPromise ? result.then(resolve, reject) : resolve(result);
                } catch (error) {
                    reject(error);
                }
            }
            if (self.status === myPromise.PENDING) {
                self.resolveCallbacks.push(onFulfilled);
                self.rejectCallbacks.push(onRejected);
            }
            if (self.status === myPromise.FULFILLED) {
                setTimeout(() => {
                    fulfilled();
                }, 0);
            }
            if (self.status === myPromise.REJECTED) {
                setTimeout(() => {
                    reject();
                }, 0);
            }
        })
    }

}



var promise = new myPromise((resolve, reject) => {
    console.log(2);
    resolve('resolve');
});

console.log(1);

promise.then(
    result => { console.log(result); },
    result => { console.log(result); }
).then(result => {
    console.log('链式调用');
    resolve('?');
});
