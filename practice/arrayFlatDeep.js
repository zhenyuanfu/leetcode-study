// 数组降维
// 关键：使用reduce和递归
function flatDeep(arr) {
    return arr.reduce((acc, curr)=>{
        if (Array.isArray(curr)) {
            return [...acc, ...flatDeep(curr)];
        } else {
            return [...acc, curr];
        }
    }, [])
}
let arr = [1,[2,[3,4,5]],6,7];
console.log(flatDeep(arr));