// 合并区间
// https://leetcode-cn.com/problems/merge-intervals/
// [[1,3],[2,6],[8,10],[15,18]]
function merge(intervals) {
    if (intervals.length == 1) return intervals
    intervals.sort((a, b) => a[0] - b[0])
    let res = [], i = 0
    while (i < intervals.length) {
        let curInterval = intervals[i].slice()
        let j = i + 1
        while (j < intervals.length) {
            if (intervals[j][0] > curInterval[1]) {
                break
            } else {
                curInterval[1] = Math.max(curInterval[1], intervals[j][1])
                j++
            }
        }
        i = j
        res.push(curInterval)
    }
    return res
}