function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let i = 1;
let root = new TreeNode(i++);
root.left = new TreeNode(i++);
root.right = new TreeNode(i++);

root.left.left = new TreeNode(i++);
root.left.right = new TreeNode(i++);
root.right.left = new TreeNode(i++);
root.right.right = new TreeNode(i++);

// 广度优先遍历
function levelTraverse(root) {
    if (!root) return;
    const queue = [root];
    while (queue.length) {
        let curNode = queue.pop();
        console.log(curNode.val);
        if (curNode.left) {
            queue.unshift(curNode.left)
        }
        if (curNode.right) {
            queue.unshift(curNode.right)
        }
    }
}
// levelTraverse(root)

function preOrderTraverse(root) {
    if (!root) return;
    console.log(root.val);
    preOrderTraverse(root.left);
    preOrderTraverse(root.right);
}

function preOrderTraverseCycle(root) { // 循环版本
    const stack = [];
    let curNode = root;
    while (curNode !== null || stack.length) {
        if (curNode) {
            console.log(curNode.val);
            stack.push(curNode)
            curNode = curNode.left;
        } else {
            curNode = stack.pop().right
        }
    }
}

// preOrderTraverse(root)
// preOrderTraverseCycle(root)

function inOrderTraverse(root) {
    if(!root) return;
    inOrderTraverse(root.left);
    console.log(root.val);
    inOrderTraverse(root.right);
}

function inOrderTraverseCycle(root) {
    const stack = [];
    let curNode = root;
    while (curNode !== null || stack.length) {
        if (curNode) {
            stack.push(curNode)
            curNode = curNode.left;
        } else {
            let node = stack.pop()
            console.log(node.val);
            curNode = node.right
        }
    }
}

// inOrderTraverse(root)
// inOrderTraverseCycle(root)

function postOrderTraverse(root) {
    if (!root) return;
    postOrderTraverse(root.left);
    postOrderTraverse(root.right);
    console.log(root.val);
}

function postOrderTraverseCycle(root) {
    const stack = [];
    let curNode = root;
    while (curNode !== null || stack.length) {
        if (curNode) {
            stack.push(curNode)
            curNode = curNode.left;
        } else {
            let node = stack.pop()
            console.log(node.val);
            curNode = node.right
        }
    }
}

// postOrderTraverse(root)