// 回文链表
// https://leetcode-cn.com/problems/palindrome-linked-list/
function isPalindrome(head) {
    if (head === null || head.next === null) return true
    let fast = head, slow = head
    let pre = head, prepre = null
    while (fast !== null && fast.next !== null) {
        pre = slow // pre始终落后slow一个位置
        fast = fast.next.next
        slow = slow.next
        // 翻转
        pre.next = prepre
        prepre = pre
    }
    // 奇数个，slow往后走一步，即中间节点不需要比对
    if (fast !== null) {
        slow = slow.next
    }
    while (pre && slow) {
        if (pre.val !== slow.val) {
            return false
        }
        pre = pre.next
        slow = slow.next
    }
    return true
}

// 10.21
function isPalindrome(head) {
    if (head == null || head.next == null) return true
    let fast = slow = head
    let prepre = null, pre = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        pre.next = prepre
        prepre = pre
        pre = slow
    }
    if (fast != null) {
        slow = slow.next
    }
    while (prepre && slow) {
        if (prepre.val != slow.val) return false
        prepre = prepre.next
        slow = slow.next
    }
    return true
}