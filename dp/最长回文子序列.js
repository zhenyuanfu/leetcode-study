// 最长回文子序列*****（有点难
// https://leetcode-cn.com/problems/longest-palindromic-subsequence/
// https://leetcode-cn.com/problems/longest-palindromic-subsequence/solution/zi-xu-lie-wen-ti-tong-yong-si-lu-zui-chang-hui-wen/
// 区间dp问题。重点是利用回文的特点确定状态转移方程，然后根据方程特点确定遍历顺序
function longestPalindromeSubseq(s) {
    if (s.length <= 1) return s.length
    const dp = []
    for (let i = 0; i < s.length; i++) {
        dp[i] = new Array(s.length).fill(0)
        dp[i][i] = 1
    }
    for (let i = s.length - 2; i >= 0; i--) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] == s[j]) {
                dp[i][j] = dp[i+1][j-1] + 2
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
            }
        }
    }
    return dp[0][s.length-1]
}

// 10.23
function longestPalindromeSubseq(s) {
    if (s.length <= 1) return s.length
    let dp = []
    let i = 0
    while (i < s.length) {
        dp[i] = new Array(s.length).fill(0) // 初始化len*len的二维数组的所有元素为0
        dp[i][i] = 1 // 对角线元素赋值为1
        i++
    }
    for (let i = s.length - 2; i >= 0; i--) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] == s[j]) {
                dp[i][j] = dp[i+1][j-1] + 2
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
            }
        }
    }
    return dp[0][s.length-1]
}