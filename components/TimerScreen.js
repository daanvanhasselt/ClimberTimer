import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Button, Text } from 'native-base'
import Header from './Header'
import Footer from './Footer'

import Stopwatch from './Stopwatch'
import WorkoutStepEditor from './WorkoutStepEditor'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6E57FB'
    },
    mainContent: {
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
    },
    startButton: {
        marginTop: 22,
        marginBottom: 22,
        width: '50%',
        textAlign: 'center',
        backgroundColor: '#E5AD29',
    },
    startButtonText: {
        width: '100%',
        textAlign: 'center'
    }
  })


function TimerScreen(props) {
    const [workMinutes, setWorkMinutes] = useState(0)
    const [workSeconds, setWorkSeconds] = useState(7)
    const [restMinutes, setRestMinutes] = useState(0)
    const [restSeconds, setRestSeconds] = useState(3)
    const [reps, setReps] = useState(10)
    
    return (
        <Container style={styles.container}>
            <Header title="ClimberTimer" backButton={true} settingsButton={true} navigation={props.navigation} />
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
                <Button style={styles.startButton}>
                    <Text style={styles.startButtonText}>Start</Text>
                </Button>
            </View>
            <Footer/>
        </Container>
    )
}

export default TimerScreen