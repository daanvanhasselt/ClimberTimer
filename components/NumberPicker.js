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

function DurationPicker({ value, valueSetter }) {
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
                onPress={() => setter(value - 1)}>
                <Text style={styles.buttonText}>-</Text>
            </Button>
            <TextInput 
                className="value"
                keyboardType='number-pad'
                value={pad(value ? value : 0)}
                onChangeText={(t) => setter(parseInt(t))}
                style={styles.input}></TextInput>
            <Button 
                className="increment"
                light style={styles.button}
                onPress={() => setter(value + 1)}>
                <Text style={styles.buttonText}>+</Text>
            </Button>
        </View>
    </React.Fragment>
    )
}

export default DurationPicker