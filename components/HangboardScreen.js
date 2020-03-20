import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import { ActionSheet, Text, Button } from 'native-base'
import Header from './Header'
import { Hangboards } from '../state/Hangboard'
import { setHangboard } from '../state/Actions'

const styles = StyleSheet.create({
    mainContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
})

const hangboardSelectionTitles = []
for(const board in Hangboards) {
    hangboardSelectionTitles.push(Hangboards[board])
}
hangboardSelectionTitles.push("Cancel")

function HangboardScreen(props) {
    return (
        <React.Fragment>
            <Header title="Hangboard Training" backButton={true} navigation={props.navigation} />
            <View style={styles.mainContent}>
                <Text>Hangboarding</Text>
                <Button 
                    onPress={() => {
                        ActionSheet.show(
                            {
                                title: "Select your hangboard",
                                options: hangboardSelectionTitles,
                                cancelButtonIndex: hangboardSelectionTitles.length - 1
                            },
                            (buttonIndex) => {
                                // cancel
                                if(buttonIndex >= hangboardSelectionTitles.length - 1) return

                                // action
                                const action = setHangboard(hangboardSelectionTitles[buttonIndex])

                                // we can dispatch because we are connected with react-redux
                                props.dispatch(action)
                            }
                        )
                }}>
                    <Text>{props.hangboard}</Text>
                </Button>
                <Text>You have selected the {props.hangboard}</Text>
            </View>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    hangboard: state.hangboard.hangboard
})

export default connect(mapStateToProps)(HangboardScreen)