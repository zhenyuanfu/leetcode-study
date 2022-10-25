const { useReducer } = require("react");

let nextUnitOfWork = null
function workLoop() {
    while(nextUnitOfWork && !shouldYield) {
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    }
    if (!nextUnitOfWork) {
        console.log('render阶段完成');
    }
    requestIdleCallback(workLoop)
}

function performUnitOfWork(fiber) {
    beginWork(fiber) // 创建自己的fiber实例并创建所有孩子的空fiber节点
    if (fiber.child) {
        return fiber.child
    }
    while (fiber) {
        completeUnitOfWork(fiber) // 收集fiber的effect list
        if (fiber.sibling) {
            return fiber.sibling
        }
        fiber = fiber.return
    }
}

function beginWork(fiber) {}

function completeUnitOfWork(fiber) {}

let workInProgress = null
function scheduleRoot(rootFiber) {
    workInProgress = rootFiber
    nextUnitOfWork = rootFiber
}
