import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { AsyncStorage } from 'react-native'
import { persistStore, persistReducer } from 'redux-persist'

import HangboardReducer from './Hangboard'

// Redux Persist Config
const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  }

const rootReducer = combineReducers({
    hangboard: HangboardReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

//const middleware = [logger, thunk]
const middleware = []

const rootStore = createStore(
    persistedReducer,       // main reducer
    {},                     // initial state
    composeWithDevTools(applyMiddleware(...middleware)) // middleware
)

const persistor = persistStore(rootStore)

export {
    rootReducer,
    rootStore,
    persistor
}