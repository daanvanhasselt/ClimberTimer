import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Header from './Header'
import DurationPicker from './DurationPicker'
import Stopwatch from './StopwatchClass'

const styles = StyleSheet.create({
    mainContent: {
      backgroundColor: '#F5FCFF',
      flex: 1,
      alignItems: 'center'
    },
    stopwatchContainer: {
        // backgroundColor: 'purple',
        flex: 1,
        width: '100%'
    }
  })


function TimerScreen(props) {
    const [workMinutes, setWorkMinutes] = useState(0)
    const [workSeconds, setWorkSeconds] = useState(7)
    const [restMinutes, setRestMinutes] = useState(0)
    const [restSeconds, setRestSeconds] = useState(3)
    const [reps, setReps] = useState(10)
    
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
                
                <View style={styles.stopwatchContainer}>
                    <Stopwatch 
                        workMinutes={workMinutes} 
                        workSeconds={workSeconds} 
                        restMinutes={restMinutes} 
                        restSeconds={restSeconds} 
                        reps={reps}/>
                </View>
            </View>
        </React.Fragment>
    )
}

export default TimerScreen