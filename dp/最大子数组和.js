// 最大子数组和[中等]
// https://leetcode-cn.com/problems/maximum-subarray/
function maxSubArray(nums) {
    if (nums.length == 1) return nums[0]
    let dp = [], max = dp[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        dp[i] = nums[i] + Math.max(0, dp[i-1])
        max = Math.max(max, dp[i])
    }
    return max
}

// 内存优化：由于求dp[i]只需要dp[i-1]，可用一个变量代替dp数组
function maxSubArray(nums) {
    if (nums.length == 1) return nums[0]
    let max = last = nums[0]
    for (let i = 1; i < nums.length; i++) {
        last = nums[i] + Math.max(0, last)
        max = Math.max(max, last)
    }
    return max
}

// 10.23
function maxSubArray(nums) {
    let dp = []
    let res = dp[0] = nums[0]
    let i = 1
    while (i < nums.length) {
        dp[i] = nums[i] + Math.max(0, dp[i-1])
        res = Math.max(res, dp[i])
        i++
    }
    return res
}
// 空间优化
function maxSubArray(nums) {
    let res = pre = nums[0]
    let i = 1
    while (i < nums.length) {
        pre = nums[i] + Math.max(0, pre)
        res = Math.max(res, pre)
        i++
    }
    return res
}