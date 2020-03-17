import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    input: {
        // backgroundColor: 'purple',
        width: 70,
        height: 70,
        fontSize: 32,
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
    return (
    <React.Fragment>
        <Text>{title}</Text>
        <View>
            <TextInput 
                keyboardType='numeric'
                caretHidden={true}
                value={format(value)}
                onChangeText={(t) => valueSetter(unformat(t))}
                style={styles.input}></TextInput>
        </View>
    </React.Fragment>
    )
}

export default DurationPicker