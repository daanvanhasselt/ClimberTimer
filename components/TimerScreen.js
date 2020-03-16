import React from 'react'
import { View, Text, StyleSheet, ShadowPropTypesIOS } from 'react-native'
import Header from './Header'

const styles = StyleSheet.create({
    mainContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  })

function TimerScreen(props) {
    return (
        <React.Fragment>
            <Header title="ClimberTimer" settingsButton={true} navigation={props.navigation} />
            <View style={styles.mainContent}>
                <Text>Timer screen</Text>
            </View>
        </React.Fragment>
    )
}

export default TimerScreen