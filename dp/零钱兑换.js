// 零钱兑换
// https://leetcode-cn.com/problems/coin-change/
// https://leetcode-cn.com/problems/coin-change/solution/dong-tai-gui-hua-shi-yong-wan-quan-bei-bao-wen-ti-/
// coins = [1, 2, 5], amount = 11
// 时间复杂度：O(N×amount)
// 空间复杂度：O(amount)
function coinChange(coins, amount, dp = {}) {
    if (amount == 0) return 0
    if (dp[amount]) return dp[amount]
    let min = -1
    for (let i = 0; i < coins.length; i++) {
        if (coins[i] <= amount) {
            const count = coinChange(coins, amount - coins[i], dp)
            if (count !== -1) {
                min = min == -1 ? count + 1 : Math.min(min, count + 1)
            }
        }
    }
    dp[amount] = min
    return min
}

// 非递归解法
function coinChange(coins, amount) {
    if (amount == 0) return 0
    const dp = []
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        dp[i] = -1
        for (let j = 0; j < coins.length; j++) {
            if (i >= coins[j] && dp[i-coins[j]] != -1) {
                if (dp[i] == -1) {
                    dp[i] = dp[i-coins[j]] + 1
                } else {
                    dp[i] = Math.min(dp[i], dp[i-coins[j]] + 1)
                }
            }
        }
    }
    return dp[amount]
}

function coinChange(coins, amount) {
    let dp = []
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        dp[i] = -1 // default
        for (let j = 0; j < coins.length; j++) {
            if (i >= coins[j] && dp[i - coins[j]] !== -1) {
                const count = dp[i - coins[j]] + 1
                dp[i] = dp[i] == -1 ? count : Math.min(count, dp[i])
            }
        }
    }
    return dp[amount]
}

// 10.23
function coinChange(coins, amount) {
    let dp = [0]
    let i = 1
    while (i <= amount) {
        let j = 0, min = -1
        while (j < coins.length) {
            if (i >= coins[j] && dp[i-coins[j]] !== -1) {
                let temp = dp[i-coins[j]] + 1
                if (min === -1) {
                    min = temp
                } else {
                    min = Math.min(min, temp)
                }
            }
            j++
        }
        dp[i] = min
        i++
    }
    return dp[amount]
}