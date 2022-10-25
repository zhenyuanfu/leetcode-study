// 二叉树的最近公共祖先
// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
function lowestCommonAncestor(root, p, q) {
    if (root === null) return null
    if (root.val === p.val || root.val === q.val) return root
    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)
    if (left === null) return right
    if (right === null) return left
    return root
}

// 10.23
function lowestCommonAncestor(root, p, q) {
    if (root == null) return null
    if (root == p || root == q) return root
    let left = lowestCommonAncestor(root.left, p, q) 
    let right = lowestCommonAncestor(root.right, p, q)
    if (left == null) return right
    if (right == null) return left
    return root
}