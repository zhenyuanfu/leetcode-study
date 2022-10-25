// 寻找链表中点
function findfCenter(head) {
    if (head === null || head.next === null) return head
    let fast = head
    let slow = head
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}