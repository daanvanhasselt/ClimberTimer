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