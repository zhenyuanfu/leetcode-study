// 19. 删除链表的倒数第 N 个结点
// https://leetcode.cn/problems/remove-nth-node-from-end-of-list/
function removeNthFromEnd(head, n) {
    if (head == null) return head
    let fast = slow = head
    while (n--) {
        fast = fast.next
        if (fast == null) break
    }
    // 说明n大于链表长度，直接删除头节点
    if (fast == null) {
        return head.next
    }
    while (fast.next != null) {
        fast = fast.next
        slow = slow.next
    }
    // 注意，双指针找到的slow是倒数第n+1个节点
    if (slow.next) {
        slow.next = slow.next.next
    }
    return head
}

function removeNthFromEnd(head, n) {
    if (head == null) return null
    let fast = slow = head
    while (n--) {
        if (fast.next == null) break
        fast = fast.next
    }
    if (n >= 0) return head.next
    while (fast.next != null) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return head
}