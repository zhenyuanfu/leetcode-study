// 两数之和
// https://leetcode-cn.com/problems/two-sum/
function twoSum(nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] !== undefined) {
            return [map[target - nums[i]], i]
        }
        map[nums[i]] = i
    }
    return []
}

// 两数之和 II - 输入有序数组
// https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
// https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/solution/yi-zhang-tu-gao-su-ni-on-de-shuang-zhi-zhen-jie-fa/
// 双指针
function twoSum(nums, target) { // nums是有序的
    let i = 0, j = nums.length - 1
    while (i < j) {
        if (nums[i] + nums[j] === target) return [i, j]
        if (nums[i] + nums[j] < target) {
            i++
        } else {
            j--
        }
    }
    return []
}

// 三数之和
// https://leetcode-cn.com/problems/3sum/
// 先排序，再遍历，把当前元素固定，用双指针找出所有解法
// continue去除重复答案

function threeSum(nums) {
    if (nums.length < 3) return []
    nums.sort((a, b) => (a-b))
    let res = []
    for (let k = 0; k < nums.length - 2; k++) {
        if (nums[k] > 0) break // 因为数组已升序处理
        if (k > 0 && nums[k] == nums[k-1]) continue // 去除重复解
        let i = k + 1, j = nums.length - 1
        while (i < j) {
            const sum = nums[k] + nums[i] + nums[j]
            if (sum < 0) {
                do i++
                while (i < j && nums[i] == nums[i-1])
            } else if (sum > 0) {
                do j--
                while (i < j && nums[j] == nums[j+1])
            } else {
                res.push([nums[k], nums[i], nums[j]])
                do i++
                while (i < j && nums[i] == nums[i-1])
                do j--
                while (i < j && nums[j] == nums[j+1])
            }
        }
    }
    return res
}
// threeSum([-1,0,1,2,-1,-4])