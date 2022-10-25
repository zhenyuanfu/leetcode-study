// 岛屿的最大面积
// https://leetcode-cn.com/problems/max-area-of-island/
// 题解（沉岛思想）：https://leetcode-cn.com/problems/max-area-of-island/solution/biao-zhun-javadong-tai-gui-hua-jie-fa-100-by-mark-/
function maxAreaOfIsland(grid) {
    let max = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) { // 遍历到一个陆地就用dfs(i, j, grid)求最大面积
                max = Math.max(max, dfs(i, j, grid))
            }
        }
    }
    return max
}

// 递归求最大面积
function dfs(i, j, grid) {
    if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[i].length - 1 || grid[i][j] === 0) return 0
    grid[i][j] = 0  // 沉岛 防止重复遍历到
    return 1 + dfs(i + 1, j, grid) + dfs(i - 1, j, grid) + dfs(i, j - 1, grid) + dfs(i, j + 1, grid)
}