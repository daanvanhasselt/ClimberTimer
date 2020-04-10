import React, { useState, useEffect } from 'react'

import { Provider as ReduxProvider } from 'react-redux'
import { rootStore, persistor } from './state/Root'
import { PersistGate } from 'redux-persist/integration/react'

import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { Root } from 'native-base'

import { ScreenOrientation } from 'expo'

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

      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
      setIsReady(true) 
    }

    loadFonts()
  }, [])

  if(!isReady) {
    return <AppLoading />
  }

  return (
    <Root>
      <ReduxProvider store={rootStore}>
        <PersistGate loading={<AppLoading />} persistor={persistor}>
          <NavigationStack />
        </PersistGate>
      </ReduxProvider>
    </Root>
  )
}
export default App