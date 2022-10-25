// 盛最多水的容器
// https://leetcode-cn.com/problems/container-with-most-water/
function maxArea(height) {
    let left = 0, right = height.length - 1, max = (right - left) * Math.min(height[left], height[right])
    while (left < right - 1) {
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
        max = Math.max((right - left) * Math.min(height[left], height[right]), max)
    }
    return max
}