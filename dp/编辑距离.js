// 编辑距离
// https://leetcode-cn.com/problems/edit-distance/
function minDistance(word1, word2) {
    if (word1.length == 0) return word2.length
    if (word2.length == 0) return word1.length
    let dp = [] // dp[i][j]表示word1前i个子串转化为word2前j个子串所需最少步骤，对应下标i-1,j-1
    // 这里特意留了0下标表示空字符，比如dp[0][j]表示空字符转化为word2前j个字符所需步骤，dp[i][0]表示word1前i个字符转化为空字符所需步骤
    // dp[0][j] = j, dp[i][0] = i
    dp[0] = []
    for (let j = 0; j <= word2.length; j++) { // 初始化dp[0][j]，注意因为dp[i][j]的定义比下标多1，这里需要遍历到word2.length
        dp[0][j] = j // 也就是说这里的j含义不是下标，而是前j个字符
    }
    for (let i = 0; i < word1.length; i++) {
        dp[i+1] = [i+1] // 初始化dp[i][0]，这里i是下标，所以要+1
        for (let j = 0; j < word2.length; j++) {
            if (word1[i] == word2[j]) {
                dp[i+1][j+1] = dp[i][j]
            } else {
                dp[i+1][j+1] = Math.min(dp[i][j], dp[i][j+1], dp[i+1][j]) + 1
            }
        }
    }
    return dp[word1.length][word2.length]
}

// 10.22
// word1 = "horse", word2 = "ros"
function minDistance(word1, word2) {
    if (word1.length == 0) return word2.length
    if (word2.length == 0) return word1.length
    const dp = []
    dp[0] = []
    let i = 0
    while (i <= word2.length) {
        dp[0][i] = i
        i++
    }
    let j = 1
    while (j <= word1.length) {
        dp[j] = [j]
        let k = 1
        while (k <= word2.length) {
            if (word1[j-1] == word2[k-1]) {
                dp[j][k] = dp[j-1][k-1]
            } else {
                // dp[j-1][k-1] + 1 先做dp[j-1][k-1]，再把第j-1个字符替换为第k-1个字符
                dp[j][k] = Math.min(dp[j-1][k-1] + 1, dp[j-1][k] + 1, dp[j][k-1] + 1)
            }
            k++
        }
        j++
    }
    return dp[word1.length][word2.length]
}