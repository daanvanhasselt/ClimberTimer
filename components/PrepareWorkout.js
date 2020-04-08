import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'native-base'

import { formatTime } from '../utils/Formatting'

import DurationPicker from './DurationPicker'
import Header from './Header'

const styles = StyleSheet.create({
    stepInfoView: {
        paddingTop: 10,
        paddingBottom: 35,
        backgroundColor: '#ddd'
    },
    stepInfoValueContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        // backgroundColor: 'red',
        height: 35,
        marginTop: 10
    },
    stepInfoTitle: {
        textAlign: 'center',
        padding: 15,
        fontWeight: 'bold'
    },
    stepInfoValue: {
    }
})

    
function PrepareWorkout(props) {
    const hangboard = props.hangboards.find(hangboard => hangboard.id === props.route.params.hangboard)
    const workout = hangboard.workouts.find(workout => workout.id === props.route.params.workout)
    const step = workout.steps[0]
    const stepInfo = (
    <View style={styles.stepInfoView}>
        <Text style={styles.stepInfoTitle}>Each workout step</Text>
        <View style={styles.stepInfoValueContainer}>
            <Text style={styles.stepInfoValue}>{"Work: " + formatTime(step.workDuration).join(':')}</Text>
            <Text style={styles.stepInfoValue}>{"Rest: " + formatTime(step.restDuration).join(':')}</Text>
            <Text style={styles.stepInfoValue}>{"Reps: " + step.reps}</Text>
        </View>
    </View>)

    const [numSets, setNumSets] = useState(1)
    const [restMinutes, setRestMinutes] = useState(0)
    const [restSeconds, setRestSeconds] = useState(10)

    return (
    <>
        <Header title={workout.title} backButton={true} navigation={props.navigation} />

        <DurationPicker 
            title="Number of sets" 
            minutes={numSets}
            setMinutes={setNumSets} />

        <DurationPicker 
            title="Rest between sets" 
            disabled={numSets <= 1}
            minutes={restMinutes}
            setMinutes={setRestMinutes}
            seconds={restSeconds}
            setSeconds={setRestSeconds} />            

        {stepInfo}

        <Button 
            className="startWorkout"
            full success
            onPress={() => {
                props.navigation.push('Play workout', { hangboard: hangboard.id, workout: workout.id, 
                                                            params: {
                                                                sets: numSets,
                                                                restBetweenSets: (restMinutes * 60) + restSeconds
                                                            }})
            }}>
            <Text>Start workout</Text>
        </Button>
    </>)
}

// get state through props
const mapStateToProps = (state) => ({
    hangboards: state.hangboard.hangboards
})

// set state through props
const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PrepareWorkout)