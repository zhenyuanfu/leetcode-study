// 复原 IP 地址
// https://leetcode-cn.com/problems/restore-ip-addresses/
function restoreIpAddresses(s) {
    if (s.length < 4 || s.length > 12) return []
    let res = [], path = []
    dfs(s, res, path)
    return res
}

function dfs(s, res, path) {
    if (path.length === 4) {
        if (s.length === 0) {
            res.push(path.join('.'))
        }
        return
    }
    let subLen = Math.min(s.length, 3)
    for (let i = 0; i < subLen; i++) {
        let subStr = s.slice(0, i + 1)
        if (parseInt(subStr) > 255) continue // 剪枝
        // 剪枝：如果subStr长度大于1，第一个字符不可以是0
        if (subStr.length > 1 && subStr.charAt(0) === '0') continue
        const restLen = s.length - i - 1, restPath = 4 - path.length - 1
        if (restLen < restPath || restLen > restPath * 3) continue // 如果剩余字符串长度不符合最小最大区间内，剪枝
        path.push(subStr)
        dfs(s.slice(i + 1), res, path)
        path.pop()
    }
}