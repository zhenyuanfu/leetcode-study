// 2. 两数相加
// https://leetcode.cn/problems/add-two-numbers/
function addTwoNumbers(l1, l2) {
    let pre = cur = new ListNode()
    let carry = 0
    while (l1 != null || l2 != null) {
        let x = l1 == null ? 0 : l1.val
        let y = l2 == null ? 0 : l2.val
        let sum = x + y + carry
        carry = Math.floor(sum / 10)
        sum = sum % 10
        cur.next = new ListNode(sum)
        cur = cur.next
        if (l1 != null) {
            l1 = l1.next
        }
        if (l2 != null) {
            l2 = l2.next
        }
    }
    if (carry > 0) {
        cur.next = new ListNode(carry)
    }
    return pre.next
}