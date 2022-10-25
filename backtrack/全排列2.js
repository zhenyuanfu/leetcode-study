// 全排列 II
// https://leetcode-cn.com/problems/permutations-ii/
// 总结：相对全排列，多了一个排序和剪枝
function permuteUnique(nums) {
    if (nums.length == 0) return [[]]
    // 排序是剪枝的前提
    nums.sort((a, b) => (a - b))
    let res = [], path = [], used = []
    dfs(nums, res, path, used)
    return res
}

function dfs(nums, res, path, used) {
    if (path.length == nums.length) {
        res.push(path.slice())
        return
    }
    for (let i = 0; i < nums.length; i++) {
        if (!used[i]) {
            // 前一个元素未使用过说明是它是回溯弹出来的
            if (i > 0 && nums[i] == nums[i-1] && !used[i-1]) continue
            path.push(nums[i])
            used[i] = 1
            dfs(nums, res, path, used)
            path.pop()
            used[i] = 0
        }
    }
}