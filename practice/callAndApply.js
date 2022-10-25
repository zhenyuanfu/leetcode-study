/**
 * 关键：利用Symbol为obj添加一个唯一的属性指向要执行的函数，apply实现类似
 */
Function.prototype.myCall = function(obj, ...args) {
    let fn = Symbol()
    obj[fn] = this;
    let result = obj.fn(...args);
    delete obj[fn];
    return result;
}

let cc = {
    a: 1
}
function demo(x1,x2) {
    console.log(typeof this, this.a, this);
    console.log(x1, x2);
}
demo.call(cc, 33, 44)

Function.prototype.myBind = function(context, ...args) {
    return (...args2) => this.call(context, ...args, ...args2)
}
