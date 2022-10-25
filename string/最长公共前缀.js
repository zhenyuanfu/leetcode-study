// 最长公共前缀
// https://leetcode-cn.com/problems/longest-common-prefix/
function longestCommonPrefix(strs) {
    let common = strs[0]
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(common) !== 0) {
            common = common.slice(0, -1)
        }
    }
    return common
}

// 10.22
// 关键在于公共前缀与任何一个字符串的indexOf都等于0，如果不等于，从后面一个一个地裁剪字符
function longestCommonPrefix(strs) {
    let common = strs[0], i = 1
    while (i < strs.length) {
        while (strs[i].indexOf(common) !== 0) {
            common = common.slice(0, -1)
        }
        i++
    }
    return common
}