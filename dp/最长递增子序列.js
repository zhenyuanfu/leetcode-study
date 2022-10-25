// 最长递增子序列
// https://leetcode-cn.com/problems/longest-increasing-subsequence/
// LIS: Longest Increasing Subsequence
function lengthOfLIS(nums) {
    if (nums.length === 1) return 1
    let dp = [], res = 1
    dp[0] = 1
    for (let i = 1; i < nums.length; i++) {
        let max = 1
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                max = Math.max(dp[j] + 1, max)
            }
        }
        dp[i] = max
        res = Math.max(res, dp[i])
    }
    return res
}

// 10.23
// nums = [10,9,2,5,3,7,101,18]
function lengthOfLIS(nums) {
    let dp = []
    let res = dp[0] = 1
    for (let i = 1; i < nums.length; i++) {
        dp[i] = 1
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        res = Math.max(res, dp[i])
    }
    return res
}