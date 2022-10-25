// 腐烂的橘子
// https://leetcode-cn.com/problems/rotting-oranges/
// grid = [[2,1,1],[1,1,0],[0,1,1]]
function orangesRotting(grid) {
    let fresh = 0
    let queue = []
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) fresh++
            else if (grid[i][j] == 2) queue.unshift([i ,j])
        }
    }
    if (fresh == 0) return 0
    if (queue.length == 0) return -1
    let time = 0
    while (queue.length) {
        const len = queue.length
        for (let k = 0; k < len; k++) {
            const [i, j] = queue.pop()
            if (i > 0 && grid[i-1][j] == 1) {
                grid[i-1][j] = 2
                fresh--
                queue.unshift([i-1, j])
            }
            if (i < grid.length - 1 && grid[i+1][j] == 1) {
                grid[i+1][j] = 2
                fresh--
                queue.unshift([i+1, j])
            }
            if (j > 0 && grid[i][j-1] == 1) {
                grid[i][j-1] = 2
                fresh--
                queue.unshift([i, j-1])
            }
            if (j < grid[i].length - 1 && grid[i][j+1] == 1) {
                grid[i][j+1] = 2
                fresh--
                queue.unshift([i, j+1])
            }
        }
        if (queue.length) time++
    }
    if (fresh > 0) return -1
    return time
}