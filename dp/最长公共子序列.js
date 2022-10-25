// 最长公共子序列
// https://leetcode-cn.com/problems/longest-common-subsequence/
function longestCommonSubsequence(text1, text2) {
    if (text1.length == 0 || text2.length == 0) return 0
    const dp = []
    for (let i = 0; i < text1.length; i++) {
        dp.push([])
        for (let j = 0; j < text2.length; j++) {
            if (text1[i] == text2[j]) {
                dp[i][j] = (i == 0 || j == 0) ? 1 : dp[i-1][j-1] + 1
            } else {
                dp[i][j] = Math.max(j == 0 ? 0 : dp[i][j-1], i == 0 ? 0 : dp[i-1][j])
            }
        }
    }
    return dp[text1.length-1][text2.length-1]
}

// 10.23
// text1 = "abcde", text2 = "ace" 
function longestCommonSubsequence(text1, text2) {
    let dp = []
    dp[0] = new Array(text2.length+1).fill(0)
    for (let i = 1; i <= text1.length; i++) {
        dp[i] = [0]
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i-1] == text2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    return dp[text1.length][text2.length]
}