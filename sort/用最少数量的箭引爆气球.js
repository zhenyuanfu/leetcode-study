// 用最少数量的箭引爆气球
// https://leetcode-cn.com/problems/minimum-number-of-arrows-to-burst-balloons/
// [[1,2],[3,4],[5,6],[7,8]]
// 排序+贪心

// 这道题跟 [合并区间]https://leetcode-cn.com/problems/merge-intervals/ 的区别：[合并区间]是求并集，此题是求交集
function findMinArrowShots(points) {
    if (points.length == 1) return 1
    points.sort((a, b) => a[0] - b[0])
    let count = 0
    let start = 0
    while (start < points.length) {
        let range = points[start] // 当前的交集
        let j = start + 1
        while (j < points.length) {
            // 求交集。如[1,6][2,8]的交集是[2,6]
            range[0] = Math.max(points[j][0], range[0])
            range[1] = Math.min(points[j][1], range[1])
            if (range[0] <= range[1]) {
                j++
            } else break
        }
        count++
        start = j
    }
    return count
}

// 直接修改原数组
function findMinArrowShots(points) {
    if (points.length == 1) return 1
    points.sort((a, b) => a[0] - b[0])
    let count = 1
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > points[i - 1][1]) {
            count++
        } else {
            points[i][1] = Math.min(points[i][1], points[i - 1][1])
        }
    }
    return count
}