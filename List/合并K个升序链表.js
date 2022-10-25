// 合并K个升序链表
// https://leetcode-cn.com/problems/merge-k-sorted-lists/
function mergeKLists(lists) {
    if (lists.length === 0) return null
    if (lists.length === 1) return lists[0]
    const mid = Math.floor(lists.length / 2)
    const left = lists.slice(0, mid)
    const right = lists.slice(mid)
    return merge(mergeKLists(left), mergeKLists(right))
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


// 2022.10.18
function mergeKLists(lists) {
    if (lists.length == 0) return null
    if (lists.length == 1) return lists[0]
    const mid = Math.floor(lists.length / 2)
    return merge(mergeKLists(lists.slice(0, mid)), mergeKLists(lists.slice(mid)))
}

// 注意连接链表时，一定要用xx.next = xxx的方式，不要单独把next用变量取出来，如 next = xxx
function merge(a, b) {
    if (a == null) return b
    if (b == null) return a
    let head = cur = new ListNode()
    while (a != null && b != null) {
        if (a.val <= b.val) {
            cur.next = a
            cur = a
            a = a.next
        } else {
            cur.next = b
            cur = b
            b = b.next
        }
    }
    if (a == null) {
        cur.next = b
    }
    if (b == null) {
        cur.next = a
    }
    return head.next
}