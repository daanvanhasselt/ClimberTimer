import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
                                // cancel button tapped
                                if(buttonIndex >= hangboardSelectionTitles.length - 1) return

                                // dispatch action
                                props.setHangboard(hangboardSelectionTitles[buttonIndex])
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

// get state through props
const mapStateToProps = (state) => ({
    hangboard: state.hangboard.hangboard
})

// set state through props
const mapDispatchToProps = (dispatch) => bindActionCreators({
    setHangboard
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HangboardScreen)