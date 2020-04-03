import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './Header'

import Stopwatch from './Stopwatch'
import WorkoutStepEditor from './WorkoutStepEditor'

const styles = StyleSheet.create({
    mainContent: {
      backgroundColor: '#F5FCFF',
      flex: 1,
      alignItems: 'center'
    },
    pickers: {
        flex: 3,
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
            <Header title="ClimberTimer" menuButton={true} settingsButton={true} navigation={props.navigation} />
            <View style={styles.mainContent}>
                <View style={styles.pickers}>
                    <WorkoutStepEditor 
                        workMinutes={workMinutes} 
                        setWorkMinutes={setWorkMinutes}
                        workSeconds={workSeconds} 
                        setWorkSeconds={setWorkSeconds}
                        restMinutes={restMinutes} 
                        setRestMinutes={setRestMinutes}
                        restSeconds={restSeconds} 
                        setRestSeconds={setRestSeconds}
                        reps={reps}
                        setReps={setReps}/>
                </View>
                
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