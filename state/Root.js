import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import HangboardReducer from './Hangboard'

const RootReducer = combineReducers({
    hangboard: HangboardReducer
})

//const middleware = [logger, thunk]
const middleware = []

const RootStore = createStore(
    RootReducer,            // main reducer
    {},                     // initial state
    composeWithDevTools(applyMiddleware(...middleware)) // middleware
)

export {
    RootReducer,
    RootStore
}