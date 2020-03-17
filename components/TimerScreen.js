import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Header from './Header'
import DurationPicker from './DurationPicker'

const styles = StyleSheet.create({
    mainContent: {
      backgroundColor: '#F5FCFF',
      flex: 1,
      alignItems: 'center'
    },
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
    buttonContainer: {
        // backgroundColor: 'purple',
        flex: 1,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
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
                <View style={styles.pickerContainer}>
                    <Text style={styles.pickerHeader}>Work duration</Text>
                    <View style={styles.picker}>
                        <DurationPicker title="min" selectedValue={workMinutes} valueSetter={setWorkMinutes}/>
                        <DurationPicker title="sec" selectedValue={workSeconds} valueSetter={setWorkSeconds}/>
                    </View>
                </View>

                <View style={styles.pickerContainer}>
                    <Text style={styles.pickerHeader}>Rest duration</Text>
                    <View style={styles.picker}>
                        <DurationPicker title="min" selectedValue={restMinutes} valueSetter={setRestMinutes}/>
                        <DurationPicker title="sec" selectedValue={restSeconds} valueSetter={setRestSeconds}/>
                    </View>
                </View>

                <View style={styles.pickerContainer}>
                    <Text style={styles.pickerHeader}>Repetitions</Text>
                    <View style={styles.picker}>
                        <DurationPicker title="" selectedValue={reps} valueSetter={setReps}/>
                    </View>
                </View>
                
                <View style={styles.buttonContainer}>
                    <Button title="Start" 
                        onPress={() => { console.log({ workMinutes, workSeconds, restMinutes, restSeconds, reps }) }}/>
                </View>
            </View>
        </React.Fragment>
    )
}

export default TimerScreen