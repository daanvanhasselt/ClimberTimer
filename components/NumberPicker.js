import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Button, Icon } from 'native-base'

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

function format(num) {
    let str = num.toString()
    if(num < 10) {
        str = "0" + str
    }
    return str
}

function unformat(str) {
    return parseInt(str)
}

function DurationPicker({ title, value, valueSetter }) {
    const setter = (v) => {
        if(v >= 0) {
            valueSetter(v)
        }
    }
    return (
    <React.Fragment>
        <Text>{title}</Text>
        <View style={styles.container}>
            <Button light style={styles.button}
                onPress={() => setter(value - 1)}>
                <Text style={styles.buttonText}>-</Text>
            </Button>
            <TextInput 
                keyboardType='number-pad'
                value={format(value)}
                onChangeText={(t) => setter(unformat(t))}
                style={styles.input}></TextInput>
            <Button light style={styles.button}
                onPress={() => setter(value + 1)}>
                <Text style={styles.buttonText}>+</Text>
            </Button>
        </View>
    </React.Fragment>
    )
}

export default DurationPicker