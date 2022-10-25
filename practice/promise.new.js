const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class Promise {
    constructor(executor) {
        this.status = PENDING
        this.value = undefined
        this.reason = undefined
        this.fulfilledCbs = []
        this.rejectedCbs = []

        const resolve = (value) => {
            this.status = FULFILLED
            this.value = value
            this.fulfilledCbs.forEach(fn => fn())
        }

        const reject = (reason) => {
            this.status = REJECTED
            this.reason = reason
            this.rejectedCbs.forEach(fn => fn())
        }

        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : error => { throw error }
        let promise2 = new Promise((resolve, reject) => {
            if (this.status === PENDING) {
                this.fulfilledCbs.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.value)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
                this.rejectedCbs.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.reason)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
            }
            if (this.status === FULFILLED) {
                setTimeout(()=>{
                    try {
                        let x = onFulfilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error)
                    }
                }, 0);
            }
            if (this.status === REJECTED) {
                setTimeout(()=>{
                    try {
                        let x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error)
                    }
                }, 0);
            }
        })
        return promise2
    }

    catch(onRejected) {
        return this.then(null, onRejected)
    }

    finally(cb) {
        return this.then(value => {
            cb()
            return value
            // return Promise.resolve(cb()).then(() => value)
        }, reason => {
            cb()
            throw reason
        })
    }
}

// 决定promise2的resolve和reject执行时机
function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        throw new Error('Chaining cycle')
    }

    if (x && typeof x === 'object' || typeof x === 'function') {
        let then = x.then
        if (typeof then === 'function') {
            let called
            try {
                then.call(x, y => {
                    if (called) return
                    called = true
                    resolvePromise(promise2, y, resolve, reject)
                }, reason => {
                    if (called) return
                    called = true
                    reject(reason)
                })
            } catch (error) {
                if (called) return
                called = true
                reject(error)
            }
        } else {
            resolve(x)
        }
    } else {
        resolve(x)
    }
}

Promise.resolve = value => {
    if (value instanceof Promise) {
        return value
    }
    return new Promise((resolve) => resolve(value))
}

Promise.reject = reason => {
    return new Promise((resolve, reject) => reject(reason))
}

Promise.all = promises => {
    return new Promise((resolve, reject) => {
        let result = []
        if (promises.length === 0) {
            resolve(result)
            return
        }
        let count = 0
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then(value => {
                result[i] = value
                count++
                if (count === promises.length) {
                    resolve(result)
                }
            }, reason => {
                reject(reason)
            })
        }
    })
}

Promise.race = promises => {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            return
        }
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then(value => {
                resolve(value)
            }, reason => {
                reject(reason)
            })
        }
    }) 
}

Promise.all = (promises) => {
    return new Promise((resolve, reject) => {
        if (promises.length == 0) {
            resolve([])
            return
        }
        let result = [], count = 0
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then(res => {
                result[i] = res
                count++
                if (count === promises.length) {
                    resolve(result)
                }
            }, reject)
        }
    })
}