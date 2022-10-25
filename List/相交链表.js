// 相交链表
// https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
function getIntersectionNode(headA, headB) {
    let nextA = headA, nextB = headB
    // 无论是否相交都必定会出现nextA == nextB，不相交时是null
    while (nextA !== nextB) {
        nextA = nextA ? nextA.next : headB
        nextB = nextB ? nextB.next : headA
    }
    return nextA
}

// 10.21
function getIntersectionNode(headA, headB) {
    let nextA = headA, nextB = headB
    while (nextA != nextB) {
        nextA = nextA ? nextA.next : headB
        nextB = nextB ? nextB.next : headA
    }
    return nextA
}