import React from 'react'

import { Provider as ReduxProvider } from 'react-redux'
import { RootStore } from './state/RootReducer'

import NavigationStack from './components/NavigationStack'

function App () {
  return (
    <ReduxProvider store={RootStore}>
      <NavigationStack />
    </ReduxProvider>
  )
}
export default App

console.log(RootStore.getState())