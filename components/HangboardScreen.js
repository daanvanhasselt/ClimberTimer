import React from 'react'
import { createStore } from 'redux'
import { View, Text, StyleSheet } from 'react-native'
import Header from './Header'

const styles = StyleSheet.create({
    mainContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  })

function HangboardScreen(props) {
    return (
        <React.Fragment>
            <Header title="Hangboard Training" backButton={true} navigation={props.navigation} />
            <View style={styles.mainContent}>
                <Text>Hangboarding</Text>
            </View>
        </React.Fragment>
    )
}

export default HangboardScreen

const Hangboards = {
    BeastMaker1000: 'beastmaker-1000',
    BeastMaker2000: 'beastmaker-2000'
}

const initialState = {
    hangboard: Hangboards.BeastMaker1000
}

const hangboardState = (state = initialState, action) => {
    if(action.type === 'SET_HANGBOARD_TYPE') {
        return {
            ...state,
            hangboard: action.hangboard
        }
    }
    return state
}

const hangboardAction = {
    type: 'SET_HANGBOARD_TYPE',
    hangboard: Hangboards.BeastMaker2000
}

const store = createStore(hangboardState)
console.log(store.getState())
store.dispatch(hangboardAction)
console.log(store.getState())