import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Dimensions } from 'react-native'
import { ActionSheet, Button, Text } from 'native-base'

import { setHangboard } from '../state/Actions'
import HangboardView from './HangboardView'

function HangboardSelector(props) {
    // hangboard names (dont display the custom hangboard)
    const hangboardSelectionTitles = props.hangboards.filter((board) => !board.custom).map((board) => board.name)
    hangboardSelectionTitles.push("Cancel")

    // show the selector
    const showSelector = (props) => {
        if(props.disableHangboardSwitch) return
        
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
                props.setHangboard(props.hangboards[buttonIndex].id)
            }
        )
    }

    return (
        <React.Fragment>
            <Button full
                onPress={() => showSelector(props)}>
                <Text>{props.selectedHangboard.name}</Text>
            </Button>
            <HangboardView
                width={Dimensions.get('window').width}
                onPress={() => showSelector(props)}
                hangboard={props.selectedHangboard}
                selectedHolds={props.selectedHolds}
                showHolds={props.showHolds}
                showNonSelectedHolds={props.showNonSelectedHolds} />
        </React.Fragment>
    )
}

// get state through props
const mapStateToProps = (state) => {
    return ({
        hangboards: state.hangboard.hangboards,
        selectedHangboard: state.hangboard.hangboards[state.hangboard.selectedHangboard]
    }) 
}

// set state through props
const mapDispatchToProps = (dispatch) => bindActionCreators({
    setHangboard
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HangboardSelector)