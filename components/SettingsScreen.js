import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ScrollView, View, StyleSheet } from 'react-native'
import { List, ListItem, Text } from 'native-base'
import Header from './Header'
import HangboardSelector from './HangboardSelector'

import { toggleHoldSelection, clearHoldSelection, setHoldSelection } from '../state/Actions'

import Svg, { Circle } from 'react-native-svg'

const styles = StyleSheet.create({
    mainContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
})

// single hold list item
function Item({ hold, onPress, selected }) {
    return (
        <ListItem onPress={onPress}>
            <Text>{(selected ? "x   " : "     ") + hold.name}</Text>
        </ListItem>
    )
}

function SettingsScreen(props) {
    return (
        <Svg
            width="100"
            height="100"
            viewBox="0 0 100 100" // Has to be the same of the original svg file
            >
            <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" />
        </Svg>
    )

    const holds = props.hangboard.holds || []
    const items = holds.map((hold, i) => {
        return <Item key={i} hold={hold} selected={props.hangboard.selectedHolds.includes(hold.id)}
                    onPress={()=>{
                        props.toggleHoldSelection(props.hangboard, hold.id)
                    }}/>
    })

    return (
        <React.Fragment>
            <Header title="Settings" backButton={true} navigation={props.navigation} />
                <View style={styles.mainContent}>
                    <HangboardSelector 
                        showHolds={true} 
                        showNonSelectedHolds={true}
                        selectedHolds={props.hangboard.selectedHolds} />

                    <ScrollView style={{ width: '100%' }}>
                        <List>
                            {items}
                        </List>
                    </ScrollView>
                </View>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    hangboard: state.hangboard.hangboards[state.hangboard.selectedHangboard]
})

// set state through props
const mapDispatchToProps = (dispatch) => bindActionCreators({
    toggleHoldSelection, clearHoldSelection, setHoldSelection
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
