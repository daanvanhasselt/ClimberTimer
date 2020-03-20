import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { createStore } from 'redux'

import NavigationStack from './components/NavigationStack'

const initialState = {}

const appState = (state = initialState, action) => {
  return state
}

const appStore = createStore(appState)

function App () {
  return (
    <ReduxProvider store={appStore}>
      <NavigationStack />
    </ReduxProvider>
  )
}
export default App