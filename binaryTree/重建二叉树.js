// 重建二叉树
// https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/
// preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
function buildTree(preorder, inorder) {
    if (preorder.length === 0) return null
    if (preorder.length === 1) return new TreeNode(preorder[0])
    const head = new TreeNode(preorder[0])
    const lInorder = inorder.slice(0, inorder.indexOf(preorder[0]))
    head.left = buildTree(preorder.slice(1, lInorder.length + 1), lInorder)
    head.right = buildTree(preorder.slice(lInorder.length + 1), inorder.slice(inorder.indexOf(preorder[0]) + 1))
    return head
}

// 10.25
function buildTree(preorder, inorder) {
    if (preorder.length == 0) return null
    if (preorder.length == 1) return new TreeNode(preorder[0])
    const head = new TreeNode(preorder[0])
    let i = inorder.indexOf(preorder[0])
    let leftInorder = inorder.slice(0, i)
    let rightInorder = inorder.slice(i+1)
    let leftPreorder = preorder.slice(1, 1+i)
    let rightPreorder = preorder.slice(2+i)
    head.left = buildTree(leftPreorder, leftInorder)
    head.right = buildTree(rightPreorder, rightInorder)
    return head
}