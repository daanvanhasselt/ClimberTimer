import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import TestReducer from './TestReducer'
import HangboardReducer from './HangboardReducer'

const RootReducer = combineReducers({
    TestReducer,
    HangboardReducer
})

const RootStore = createStore(
    RootReducer,            // main reducer
    {},                     // initial state
    composeWithDevTools()   // middleware
)

export {
    RootReducer,
    RootStore
}