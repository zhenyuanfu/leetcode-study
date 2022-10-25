// 142. 环形链表 II
// https://leetcode.cn/problems/linked-list-cycle-ii/
function detectCycle(head) {
    if (head === null || head.next === null) return false
    let fast = slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast == slow) break
    }
    if (fast != slow) return null
    fast = head
    while (fast != slow) {
        fast = fast.next
        slow = slow.next
    }
    return fast
}
