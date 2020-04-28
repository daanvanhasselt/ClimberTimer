import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import DurationPicker from './DurationPicker'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '85%',
        marginTop: 25
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        flex: 1
    },
    repsRow: {
        flex: 1
    },
    picker: {
        flex: 3,
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    title: {
        flex: 2,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        // backgroundColor: 'blue'
    },
    divider: {
        backgroundColor: '#6E57FB',
        alignSelf: 'center',
        height: '65%',
        width: 6,
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