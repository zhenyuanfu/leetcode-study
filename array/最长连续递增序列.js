// 最长连续递增序列
// https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/
// 动态规划
function findLengthOfLCIS(nums) {
    if (nums.length == 1) return 1
    let maxLen = 1, preMax = 1 // 空间优化
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            preMax++
            if (preMax > maxLen) {
                maxLen = preMax
            }
        } else {
            preMax = 1
        }
    }
    return maxLen
}