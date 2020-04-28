import React, { useState, useEffect, useRef } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Button, Icon } from 'native-base'
import { pad } from '../utils/Formatting'

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback])

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay])
}

function DurationPicker({ vertical, disabled, value, valueSetter }) {
    const styles = StyleSheet.create({
        input: {
            height: 70,
            fontSize: vertical ? 40 : 50,
            textAlign: 'center',
            color: vertical ? '#6E57FB' : '#BDBDBD',
            marginLeft: vertical ? 0 : 10,
            marginRight: vertical ? 0 : 10
        },
        disabled: {
            color: '#888'
        },
        container: {
            flexDirection: vertical ? 'column-reverse' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: vertical ? '33%' : '100%'
        },
        button: {
            width: 44,
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonText: {
            fontSize: 32,
            textAlign: 'center',
            fontWeight: 'bold',
            color: vertical ? '#BDBDBD' : '#6E57FB'
        }
    })

    const maxDelay = 150
    const minDelay = 50
    const delayMultiplier = 0.85
    
    const [decrementing, setDecrementing] = useState(false)
    const [incrementing, setIncrementing] = useState(false)
    const [delay, setDelay] = useState(maxDelay)

    useInterval(() => {
        if(!decrementing) return

        setDelay(Math.max(minDelay, delay * delayMultiplier))
        valueSetter(value - 1)
    }, decrementing ? delay : null)

    useInterval(() => {
        if(!incrementing) return


        setDelay(Math.max(minDelay, delay * delayMultiplier))
        valueSetter(value + 1)
    }, incrementing ? delay : null)

    useEffect(() => {
        setDelay(maxDelay)
    }, [decrementing, incrementing])

    return (
    <React.Fragment>
        <View style={styles.container}>
            <TouchableOpacity 
                className="decrement"
                disabled={disabled}
                delayLongPress={100}
                onLongPress={() => setDecrementing(true) }
                onPressOut={() => setDecrementing(false) }
                onPress={() => valueSetter(value - 1)}>
                <View style={styles.button}>
                    {vertical ? <Icon style={[styles.buttonText, disabled && styles.disabled]} name="ios-arrow-down"/> : <Icon style={[styles.buttonText, disabled && styles.disabled]} name="ios-remove-circle"/>}
                </View>
            </TouchableOpacity>
            <TextInput 
                className="value"
                keyboardType='number-pad'
                style={[styles.input, disabled && styles.disabled]}
                value={pad(value ? value : 0)}
                editable={false}
                onChangeText={(t) => valueSetter(parseInt(t))}>
                </TextInput>
            <TouchableOpacity 
                className="increment"
                disabled={disabled}
                delayLongPress={100}
                onLongPress={() => setIncrementing(true) }
                onPressOut={() => setIncrementing(false) }
                onPress={() => valueSetter(value + 1)}>
                <View style={styles.button}>
                    {/* <Text style={[styles.buttonText, disabled && styles.disabled]}>+</Text> */}
                    {vertical ? <Icon style={[styles.buttonText, disabled && styles.disabled]} name="ios-arrow-up"/> : <Icon style={[styles.buttonText, disabled && styles.disabled]} name="ios-add-circle"/>}
                </View>
            </TouchableOpacity>
        </View>
    </React.Fragment>
    )
}

export default DurationPicker