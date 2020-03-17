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
                <DurationPicker 
                    title="Work duration" 
                    minutes={workMinutes}
                    setMinutes={setWorkMinutes}
                    seconds={workSeconds}
                    setSeconds={setWorkSeconds} />

                <DurationPicker 
                    title="Rest duration" 
                    minutes={restMinutes}
                    setMinutes={setRestMinutes}
                    seconds={restSeconds}
                    setSeconds={setRestSeconds} />

                <DurationPicker 
                    title="Reps" 
                    minutes={reps}
                    setMinutes={setReps} />
                
                <View style={styles.buttonContainer}>
                    <Button title="Start" 
                        onPress={() => { console.log({ workMinutes, workSeconds, restMinutes, restSeconds, reps }) }}/>
                </View>
            </View>
        </React.Fragment>
    )
}

export default TimerScreen