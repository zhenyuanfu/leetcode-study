// 98. 验证二叉搜索树(中序遍历是一个递增数组)
// https://leetcode.cn/problems/validate-binary-search-tree/
function isValidBST(root) {
    if (root == null) return true
    const inorderList = []
    inOrderTraverse(root, inorderList)
    console.log(inorderList)
    for (let i = 0; i < inorderList.length - 1; i++) {
        if (inorderList[i+1] <= inorderList[i]) return false
    }
    return true
}

function inOrderTraverse(root, inorderList) {
    if (root == null) return
    inOrderTraverse(root.left, inorderList)
    inorderList.push(root.val)
    inOrderTraverse(root.right, inorderList)
}

// 优化
let pre = Number.NEGATIVE_INFINITY
function isValidBST(root) {
    if (root == null) return true
    if (!isValidBST(root.left)) {
        return false
    }
    if (root.val <= pre) {
        return false
    }
    pre = root.val
    return isValidBST(root.right)
}

// 10.24
function isValidBST(root) {
    if (root == null) return true
    let inOrderRes = []
    inOrder(root, inOrderRes)
    for (let i = 1; i < inOrderRes.length; i++) {
        if (inOrderRes[i-1] >= inOrderRes[i]) return false
    }
    return true
}

function inOrder(root, inOrderRes) {
    if (root == null) return
    inOrder(root.left, inOrderRes)
    inOrderRes.push(root.val)
    inOrder(root.right, inOrderRes)
}