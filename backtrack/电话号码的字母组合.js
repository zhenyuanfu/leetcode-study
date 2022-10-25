// 17. 电话号码的字母组合
// https://leetcode.cn/problems/letter-combinations-of-a-phone-number/
function letterCombinations(digits) {
    if (digits == '') return []
    let digitMap = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }
    let letters = digits.split('').map(digit => digitMap[digit])
    let res = []
    dfs(res, '', letters, 0)
    return res
}

function dfs(res, path, letters, i) {
    if (path.length == letters.length) {
        res.push(path)
        return
    }
    if (i > letters.length - 1) return
    for (let j = 0; j < letters[i].length; j++) {
        dfs(res, path + letters[i][j], letters, i + 1)
    }
}