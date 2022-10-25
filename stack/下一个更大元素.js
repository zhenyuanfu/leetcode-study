// 下一个更大元素 I [单调栈]
// https://leetcode-cn.com/problems/next-greater-element-i/
function nextGreaterElement(nums1, nums2) {
    const greater = {}
    const stack = [nums2[0]]
    for (let i = 1; i < nums2.length; i++) {
        while (stack.length > 0 && nums2[i] > stack[stack.length-1]) {
            greater[stack.pop()] = nums2[i]
        }
        stack.push(nums2[i])
    }
    while (stack.length) {
        greater[stack.pop()] = -1
    }
    return nums1.map(num => greater[num])
}

// 10.22
// 什么时候进栈？什么时候出栈？栈顶元素有什么意义，怎么利用栈顶元素与其他元素比较？
function nextGreaterElement(nums1, nums2) {
    const greater = {}
    const stack = [nums2[0]]
    let i = 1
    while (i < nums2.length) {
        // 注意这里要判断栈是否为空，并且要循环出栈
        while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
            greater[stack.pop()] = nums2[i]
        }
        stack.push(nums2[i])
        i++
    }
    while (stack.length) {
        greater[stack.pop()] = -1
    }
    return nums1.map(num => greater[num])
}