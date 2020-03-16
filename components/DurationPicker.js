import React from 'react'
import { View, Text, Picker } from 'react-native'

const pickerItems = Array(60).fill().map((_, i) => {
    return <Picker.Item key={i} label={i.toString()} value={i}/>
})

function DurationPicker({ title, selectedValue, valueSetter }) {
    return (
    <React.Fragment>
        <Text>{title}</Text>
        <View>
            <Picker
                style={{width: 100}}
                selectedValue={selectedValue}
                onValueChange={(v) => valueSetter(v)}>
                {pickerItems}
            </Picker>
        </View>
    </React.Fragment>
    )
}

export default DurationPicker