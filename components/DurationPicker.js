import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'native-base'

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
        flexDirection: 'row',
    },
    colon: {
        width: 20,
        fontSize: 32,
        marginTop: 12,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center'
    },
    disabled: {
        color: '#888'
    }
  })

function DurationPicker({ title, disabled, minutes, setMinutes, seconds, setSeconds }) {
    const firstPicker = <NumberPicker disabled={disabled} value={minutes} valueSetter={setMinutes}/>
    const colon = <Text style={[styles.colon, disabled && styles.disabled]}>:</Text>
    const secondPicker = <NumberPicker disabled={disabled} value={seconds} valueSetter={setSeconds}/>

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