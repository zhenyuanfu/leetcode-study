// 最长连续序列
// https://leetcode-cn.com/problems/longest-consecutive-sequence/
// 哈希
/**
 * 遍历数组中的每个元素num，然后以num为起点，每次+1向后遍历num+1,num+2,num+3...，判断这些元素是否存在于数组中。
 * 假设找到的最大的连续存在的元素为num+x，那么这个连续序列的长度即为x+1。最后将每个num所开始序列长度取个最大值即可
 */
// nums = [100,4,200,1,3,2]
function longestConsecutive(nums) {
    if (nums.length <= 1) return nums.length
    const numMap = {}
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        if (!numMap[nums[i]]) numMap[nums[i]] = 1 
    }
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (numMap[num - 1]) continue // 说明num不是左边界
        let len = 0
        while (numMap[num++]) {
            len++
        }
        if (len > max) max = len
    }
    return max
}