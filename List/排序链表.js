// 排序链表
// https://leetcode-cn.com/problems/sort-list/
function sortList(head) {
    if (head === null || head.next === null) return head
    const mid = findfCenter(head)
    let right = mid.next
    mid.next = null
    return merge(sortList(head), sortList(right))
}

function merge(a, b) {
    let head = new ListNode()
    let cur = head
    while (a && b) {
        if (a.val <= b.val) {
            cur.next = a
            a = a.next
        } else {
            cur.next = b
            b = b.next
        }
        cur = cur.next
    }
    if (a) {
        cur.next = a
    }
    if (b) {
        cur.next = b
    }
    return head.next
}

function findfCenter(head) {
    if (head === null || head.next === null) return head
    let fast = head
    let slow = head
    let pre = null
    while (fast !== null && fast.next !== null) {
        pre = slow
        fast = fast.next.next
        slow = slow.next
    }
    if (fast === null) {
        slow = pre
    }
    return slow
}