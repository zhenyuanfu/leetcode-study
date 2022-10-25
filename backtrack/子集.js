// 子集
// https://leetcode-cn.com/problems/subsets/
// 用例：[1,2,3]
function subsets(nums) {
    if (nums.length === 0) return [[]]
    let res = [], track = []
    dfs(nums, 0, res, track)
    return res
}

function dfs(nums, i, res, track) {
    if (Array.isArray(track)) {
        res.push(track.slice())
    }
    if (i === nums.length) return
    // 第一个for循环得到[1],[2],[3]
    // 第二个for循环基于[1]，故得到[1,2],[1,3]，以此类推
    for (; i < nums.length; i++) {
        track.push(nums[i])
        dfs(nums, i + 1, res, track)
        track.pop()
    }
}