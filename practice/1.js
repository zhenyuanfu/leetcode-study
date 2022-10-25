/** * 传入两个目录字符串(有中间目录重叠部分)，要求去除重复字符串，返回无重复目录的正常路径 */ 
// function getAbsolutePath(base, uri) 
// { // todo } console.log(getAbsolutePath('D:\\lib\\nodejs\\node_modules\\http-server', 'node_modules\\http-server\\lib\\http-server.js')); // 输出 D:\\lib\\nodejs\\node_modules\\http-server\\lib\\http-server.js
function getAbsolutePath(base, url) {
    const laststr = base.slice(base.lastIndexOf('\\') + 1)
    const idx = url.indexOf(laststr)
    return base + "\\" + url.slice(idx + laststr.length)
}

// 前序遍历：根左右
function preorder(root) {
    let p = root, stack = []
    while (p || stack.length) {
        while (p) {
            console.log(p)
            stack.push(p.right) // 注意：进栈的是右子树
            p = p.left
        }
        p = stack.pop()
    }
}

// 后序遍历：左右根，参考前序遍历先按照根右左遍历，再反序输出
function postOrder(root) {
    let p = root, stack = [], res = []
    while (p || stack.length) {
        while (p) {
            res.push(p.val)
            stack.push(p.left)
            p = p.right
        }
        p = stack.pop()
    }
    return res.reverse()
}

// 中序遍历：左根右
function inorder(root) {
    let p = root, stack = [], res = []
    while (p || stack.length) {
        while (p) {
            stack.push(p)
            p = p.left
        }
        p = stack.pop()
        res.push(p.val)
        p = p.right
    }
    return res
}