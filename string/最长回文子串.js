// 最长回文子串：给你一个字符串 s，找到 s 中最长的回文子串。
// https://leetcode-cn.com/problems/longest-palindromic-substring/
// "cbbd"
function longestPalindrome(s) {
    if (s.length <= 1) return s
    let maxLen = 1, maxLeft = 0
    for (let i = 0; i < s.length; i++) {
        const odd = centerSpread(s, i, i)
        const even = centerSpread(s, i, i + 1)
        const max = odd[1] > even[1] ? odd : even
        if (max[1] > maxLen) {
            [maxLeft, maxLen] = max
        }
    }
    return s.slice(maxLeft, maxLeft + maxLen)
}

function centerSpread(s, left, right) {
    while (left >= 0 && right < s.length) {
        if (s[left] === s[right]) {
            left--
            right++
        } else {
            break
        }
    }
    return [left + 1, right - left - 1]
}
// const res = longestPalindrome('cbbd')

// 10.22
function longestPalindrome(s) {
    if (s.length <= 1) return s
    let i = 0, maxLeft = 0, maxLen = 1
    while (i < s.length) {
        let odd = centerSpread(s, i, i)
        let even = centerSpread(s, i, i + 1)
        let res = odd[1] > even[1] ? odd : even
        if (res[1] > maxLen) {
            maxLeft = res[0]
            maxLen = res[1]
        }
    }
    i++
    return s.slice(maxLeft, maxLeft + maxLen)
}

function centerSpread(s, left, right) {
    while (left >= 0 && right < s.length) {
        if (s[left] != s[right]) break
        left--
        right++
    }
    return [left + 1, right - 1 -left]
}