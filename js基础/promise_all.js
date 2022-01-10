

function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const cnt = promises.length;
        let finished = 0;
        let resolveArray = [];
        for (let i = 0; i < cnt; i++) {
            Promise.resolve(promises[i]).then(value => {
                resolveArray[i] = value;
                finished++;
                if (finished == cnt) {
                    resolve(resolveArray);
                }
            }, error => {
                reject(error);
            })
        }
    });
}

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 2000);
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 3000);
})

const pa = new promiseAll([p2, p3, p1]).then(
    value => {
        console.log(value);
    }
);