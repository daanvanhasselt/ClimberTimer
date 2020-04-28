import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'native-base'

import NumberPicker from './NumberPicker'

const styles = StyleSheet.create({
    pickerContainer: {
    },
    picker: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    colon: {
        width: 20,
        fontSize: 50,
        textAlign: 'center',
        color: '#6E57FB',
        top: -5
    },
    disabled: {
        color: '#888'
    }
  })

function DurationPicker({ style, vertical, disabled, minutes, setMinutes, seconds, setSeconds }) {
    const firstPicker = <NumberPicker disabled={disabled} vertical={vertical} value={minutes} valueSetter={(v) => setMinutes(Math.max(0, v)) }/>
    const colon = <Text style={[styles.colon, disabled && styles.disabled]}>:</Text>
    const secondPicker = <NumberPicker disabled={disabled} vertical={vertical} value={seconds} valueSetter={(v) => {
        let s = v
        if(v >= 60) {
            s = v - 60
            setMinutes(minutes + 1)
        }
        else if(v < 0 && minutes > 0) {
            s = v + 60
            setMinutes(minutes - 1)
        }
        setSeconds(Math.max(0, s))
    }}/>

    return (
        <View style={[styles.pickerContainer, style]}>
            <View style={styles.picker}>
                {firstPicker}
                {seconds !== undefined && colon}
                {seconds !== undefined && secondPicker}
            </View>
        </View>
    )
}

export default DurationPicker