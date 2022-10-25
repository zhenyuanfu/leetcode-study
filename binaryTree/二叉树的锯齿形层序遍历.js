// 二叉树的锯齿形层序遍历：即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行
// https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/
// https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/solution/bfshe-dfsliang-chong-jie-jue-fang-shi-by-184y/
// 题解里还有一种DFS的解法，主要思路是在DFS过程中传入当前的level，根据level找到对应的list，并且根据level的奇偶数特征判断进list的方向
function zigzagLevelOrder(root) {
    if (root == null) return []
    let res = [], queue = [], toRight = true 
    queue.unshift(root)
    while (queue.length) {
        let size = queue.length
        let curList = []
        while (size > 0) {
            const cur = queue.pop()
            if (cur.left) queue.unshift(cur.left)
            if (cur.right) queue.unshift(cur.right)
            if (toRight) {
                curList.push(cur.val)
            } else {
                curList.unshift(cur.val)
            }
            size--
        }
        res.push(curList)
        toRight = !toRight
    }
    return res
}

// 10.23
function zigzagLevelOrder(root) {
    if (root == null) return []
    let res = [], queue = [root], left2Right = false
    while (queue.length) {
        let len = queue.length
        let temp = []
        for (let i = 0; i < len; i++) {
            let node = queue.pop()
            if (node.left) queue.unshift(node.left)
            if (node.right) queue.unshift(node.right)
            if (left2Right) {
                temp.unshift(node.val)
            } else {
                temp.push(node.val)
            }
        }
        left2Right = !left2Right
        res.push(temp)
    }
    return res
}