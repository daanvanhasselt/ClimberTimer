import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import DurationPicker from './DurationPicker'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'white',
        // borderRadius: 40,
        // borderWidth: 2,
        // margin: 10
    },
    row: {
        width: '100%',
        paddingLeft: 25,
        paddingRight: 25,
        flexDirection: 'row',
        flex: 1
    },
    repsRow: {
        flex: 1
    },
    picker: {
        // backgroundColor: 'green',
        justifyContent: 'center',
        flex: 3
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        // width: '40%',
        flex: 2,
        alignSelf: 'center',
        // backgroundColor: 'blue'
    },
    divider: {
        backgroundColor: 'red',
        alignSelf: 'center',
        height: '75%',
        width: 8,
        marginLeft: 20,
        marginRight: 20
    },
    invisibleDivider: {
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
})

function WorkoutStepEditor(props) {
    return (
    <View style={styles.container}>
        <View style={styles.row}>
            <DurationPicker 
                style={styles.picker}
                vertical={true}
                minutes={props.workMinutes}
                setMinutes={props.setWorkMinutes}
                seconds={props.workSeconds}
                setSeconds={props.setWorkSeconds} />
            
            {/* vertical divider */}
            <View style={styles.divider}></View>

            <Text style={styles.title}>Work{"\n"}duration</Text>
        </View>

        <View style={styles.row}>
            <DurationPicker 
                style={styles.picker}
                vertical={true}
                minutes={props.restMinutes}
                setMinutes={props.setRestMinutes}
                seconds={props.restSeconds}
                setSeconds={props.setRestSeconds} />
            
            {/* vertical divider */}
            <View style={styles.divider}></View>

            <Text style={styles.title}>Rest{"\n"}duration</Text>
        </View>

        <View style={[styles.row, styles.repsRow]}>
            <DurationPicker 
                style={styles.picker} 
                minutes={props.reps}
                setMinutes={props.setReps} />
            
            <View style={[styles.divider, styles.invisibleDivider]}></View>

            <Text style={styles.title}>Reps</Text>
        </View>

    </View>)
}

export default WorkoutStepEditor