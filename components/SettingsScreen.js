import React from 'react'
import { connect } from 'react-redux'
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

function TimerScreen(props) {
    return (
        <React.Fragment>
            <Header title="Settings" backButton={true} navigation={props.navigation} />
            <View style={styles.mainContent}>
                <Text>Settings screen</Text>
                <Text>{props.hangboard}</Text>
            </View>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    hangboard: state.hangboard.hangboard
})

export default connect(mapStateToProps)(TimerScreen)
