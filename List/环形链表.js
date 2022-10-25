// 环形链表
// https://leetcode-cn.com/problems/linked-list-cycle/
// 快慢指针，如果存在环，快指针一定会追上慢指针
function hasCycle(head) {
    if (head === null || head.next === null) return false
    let fast = head.next, slow = head
    while (fast && fast.next && fast !== slow) {
        fast = fast.next.next
        slow = slow.next
    }
    return fast === slow
}

// 
function hasCycle(head) {
    if (head == null || head.next == null) return false
    let fast = slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        // 赋值之后再判断
        if (fast == slow) return true
    }
    return fast
}