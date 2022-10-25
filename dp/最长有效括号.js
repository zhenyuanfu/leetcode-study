// 最长有效括号
// https://leetcode-cn.com/problems/longest-valid-parentheses/
// [一维dp或栈]https://leetcode-cn.com/problems/longest-valid-parentheses/solution/shou-hua-tu-jie-zhan-de-xiang-xi-si-lu-by-hyj8/
// s = ")()())"
function longestValidParentheses(s) {
    if (s.length < 2) return 0
    let stack = [-1], max = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(i)
        } else {
            stack.pop()
            if (stack.length == 0) {
                stack.push(i)
            } else {
                max = Math.max(max, i - stack[stack.length - 1])
            }
        }
    }
    return max
}

// 10.23
function longestValidParentheses(s) {
    let stack = [-1], max = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(i)
        } else {
            // 栈底元素是括号匹配的前一个位置，用来计算最长匹配长度的
            // 所以如果栈只剩一个元素，则不走匹配逻辑，而应替换栈底元素
            if (stack.length == 1) {
                stack[0] = i
            } else {
                stack.pop()
                max = Math.max(max, i - stack[stack.length-1])
            }
        }
    }
    return max
}

function longestValidParentheses(s) {
    let dp = [0]
    let res = 0
    for (let i = 1; i < s.length; i++) {
        if (s[i] == '(') {
            dp[i] = 0
        } else {
            if (s[i-1] == '(') {
                dp[i] = (i - 2 >= 0 ? dp[i-2] : 0) + 2
            } else {
                let index = i - dp[i-1] - 1
                if (index >= 0 && s[index] == '(') {
                    dp[i] = dp[i-1] + 2 + (index > 1 ? dp[index - 1] : 0)
                } else {
                    dp[i] = 0
                }
            }
        }
        res = Math.max(res, dp[i])
    }
    return res
}