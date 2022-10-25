// 路径总和
// https://leetcode.cn/problems/path-sum/
function hasPathSum(root, targetSum) {
    if (root == null) return false
    if (root.left == null && root.right == null) {
        return targetSum == root.val
    }
    if (hasPathSum(root.left, targetSum - root.val)) {
        return true
    }
    return hasPathSum(root.right, targetSum - root.val)
}

// 10.24
function hasPathSum(root, targetSum) {
    if (root == null) return false
    targetSum -= root.val
    if (root.left == null && root.right == null) return targetSum == 0
    let left = hasPathSum(root.left, targetSum)
    if (left) return true
    return hasPathSum(root.right, targetSum)
}