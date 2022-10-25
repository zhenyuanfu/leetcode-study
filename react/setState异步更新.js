class Update {
    constructor(payload, nextUpdate) {
        this.payload = payload
        this.nextUpdate = nextUpdate
    }
}

class UpdateQueue {
    constructor() {
        this.baseState = null
        this.firstUpdate = null
        this.lastUpdate = null
    }
    enqueueUpdate(update) {
        if (!this.firstUpdate) {
            this.firstUpdate = this.lastUpdate = update
        } else {
            this.lastUpdate.nextUpdate = update
            this.lastUpdate = update
        }
    }
    forceUpdate() {
        let currentState = this.baseState || {}
        let currentUpdate = this.firstUpdate
        while (currentUpdate) {
            const nextState = typeof currentUpdate.payload === 'function' ? currentUpdate.payload(currentUpdate) : currentUpdate.payload
            currentState = {...currentState, ...nextState}
        }
        this.firstUpdate = this.lastUpdate = null
        return currentState
    }
}

const queue = new UpdateQueue()

queue.enqueueUpdate(new Update({name: 'jack', age: 20}))
queue.enqueueUpdate(new Update(state => ({ age: state.age + 1 })))
// payload可以是函数
// this.setState = (payload) => {
//     queue.enqueueUpdate(new Update(payload))
// }
queue.forceUpdate()