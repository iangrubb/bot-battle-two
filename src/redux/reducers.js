
import { combineReducers } from 'redux'

const defaultState = {
    botQueue: [1, 2, 3, 4, 5],
    botStack: []
}

function handleBotQueue(state = defaultState.botQueue, action) {
    switch (action.type) {
        case "ENQUEUE":
            return [...state, action.bot]
        case "DEQUEUE":
            return state.length > 0 ? state.slice(1, state.length) : state
        default: 
            return state
    }
}

function handleBotStack(state = defaultState.botStack, action) {
    switch (action.type) {
        case "POP":
            return state.length > 0 ? state.slice(0, state.length - 1) : state
        case "PUSH":
            return [...state, action.bot]
        default:
            return state
    }
}

const rootReducer = combineReducers({
    botQueue: handleBotQueue,
    botStack: handleBotStack
})

export default rootReducer

