import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Dimensions } from 'react-native'
import { ActionSheet, Text, Button } from 'native-base'
import Image from 'react-native-scalable-image'

import Hangboards, { Details as HangboardDetails } from '../model/Hangboards'
import { setHangboard } from '../state/Actions'

// hangboard selection actionsheet data
const hangboardSelectionTitles = []
for(const board in Hangboards) {
    hangboardSelectionTitles.push(Hangboards[board])
}
hangboardSelectionTitles.push("Cancel")

// show the selector
const showSelector = (props) => {
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
}

function HangboardSelector(props) {
    return (
        <React.Fragment>
            <Button full
                onPress={() => showSelector(props)}>
                <Text>{props.hangboard}</Text>
            </Button>
            <Image 
                width={Dimensions.get('window').width} 
                source={HangboardDetails[props.hangboard].img}
                onPress={() => showSelector(props)}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HangboardSelector)