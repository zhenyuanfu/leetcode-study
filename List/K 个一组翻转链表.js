// K 个一组翻转链表
// https://leetcode-cn.com/problems/reverse-nodes-in-k-group/


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function reverseKGroup(head, k) {
    if (head === null || head.next === null || k <= 1) return head
    let temp = new ListNode()
    temp.next = head
    let pre = temp, end = null, cur = head
    while (cur) {
        let i = k - 1
        while (i > 0 && cur) {
            cur = cur.next
            i--
        }
        if (cur) {
            end = cur.next
            cur.next = null // 断开k个节点
            const start = reverse(pre.next)
            pre.next.next = end
            const preTemp = pre.next
            pre.next = start
            pre = preTemp
            cur = end
        }
    }
    return temp.next
}

function reverse(head) {
    if (head === null || head.next === null) return head
    let pre = null, cur = head
    while (cur) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}

let i = 2
let head = new ListNode(1)
let cur = head
while (i < 6) {
    cur.next = new ListNode(i)
    cur = cur.next
    i++
}


function print(head) {
    while (head) {
        console.log(head.val)
        head = head.next
    }
}

reverseKGroup(head, 2)

function reverseKGroup(head, k) {
    if (head == null || head.next == null || k < 2) return head
    let fakeHead = pre = new ListNode()
    let cur = pre.next = head
    while (cur) {
        let i = k
        while (i > 1) {
            if (cur == null) break
            cur = cur.next
            i--
        }
        if (cur == null) break
        let next = cur.next
        cur.next = null
        let temp = pre.next
        pre.next = reverse(pre.next)
        temp.next = next
        pre = temp
        cur = next
    }
    return fakeHead.next
}
function reverse(head) {
    if (head === null || head.next === null) return head
    let pre = null, cur = head
    while (cur) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}
