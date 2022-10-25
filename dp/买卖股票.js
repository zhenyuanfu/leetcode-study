// 买卖股票的最佳时机
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
function maxProfit(prices) {
    if (prices.length == 1) return 0
    let dp = [], max = dp[0] = 0
    for (let i = 1; i < prices.length; i++) {
        dp[i] = Math.max(0, dp[i-1] + (prices[i] - prices[i-1]))
        max = Math.max(max, dp[i])
    }
    return max
}

// 内存优化
function maxProfit(prices) {
    if (prices.length == 1) return 0
    let max = last = 0
    for (let i = 1; i < prices.length; i++) {
        last = Math.max(0, last + (prices[i] - prices[i-1]))
        max = Math.max(max, last)
    }
    return max
}

// 10.23
function maxProfit(prices) {
    let res = pre = 0
    for (let i = 1; i < prices.length; i++) {
        pre = Math.max(0, pre+prices[i]-prices[i-1])
        res = Math.max(res, pre)
    }
    return res
}

// 买卖股票的最佳时机 II （这题的dp状态定义好难想。。。）
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
// 贪心算法/动态规划：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/solution/tan-xin-suan-fa-by-liweiwei1419-2/
function maxProfit() {}