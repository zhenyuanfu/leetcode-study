// 跳跃游戏 II：使用最少的跳跃次数到达数组的最后一个位置
// https://leetcode-cn.com/problems/jump-game-ii/
function jump(nums) {
    let count = 0, start = end = 0
    while (end < nums.length - 1) {
        let max = 0
        for (let i = start; i <= end; i++) {
            max = Math.max(max, i + nums[i])
        }
        start = end + 1
        end = max
        count++
    }
    return count
}