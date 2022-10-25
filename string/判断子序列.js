// 判断子序列
// https://leetcode-cn.com/problems/is-subsequence/
// 双指针分别指向s和t
// s = "abc", t = "ahbgdc"
function isSubsequence(s, t) {
    if (s.length > t.length) return false
    if (s.length === 0) return true
    let si = 0, ti = 0
    while (ti < t.length) {
        if (t[ti] === s[si]) {
            si++
        }
        if (si >= s.length) return true
        ti++
    }
    return false
}

// 2022.10.22
function isSubsequence(s, t) {
    let si = 0, ti = 0
    while (si < s.length && ti < t.length) {
        if (s[si] == t[ti]) {
            si++
            ti++
        } else {
            ti++
        }
    }
    return si == s.length
}