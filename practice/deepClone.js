function deepClone(target, map = new WeakMap()) {
    if (target instanceof RegExp) return new RegExp(target);
    if (target instanceof Date) return new Date(target);
    if (typeof target !== "object" || target === null) return target;
    if (map.has(target)) return map.get(target)
    let cloneTarget = new target.constructor();
    map.set(target, cloneTarget);
    for(let key in target) {
        if (target.hasOwnProperty(key)) {
            cloneTarget[key] = deepClone(target[key], map);
        }
    }
    return cloneTarget;
}
/**
 * 要点：
 * 1. 处理Date等类型
 * 2. 用map记录创建过的深拷贝，并且递归时作为第二个参数
 * 3. 用constructor动态创建不同类型的深拷贝对象
 * 4. 注意hasOwnProperty排除原型属性
 */