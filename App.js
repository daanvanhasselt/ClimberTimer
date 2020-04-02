import React, { useState, useEffect } from 'react'

import { Provider as ReduxProvider } from 'react-redux'
import { RootStore } from './state/Root'

import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { Root } from 'native-base'

import NavigationStack from './components/NavigationStack'

function App () {
  const [isReady, setIsReady] = useState(false)

  // load fonts
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      })
      setIsReady(true) 
    }

    loadFonts()
  }, [])

  if(!isReady) {
    return <AppLoading />
  }

  return (
    <Root>
      <ReduxProvider store={RootStore}>
        <NavigationStack />
      </ReduxProvider>
    </Root>
  )
}
export default App