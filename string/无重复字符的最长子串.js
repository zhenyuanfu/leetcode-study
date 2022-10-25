// 无重复字符的最长子串【飞书一面真题】
// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
// TODO: 用map优化，以空间换时间
function lengthOfLongestSubstring(s) {
    if (s === '') return 0
    let maxLen = 1, left = 0
    for (let i = 1; i < s.length; i++) {
        const pos = s.indexOf(s[i], left) // 要注意pos一定不可能为-1，因为至少可以找到s[i]自己
        left = pos === i ? left : pos + 1
        if (i - left + 1 > maxLen) {
            maxLen = i - left + 1
        }
    }
    return maxLen
}

// lengthOfLongestSubstring("abcabcbb")

// 2022.10.22
// s = "abcabcbb"
function lengthOfLongestSubstring(s) {
    let left = right = 0
    let max = 0
    while (right < s.length) {
        let i = s.indexOf(s[right], left)
        if (i < right) {
            left = i + 1
        }
        max = Math.max(max, right - left + 1)
        right++
    }
    return max
}

function lengthOfLongestSubstring(s) {
    let left = right = 0
    let max = 0
    let posMap = {}
    while (right < s.length) {
        if (posMap[s[right]] != undefined && posMap[s[right]] >= left) {
            left = posMap[s[right]] + 1
        }
        posMap[s[right]] = right
        max = Math.max(max, right - left + 1)
        right++
    }
    return max
}