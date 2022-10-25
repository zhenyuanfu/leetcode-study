// 剑指 Offer 34. 二叉树中和为某一值的路径
// https://leetcode.cn/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/
function pathSum(root, target) {
    if (root == null) return []
    let res = [], path = []
    dfs(res, path, root, target)
    return res
}

function dfs(res, path, root, target) {
    if (root == null) return
    // 先把当前节点入栈，再判断是否有效解
    path.push(root.val)
    target -= root.val
    if (root.left == null && root.right == null && target == 0) {
        res.push(path.slice()) // 得到有效解，进入res。注意：这里不能return，因为在函数开头已经return了
    }
    dfs(res, path, root.left, target)
    dfs(res, path, root.right, target)
    path.pop()
}