import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Header from './Header'
import DurationPicker from './DurationPicker'

const styles = StyleSheet.create({
    mainContent: {
      flex: 1,
      height: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    picker: {
        flexDirection: 'row'
    },
    pickerHeader: {
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
        marginBottom: 10,
        marginTop: 20
    }
  })


function TimerScreen(props) {
    const [workMinutes, setWorkMinutes] = useState(0)
    const [workSeconds, setWorkSeconds] = useState(0)
    const [restMinutes, setRestMinutes] = useState(0)
    const [restSeconds, setRestSeconds] = useState(0)
    const [reps, setReps] = useState(0)
    return (
        <React.Fragment>
            <Header title="ClimberTimer" settingsButton={true} navigation={props.navigation} />
            <View style={styles.mainContent}>
                <Text style={styles.pickerHeader}>Work duration</Text>
                <View style={styles.picker}>
                    <DurationPicker title="min" selectedValue={workMinutes} valueSetter={setWorkMinutes}/>
                    <DurationPicker title="sec" selectedValue={workSeconds} valueSetter={setWorkSeconds}/>
                </View>

                <Text style={styles.pickerHeader}>Rest duration</Text>
                <View style={styles.picker}>
                    <DurationPicker title="min" selectedValue={restMinutes} valueSetter={setRestMinutes}/>
                    <DurationPicker title="sec" selectedValue={restSeconds} valueSetter={setRestSeconds}/>
                </View>
                <Text style={styles.pickerHeader}>Repetitions</Text>
                <View style={styles.picker}>
                    <DurationPicker title="" selectedValue={reps} valueSetter={setReps}/>
                </View>
                <Button title="Start" onPress={() => { console.log({ workMinutes, workSeconds, restMinutes, restSeconds, reps}) }}/>
            </View>
        </React.Fragment>
    )
}

export default TimerScreen