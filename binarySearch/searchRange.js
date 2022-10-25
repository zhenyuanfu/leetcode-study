// 在排序数组中查找元素的第一个和最后一个位置(PS: 时间复杂度要求 O(log n)，故考虑二分法)
// https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// nums = [5,7,7,8,8,8,8,10,12,15], target = 8
// [5,7,7,8,8,10]
// 二分查找的本质是缩小范围，结束条件有时是left > right，有时是left == right，另外缩小范围有时会把mid也包含在内，需要灵活变通

function searchRange(nums, target) {
    if (nums.length === 0) return [-1, -1]
    let left = 0, right = nums.length - 1
    let start = end = -1
    // 找左边界
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] > target) {
            right = mid - 1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            // 找到target后判断一下左边相邻元素是否也是target，不是的话说明当前元素就是左边界，直接break
            if (nums[mid - 1] !== target) {
                start = mid
                break
            // 左边元素也等于target的话，当前元素必不可能是左边界，继续往左找
            } else right = mid - 1
        }
    }
    left = 0, right = nums.length - 1
    // 找右边界
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] > target) {
            right = mid - 1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            // 找到target后判断一下右边相邻元素是否也是target，不是的话说明当前元素就是右边界，直接break
            if (nums[mid + 1] !== target) {
                end = mid
                break
            // 右边元素也等于target的话，当前元素必不可能是右边界，继续往右找
            } else left = mid + 1
        }
    }
    return [start, end]
}