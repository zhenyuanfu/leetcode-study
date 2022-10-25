// 最小覆盖子串：给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
// https://leetcode-cn.com/problems/minimum-window-substring/
// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"
function minWindow(s, t) {
    if (s === '' || t === '' || s.length < t.length) return ''
    let need = {}, needCount = t.length
    for (let i = 0; i < t.length; i++) {
        if (!need[t[i]]) {
            need[t[i]] = 1
        } else {
            need[t[i]]++
        }
    }
    let minLen = 0, minLeft = 0, left = 0
    for (let i = 0; i < s.length; i++) {
        if (need[s[i]] !== undefined) {
            need[s[i]]--
            if (need[s[i]] >= 0) needCount-- // need[s[i]]可以是负数，表示该字符多出来的数量，但needCount不可以是负数
        }
        if (needCount === 0) {
            while (left <= i) {
                if (need[s[left]] === 0) break
                if (need[s[left]]) {
                    need[s[left]]++
                }
                left++
            }
            const min = i - left + 1
            if (minLen === 0 || min < minLen) {
                minLen = min
                minLeft = left
            }
            need[s[left]]++
            needCount++
            left++
        }
    }
    return s.slice(minLeft, minLeft + minLen)
}
minWindow("ADOBECODEBANC", "ABC")

// 2022.10.22
function minWindow(s, t) {
    if (t.length > s.length) return ''
    let needCount = {}
    let i = 0, count = t.length
    while (i < t.length) {
        if (needCount[t[i]]) {
            needCount[t[i]]++
        } else {
            needCount[t[i]] = 1
        }
        i++
    }
    let minLeft = left = 0, minLen = 0, k = 0
    while (k < s.length) {
        let ch = s[k]
        if (needCount[ch] !== undefined) {
            needCount[ch]--
            if (needCount[ch] >= 0) count--
        }
        if (count == 0) {
            while (left < k) {
                if (needCount[s[left]] == 0) break
                if (needCount[s[left]] !== undefined) needCount[s[left]]++
                left++
            }
            if (minLen == 0 || k - left + 1 < minLen) {
                minLen = k - left + 1
                minLeft = left
            }
            needCount[s[left]]++
            left++
            count++
        }
        k++
    }
    return s.slice(minLeft, minLeft + minLen)
}