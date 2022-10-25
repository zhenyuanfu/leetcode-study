// 完全二叉树的节点个数
// https://leetcode-cn.com/problems/count-complete-tree-nodes/
function countNodes(root) {
    if (root == null) return 0
    let leftLevel = 1, left = root.left
    while (left) {
        leftLevel++
        left = left.left
    }
    let rightLevel = 1, right = root.right
    while (right) {
        rightLevel++
        right = right.right
    }
    if (leftLevel === rightLevel) return Math.pow(2, leftLevel) - 1 // 左右深度一样时，节点数等于2的n次方-1，n为深度
    return 1 + countNodes(root.left) + countNodes(root.right)
}

// 10.25
function countNodes(root) {
    if (root == null) return 0
    let leftLevel = 1, rightLevel = 1
    let left = root.left
    while (left != null) {
        leftLevel++
        left = left.left
    }
    let right = root.right
    while (right != null) {
        rightLevel++
        right = right.right
    }
    if (leftLevel == rightLevel) return Math.pow(2, leftLevel) - 1
    return 1 + countNodes(root.left) + countNodes(root.right)
}