
function sleep(time) {
    const now = Date.now()
    while (Date.now() - now < time) {}
}

const works = [
    () => {
        console.log('A1开始')
        sleep(20)
        console.log('A1结束')
    },
    () => {
        console.log('A2开始')
        sleep(20)
        console.log('A2结束')
    },
    () => {
        console.log('A3开始')
        sleep(20)
        console.log('A3结束')
    },
    () => {
        console.log('A4开始')
        sleep(20)
        console.log('A4结束')
    },
]

function workLoop(deadline) {
    while (works.length && (deadline.timeRemaining() > 0 || deadline.didTimeout)) {
        works.shift()()
    }
    if (works.length) {
        requestIdleCallback(workLoop, {timeout: 1000})
    }
}
// requestIdleCallback的用法与rAF和setTimeout不太一样，需要自己写适当的调度逻辑
// 比如剩余时间足够的话，只需调一次requestIdleCallback，用while一次性做完所有任务
window.requestIdleCallback(workLoop, {timeout: 1000})

// requestIdleCallback polyfill
let activeFrameTime = 1000 / 60 // 16.6
let frameDeadline
let pendingCallback
let channel = new MessageChannel()
let timeRemaining = () => frameDeadline - performance.now()
channel.port2.onmessage = function(options) {
    let currentTime = performance.now()
    let didTimeout = frameDeadline <= currentTime // 这里的超时跟原生的超时似乎不一样
    if (didTimeout || timeRemaining() > 0) {  // didTimeout跟timeRemaining() > 0是互斥的？
        if (pendingCallback) pendingCallback({ didTimeout, timeRemaining })
    }
}
window.requestIdleCallback = (callback, options) => {
    requestAnimationFrame(rafTime => {
        console.log('rafTime', rafTime)
        frameDeadline = rafTime + activeFrameTime
        pendingCallback = callback
        channel.port1.postMessage(options)
    })
}