// 零钱兑换 II
// https://leetcode-cn.com/problems/coin-change-2/
// https://leetcode-cn.com/problems/coin-change-2/solution/dong-tai-gui-hua-wan-quan-bei-bao-wen-ti-by-liweiw/
function change(amount, coins) {
    const dp = []
    dp.push(new Array(amount+1).fill(0))
    dp[0][0] = 1
    for (let i = 1; i <= coins.length; i++) {
        dp[i] = [1] // 用前i个元素凑成总额为0的组合数。
        for (let j = 1; j <= amount; j++) {
            dp[i][j] = 0
            let k = 0
            while (j >= coins[i-1]*k) {
                dp[i][j] += dp[i-1][j-coins[i-1]*k]
                k++
            }
        }
    }
    return dp[coins.length][amount]
}
// 一维dp优化
function change(amount, coins) {
    const dp = new Array(amount+1).fill(0)
    dp[0] = 1
    for (let i = 1; i <= coins.length; i++) {
        // dp[i] = [0]
        for (let j = amount; j >= 1; j--) {
            // dp[i][j] = 0
            let temp = 0
            let k = 0
            while (j >= coins[i-1]*k) {
                temp += dp[j-coins[i-1]*k]
                k++
            }
            dp[j] = temp
        }
        dp[0] = 1
    }
    return dp[amount]
}

// 10.23
function change(amount, coins) {
    const dp = []
    dp[0] = new Array(amount+1).fill(0)
    dp[0][0] = 1
    for (let i = 1; i <= coins.length; i++) {
        dp[i] = [1]
        for (let j = 1; j <= amount; j++) {
            dp[i][j] = 0
            let k = 0
            while (j >= k*coins[i-1]) {
                dp[i][j] += dp[i-1][j-k*coins[i-1]]
                k++
            }
        }
    }
    return dp[coins.length][amount]
}