// 二叉树的最小深度
// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
// 递归，效率低
function minDepth(root) {
    if (root == null) return 0
    if (root.left == null && root.right == null) return 1
    if (root.left == null) return 1 + minDepth(root.right)
    if (root.right == null) return 1 + minDepth(root.left)
    return 1 + Math.min(minDepth(root.left), minDepth(root.right))
}

// BFS
function minDepth(root) {
    if (root == null) return 0
    if (root.left == null && root.right == null) return 1
    const queue = [root]
    let depth = 0
    while (queue.length) {
        depth++
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const node = queue.pop()
            if (node.left == null && node.right == null) {
                return depth
            }
            if (node.left) queue.unshift(node.left)
            if (node.right) queue.unshift(node.right)
        }
    }
    return depth
}

// 10.23
function minDepth(root) {
    if (root == null) return 0
    let queue = [root], depth = 0
    while (queue.length) {
        depth++
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let node = queue.pop()
            if (node.left) queue.unshift(node.left)
            if (node.right) queue.unshift(node.right)
            if (node.left == null && node.right == null) return depth
        }
    }
    return depth
}