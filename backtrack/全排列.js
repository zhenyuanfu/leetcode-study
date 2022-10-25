// 全排列
// https://leetcode-cn.com/problems/permutations/

function permute(nums) {
    if (nums.length == 0) return []
    if (nums.length == 1) return [nums]
    let res = [], path = [], used = []
    dfs(res, path, used, nums)
    return res
}

function dfs(res, path, used, nums){
    if (path.length === nums.length) {
        res.push(path.slice())
        return
    }
    for (let i = 0; i < nums.length; i++) {
        if (!used[i]) {
            path.push(nums[i])
            used[i] = 1
            dfs(res, path, used, nums)
            path.pop()
            used[i] = 0
        }
    }
}