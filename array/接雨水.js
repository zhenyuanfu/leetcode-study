// 接雨水****
// https://leetcode-cn.com/problems/trapping-rain-water/
// https://leetcode-cn.com/problems/trapping-rain-water/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-w-8/
function trap(height) {
    let sum = 0
    let leftMaxHeight = [], rightMaxHeight = []
    for (let i = 1; i < height.length - 1; i++) {
        leftMaxHeight[i] = Math.max(leftMaxHeight[i - 1] || 0, height[i - 1])
    }
    for (let i = height.length - 1; i >= 1; i--) {
        rightMaxHeight[i] = Math.max(rightMaxHeight[i + 1] || 0, height[i + 1])
    }
    for (let i = 1; i < height.length - 1; i++) {
        const min = Math.min(leftMaxHeight[i], rightMaxHeight[i])
        if (min > height[i]) {
            sum += min - height[i]
        }
    }
    return sum
}