// 跳跃游戏
// https://leetcode-cn.com/problems/jump-game/
// 贪心算法：https://leetcode-cn.com/problems/jump-game/solution/pythonji-bai-97kan-bu-dong-ni-chui-wo-by-mo-lan-4/
function canJump(nums) {
    let maxIndex = 0 // 当前能到达的最远下标
    for (let i = 0; i < nums.length; i++) {
        if (maxIndex >= i && i + nums[i] > maxIndex) {
            maxIndex = i + nums[i]
        }
    }
    return maxIndex >= nums.length - 1
}