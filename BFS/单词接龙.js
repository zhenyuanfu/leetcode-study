// 单词接龙[困难][双向BFS][][哈希表]
// https://leetcode-cn.com/problems/word-ladder/
// beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
function ladderLength(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0
    const wordMap = {}
    wordList.forEach(word => wordMap[word] = 1)
    const queue = [beginWord]
    wordMap[beginWord] = 0
    let step = 1
    while (queue.length) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const word = queue.pop()
            if (word === endWord) {
                return step
            }
            enquequeSiblings(word, wordMap, queue)
        }
        step++
    }
    return 0
}

// 字符串和Unicode码互相转换：str.charCodeAt(), String.fromCharCode(code)
function enquequeSiblings(word, wordMap, queue) {
    for (let i = 0; i < word.length; i++) {
        const char = word[i]
        for (let j = 97; j <= 122; j++) {
            const curChar = String.fromCharCode(j)
            if (curChar === char) continue
            const newWord = word.slice(0, i) + curChar + word.slice(i + 1)
            if (wordMap[newWord]) {
                queue.unshift(newWord)
                wordMap[newWord] = 0
            }
        }
    }
}

// Set版本，比map快很多，不知道为啥。。
function ladderLength(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0
    const wordSet = new Set(wordList)
    const queue = [beginWord]
    wordSet.delete(beginWord)
    let step = 1
    while (queue.length) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const word = queue.pop()
            if (word === endWord) {
                return step
            }
            enquequeSiblings(word, wordSet, queue)
        }
        step++
    }
    return 0
}

// 字符串和Unicode码互相转换：str.charCodeAt(), String.fromCharCode(code)
function enquequeSiblings(word, wordSet, queue) {
    for (let i = 0; i < word.length; i++) {
        const char = word[i]
        for (let j = 97; j <= 122; j++) {
            const curChar = String.fromCharCode(j)
            if (curChar === char) continue
            const newWord = word.slice(0, i) + curChar + word.slice(i + 1)
            if (wordSet.has(newWord)) {
                queue.unshift(newWord)
                wordSet.delete(newWord)
            }
        }
    }
}