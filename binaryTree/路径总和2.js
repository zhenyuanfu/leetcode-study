// 路径总和 II
// https://leetcode.cn/problems/path-sum-ii/
function pathSum(root, targetSum) {
    if (root == null) return []
    let res = [], path = []
    dfs(res, path, root, targetSum)
    return res
}

function dfs(res, path, root, targetSum) {
    if (root == null) return
    // 必须先入栈再判断
    targetSum -= root.val
    path.push(root.val)
    if (root.left == null && root.right == null && targetSum == 0) {
        res.push(path.slice())
        // return    // 注意：这里不能return了，因为函数开头已经return了
    }
    dfs(res, path, root.left, targetSum)
    dfs(res, path, root.right, targetSum)
    path.pop()
}

// 10.24
function pathSum(root, targetSum) {
    let res = [], path = []
    dfs(root, res, path, targetSum)
    return res
}

function dfs(root, res, path, targetSum) {
    if (root == null) {
        return
    }
    targetSum -= root.val
    path.push(root.val)
    if (root.left == null && root.right == null) {
        if (targetSum == 0) {
            res.push(path.slice())
        }
    }
    dfs(root.left, res, path, targetSum)
    dfs(root.right, res, path, targetSum)
    path.pop()
}