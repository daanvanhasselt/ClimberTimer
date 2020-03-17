import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import NumberPicker from './NumberPicker'


const styles = StyleSheet.create({
    pickerContainer: {
        // backgroundColor: 'blue',
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    pickerHeader: {
        // backgroundColor: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
        marginTop: 20,
        marginBottom: 10
    },
    picker: {
        // backgroundColor: 'green',
        flex: 1,
        flexDirection: 'row'
    },
    colon: {
        width: 20,
        fontSize: 32,
        marginTop: 12,
        textAlign: 'center'
    }
  })

function DurationPicker({ title, minutes, setMinutes, seconds, setSeconds }) {
    const firstPicker = <NumberPicker title="" value={minutes} valueSetter={setMinutes}/>
    const colon = <Text style={styles.colon}>:</Text>
    const secondPicker = <NumberPicker title="" value={seconds} valueSetter={setSeconds}/>

    return (
        <View style={styles.pickerContainer}>
            <Text style={styles.pickerHeader}>{title}</Text>
            <View style={styles.picker}>
                {firstPicker}
                {seconds !== undefined && colon}
                {seconds !== undefined && secondPicker}
            </View>
        </View>
    )
}

export default DurationPicker