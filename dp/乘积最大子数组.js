// 152. 乘积最大子数组
// https://leetcode.cn/problems/maximum-product-subarray/
function maxProduct(nums) {
    if (nums.length == 1) return nums[0]
    let max = preMax = preMin = nums[0] // 关键点是要多维护一个包含i元素的子数组最小乘积
    for (let i = 1; i < nums.length; i++) {
        let temp = Math.max(nums[i], preMax * nums[i], preMin * nums[i])
        preMin = Math.min(nums[i], preMax * nums[i], preMin * nums[i])
        preMax = temp
        max = Math.max(max, preMax)
    }
    return max
}

// 10.23
function maxProduct(nums) {
    let dp1 = [nums[0]]
    let dp2 = [nums[0]]
    let res = nums[0]
    let i = 1
    while (i < nums.length) {
        dp1[i] = Math.max(nums[i], nums[i]*dp1[i-1], nums[i]*dp2[i-1])
        dp2[i] = Math.min(nums[i], nums[i]*dp1[i-1], nums[i]*dp2[i-1])
        res = Math.max(res, dp1[i])
        i++
    }
    return res
}
// 空间优化
function maxProduct(nums) {
    let res = preMax = preMin = nums[0]
    let i = 1
    while (i < nums.length) {
        let temp = Math.max(nums[i], nums[i]*preMax, nums[i]*preMin)
        preMin = Math.min(nums[i], nums[i]*preMax, nums[i]*preMin)
        preMax = temp
        res = Math.max(res, preMax)
        i++
    }
    return res
}