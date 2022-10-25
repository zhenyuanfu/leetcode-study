// 删除二叉搜索树中的节点
// https://leetcode-cn.com/problems/delete-node-in-a-bst/
// 用递归栈存储上下文
function deleteNode(root, key) {
    if (root === null) return root
    if (key < root.val) {
        root.left = deleteNode(root.left, key)
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key)
    } else {
        if (root.left == null) return root.right
        if (root.right == null) return root.left
        let node = root.right
        while (node.left) {
            node = node.left
        }
        node.left = root.left
        root = root.right
    }
    return root
}

// 10.24
function deleteNode(root, key) {
    if (root == null) return null
    if (key < root.val) {
        root.left = deleteNode(root.left, key)
        return root
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key)
        return root
    }
    if (root.left == null) return root.right
    if (root.right == null) return root.left
    let left = root.left, right = root.right
    while (right.left != null) {
        right = right.left
    }
    right.left = left
    return root.right
}