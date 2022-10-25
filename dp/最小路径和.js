// 最小路径和
// https://leetcode.cn/problems/minimum-path-sum/
// grid = [[1,3,1],[1,5,1],[4,2,1]]
function minPathSum(grid) {
    let dp = []
    for (let i = 0; i < grid.length; i++) {
        dp.push([])
        for (let j = 0; j < grid[i].length; j++) {
            if (i == 0) {
                dp[i][j] = j == 0 ? grid[i][j] : dp[i][j-1] + grid[i][j]
            } else {
                dp[i][j] = j == 0 ? dp[i-1][j] + grid[i][j] : Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
            }
        }
    }
    return dp[grid.length-1][dp[grid.length-1].length-1]
}

// 10.23
function minPathSum(grid) {
    let dp = []
    for (let i = 0; i < grid.length; i++) {
        dp[i] = []
        for (let j = 0; j < grid[i].length; j++) {
            if (i == 0) {
                dp[i][j] = j == 0 ? grid[i][j] : dp[i][j-1] + grid[i][j]
            } else {
                dp[i][j] = j == 0 ? dp[i-1][j] + grid[i][j] : Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
            }
        }
    }
    return dp[grid.length-1][grid[0].length-1]
}