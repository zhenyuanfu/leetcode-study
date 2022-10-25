// 打开转盘锁[双向BFS]
// https://leetcode-cn.com/problems/open-the-lock/
// 单向BFS
function openLock(deadends, target) {
    if (deadends.includes('0000')) return -1
    const visited = new Set()
    visited.add('0000')
    const queue = ['0000']
    let step = 0
    while (queue.length) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const cur = queue.pop()
            if (cur === target) return step
            for (let j = 0; j < 4; j++) {
                const up = parseInt(cur[j]) + 1 > 9 ? 0 : parseInt(cur[j]) + 1
                const nextForUp = cur.slice(0, j) + up + cur.slice(j+1)
                if (!deadends.includes(nextForUp) && !visited.has(nextForUp)) {
                    queue.unshift(nextForUp)
                    visited.add(nextForUp)
                }
                const down = parseInt(cur[j]) - 1 < 0 ? 9 : parseInt(cur[j]) - 1
                const nextForDown = cur.slice(0, j) + down + cur.slice(j+1)
                if (!deadends.includes(nextForDown) && !visited.has(nextForDown)) {
                    queue.unshift(nextForDown)
                    visited.add(nextForDown)
                }
            }
        }
        step++
    }
    return -1
}

// 双向BFS
function openLock(deadends, target) {
    if (deadends.includes('0000')) return -1
    if (target == '0000') return 0
    const visited = { 0000: 1, [target]: 1 }

    const begin = ['0000']
    const end = [target]
    let step = 0
    while (begin.length && end.length) {
        if (begin.length > end.lengh) {
            const temp = begin
            begin = end
            end = temp
        }
        const len = begin.length
        for (let i = 0; i < len; i++) {
            const cur = begin.pop()
            for (let j = 0; j < 4; j++) {
                const up = parseInt(cur[j]) + 1 > 9 ? 0 : parseInt(cur[j]) + 1
                const nextForUp = cur.slice(0, j) + up + cur.slice(j+1)
                if (end.includes(nextForUp)) return step + 1
                if (!deadends.includes(nextForUp) && !visited[nextForUp]) {
                    begin.unshift(nextForUp)
                    visited[nextForUp] = 1
                }
                const down = parseInt(cur[j]) - 1 < 0 ? 9 : parseInt(cur[j]) - 1
                const nextForDown = cur.slice(0, j) + down + cur.slice(j+1)
                if (end.includes(nextForDown)) return step + 1
                if (!deadends.includes(nextForDown) && !visited[nextForDown]) {
                    begin.unshift(nextForDown)
                    visited[nextForDown] = 1
                }
            }
        }
        step++
    }
    return -1
}