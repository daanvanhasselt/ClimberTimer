import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import TestReducer from './Test'
import HangboardReducer from './Hangboard'

const RootReducer = combineReducers({
    test: TestReducer,
    hangboard: HangboardReducer
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