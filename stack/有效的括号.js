// 有效的括号
// https://leetcode-cn.com/problems/valid-parentheses/
function isValid(s) {
    // s.length为奇数直接false
    if (s.length <= 1 || s.length % 2 !== 0) return false
    const left = ['(', '[', '{']
    const right = [')', ']', '}']
    const list = []
    for (let i = 0; i < s.length; i++) {
        if (left.includes(s[i])) {
            list.push(s[i])
        } else {
            if (list.length == 0) return false
            const cur = list.pop()
            if (left.indexOf(cur) !== right.indexOf(s[i])) return false
        }
    }
    return list.length == 0
}

// 10.22
function isValid(s) {
    const match = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    const stack = []
    let i = 0
    while (i < s.length) {
        if (match[s[i]]) {
            stack.push(s[i])
        } else {
            if (stack.length == 0 || match[stack.pop()] != s[i]) return false
        }
        i++
    }
    return stack.length == 0
}