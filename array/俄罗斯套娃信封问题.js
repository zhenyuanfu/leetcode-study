// 最长递增子序列 lengthOfLIS
// https://leetcode-cn.com/problems/longest-increasing-subsequence/

// 俄罗斯套娃信封问题
// https://leetcode-cn.com/problems/russian-doll-envelopes/

// 题解一：把问题转化为求LIS问题，很好理解但现在会超时。。
// https://leetcode-cn.com/problems/russian-doll-envelopes/solution/tu-jie-e-luo-si-tao-wa-si-lu-qing-xi-dai-nbmv/
function maxEnvelopes(envelopes) {
    if (envelopes.length === 1) return 1
    envelopes = mergeSort(envelopes)
    const height = envelopes.map(([, h]) => h)
    return lengthOfLIS(height)
}

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

function mergeSort(envelopes) {
    if (envelopes.length <= 1) return envelopes
    const mid = Math.floor(envelopes.length / 2)
    return merge(mergeSort(envelopes.slice(0, mid)), mergeSort(envelopes.slice(mid)))
}

function merge(left, right) {
    let res = []
    while (left.length && right.length) {
        if (left[0][0] < right[0][0] || left[0][0] === right[0][0] && left[0][1] >= right[0][1]) {
            res.push(left.shift())
        } else {
            res.push(right.shift())
        }
    }
    if (left.length) {
        res = res.concat(left)
    }
    if (right.length) {
        res = res.concat(right)
    }
    return res
}

// 题解二：https://leetcode-cn.com/problems/russian-doll-envelopes/solution/jin-zhi-tao-wa-tu-jie-guo-cheng-by-zaozh-rubf/