function _new(constructor, ...args) {
    const obj = {};
    obj.__proto__ = constructor.prototype;
    const result = constructor.apply(obj, args)
    if (result && typeof result === "object") return result;
    return obj;
}

function _new(constructor, ...args) {
    const obj = Object.create(constructor.prototype)
    const res = constructor.call(obj, ...args)
    if (res !== null && typeof res === 'object' || typeof res === 'function') {
        return res
    }
    return obj
}

Function.prototype.myCall = function(context, ...args) {
    let fn = Symbol()
    context[fn] = this
    const res = context[fn](...args)
    delete context[fn]
    return res
}

Function.prototype.myBind = function(context, ...args) {
    let fn = this
    let boundFn = function(...args2) {
        let ctx = this instanceof boundFn ? this : context
        return fn.call(ctx, ...args, ...args2)
    }
    if (fn.prototype) {
        boundFn.prototype = Object.create(fn.prototype)
    }
    return boundFn
}