// https://leetcode-cn.com/problems/reverse-linked-list/
function reverseList(head) {
    if (head === null || head.next === null) return head
    const tail = reverseList(head.next)
    head.next.next = head
    head.next = null
    return tail
}

// 递归
// 注意递归结束时返回的是tail，而且tail要一级级返回到最外层，所以反转指针时不能用tail
function reverseList(head) {
    if (head == null || head.next == null) return head
    const tail = reverseList(head.next)
    head.next.next = head
    head.next = null
    return tail
}

// 循环
// 注意翻转之后head节点的next是null，避免出现环状链表
function reverseList(head) {
    if (head == null || head.next == null) return head
    let pre = null, cur = head
    while (cur) {
        const nextTemp = cur.next
        cur.next = pre
        pre = cur
        cur = nextTemp
    }
    return pre
}