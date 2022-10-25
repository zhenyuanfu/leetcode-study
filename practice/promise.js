class MyPromise {
    constructor(executor) {
        this.status = "pending";
        this.value = undefined;
        this.reason = undefined;
        this.resolvedCbs = [];
        this.rejectedCbs = [];
        let resolve = data => {
            if (this.status === "pending") {
                this.status = "fulfilled";
                this.value = data;
                this.resolvedCbs.forEach(fn=>fn());
            }
        }
        let reject = err => {
            if (this.status === "pending") {
                this.status = "rejected";
                this.reason = err;
                this.rejectedCbs.forEach(fn=>fn());
            }
        }
        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === "function" ? onFulfilled : y => y;
        onRejected = typeof onRejected === "function" ? onRejected : err => { throw new Error(err) }
        let promise2;
        if (this.status === "pending") {
            promise2 = new MyPromise((resolve, reject)=>{
                this.resolvedCbs.push(()=>{
                    setTimeout(()=>{
                        try {
                            let x = onFulfilled(this.value);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (error) {
                            reject(error)
                        }
                    }, 0);
                })
                this.rejectedCbs.push(()=>{
                    setTimeout(()=>{
                        try {
                            let x = onRejected(this.reason);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (error) {
                            reject(error)
                        }
                    }, 0);
                })
            })
        }
        if (this.status === "fulfilled") {
            setTimeout(()=>{
                try {
                    let x = onFulfilled(this.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error)
                }
            }, 0);
        }
        if (this.status === "rejected") {
            setTimeout(()=>{
                try {
                    let x = onRejected(this.reason);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error)
                }
            }, 0);
        }
    }
    catch(onRejected) {
        return this.then(null, onRejected);
    }
}
function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        throw new TypeError("循环引用");
    }
    if (x !== null && (typeof x === "object" || typeof x === "function")) {
        let called = false;
        let then = x.then;
        if (typeof then === "function") {
            try {
                then.call(x, y => {
                    if (called) return;
                    called = true;
                    resolvePromise(promise2, y, resolve, reject);
                }, err => {
                    if (called) return;
                    called = true;
                    reject(err);
                })
            } catch (error) {
                if (called) return;
                called = true;
                reject(err);
            }
        } else {
            resolve(x);
        }
    } else {
        resolve(x);
    }
}
MyPromise.resolve = function(data) {
    return new MyPromise(resolve => resolve(data));
}
MyPromise.reject = function(err) {
    return new MyPromise((_, reject) => reject(err));
}
MyPromise.all = function() {}
MyPromise.race = function() {}
MyPromise.defer = function() {}
new Promise((resolve, reject) => {}).then()


