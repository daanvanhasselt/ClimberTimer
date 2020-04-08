import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Text, Button } from 'native-base'
import { pad } from '../utils/Formatting'

const styles = StyleSheet.create({
    input: {
        // backgroundColor: 'purple',
        width: 70,
        height: 70,
        fontSize: 32,
        textAlign: 'center',
        marginLeft: -10,
        marginRight: -10
    },
    disabled: {
        color: '#888'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 24,
        textAlign: 'center'
    }
  })

function DurationPicker({ disabled, value, valueSetter }) {
    const setter = (v) => {
        if(valueSetter && v >= 0) {
            valueSetter(v)
        }
    }
    return (
    <React.Fragment>
        <View style={styles.container}>
            <Button 
                className="decrement"
                light style={styles.button}
                disabled={disabled}
                onPress={() => setter(value - 1)}>
                <Text style={[styles.buttonText, disabled && styles.disabled]}>-</Text>
            </Button>
            <TextInput 
                className="value"
                keyboardType='number-pad'
                style={[styles.input, disabled && styles.disabled]}
                value={pad(value ? value : 0)}
                editable={!disabled}
                onChangeText={(t) => setter(parseInt(t))}>
                </TextInput>
            <Button 
                className="increment"
                light style={styles.button}
                disabled={disabled}
                onPress={() => setter(value + 1)}>
                <Text style={[styles.buttonText, disabled && styles.disabled]}>+</Text>
            </Button>
        </View>
    </React.Fragment>
    )
}

export default DurationPicker