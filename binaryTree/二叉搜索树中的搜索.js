// 二叉搜索树中的搜索
// https://leetcode-cn.com/problems/search-in-a-binary-search-tree/
function searchBST(root, val) {
    if (root == null) return null
    while (root) {
        if (root.val === val) return root
        if (val < root.val) root = root.left
        else root = root.right
    }
    return null
}

// 10.24
function searchBST(root, val) {
    if (root == null) return null
    if (root.val == val) return root
    if (val < root.val) return searchBST(root.left, val)
    return searchBST(root.right, val)
}