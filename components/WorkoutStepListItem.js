import React from 'react'

import HangboardView from './HangboardView'
import { StyleSheet, View } from 'react-native'
import { Text, Icon, ListItem } from 'native-base'
import { formatTime } from '../utils/Formatting'

const styles = StyleSheet.create({
    listItem: {
        marginLeft: 0,
        flex:1,
        paddingRight: 0,
        alignItems: 'flex-start',
        flexDirection: 'column',
        borderBottomWidth: 2
    },
    listItemActive: {
        backgroundColor: 'green',
        fontWeight: 'bold',
        color: 'white'
    },
    itemLabelContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        // backgroundColor: 'red',
        height: 35,
        marginTop: 10
    },
    gripTypeContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        // backgroundColor: 'red',
        marginTop: 10
    }
})

function Item({ hangboard, workout, step, showDurations, active, onPress, onLayout }) {
    return (
        <ListItem 
                style={[styles.listItem, active && styles.listItemActive]}
                onPress={onPress}
                onLayout={event => {
                const layout = event.nativeEvent.layout
                onLayout && onLayout(layout)
            }}>
            {hangboard && <HangboardView
                hangboard={hangboard}
                selectedHolds={step.holds}
                showHolds={true}
                showNonSelectedHolds={false} />}
            {showDurations && 
            (<View style={styles.itemLabelContainer}>
                <Text style={[styles.itemLabel, active && styles.listItemActive]}>{"Work: " + formatTime(step.workDuration).join(':')}</Text>
                <Text style={[styles.itemLabel, active && styles.listItemActive]}>{"Rest: " + formatTime(step.restDuration).join(':')}</Text>
                <Text style={[styles.itemLabel, active && styles.listItemActive]}>{"Reps: " + step.reps}</Text>
            </View>)}
            {hangboard && <View style={styles.gripTypeContainer}>
                <Text style={[styles.itemLabel, active && styles.listItemActive]}>{step.gripType}</Text>
            </View>}
        </ListItem>
    )
}

export default Item