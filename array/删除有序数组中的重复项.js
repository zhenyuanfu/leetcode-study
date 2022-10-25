// 删除有序数组中的重复项：不要使用额外的空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
// [1,1,2]
function removeDuplicates(nums) {
    if (nums.length <= 1) return nums
    let j = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            nums[j+1] = nums[i]
            j++
        }
    }
    nums.length = j + 1
    return nums.length
}
// removeDuplicates([1,1,2])