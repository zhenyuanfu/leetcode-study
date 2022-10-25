// 括号生成
// https://leetcode-cn.com/problems/generate-parentheses/

function generateParenthesis(n) {
    if (n == 1) return ['()']
    let res = []
    dfs(n, n, res, '')
    return res
}

function dfs(left, right, res, path) {
    if (left == 0 && right == 0) {
        res.push(path)
        return
    }

    if (left > right) return

    if (left > 0) {
        dfs(left - 1, right, res, path + '(')
    }

    if (right > 0) {
        dfs(left, right - 1, res, path + ')')
    }
}