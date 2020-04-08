import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { minutes, seconds } from '../utils/Formatting'

import { Text } from 'native-base'

import Header from './Header'
import Stopwatch from './Stopwatch'

function PlayWorkout(props) {
    const hangboard = props.hangboards.find(hangboard => hangboard.id === props.route.params.hangboard)
    const workout = hangboard.workouts.find(workout => workout.id === props.route.params.workout)

    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    const step = workout.steps[currentStepIndex]
    const nSteps = workout.steps.length

    const workMinutes = minutes(step.workDuration)
    const workSeconds = seconds(step.workDuration)
    const restMinutes = minutes(step.restDuration)
    const restSeconds = seconds(step.restDuration)

    const stepDone = () => {
        console.log(`${currentStepIndex} of ${nSteps} done..`)
        if(currentStepIndex < nSteps - 1) {
            console.log(`next step!`)
            setCurrentStepIndex(currentStepIndex + 1)
        }
    }

    const stopwatchStopped = () => {
        console.log('stopped by user')
    }

    console.log(`render.. ${currentStepIndex} / ${nSteps}`)
    return (
        <>
            <Header title={workout.title} backButton={true} navigation={props.navigation} />
            <Stopwatch
                skipCountdown={currentStepIndex !== 0}
                autoStart={currentStepIndex !== 0}
                includeLastRest={currentStepIndex < nSteps - 1}
                workMinutes={workMinutes}
                workSeconds={workSeconds}
                restMinutes={restMinutes}
                restSeconds={restSeconds}
                reps={step.reps}
                onFinish={stepDone}
                onStop={stopwatchStopped} />
        </>
    )
}

// get state through props
const mapStateToProps = (state) => ({
    hangboards: state.hangboard.hangboards
})

// set state through props
const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PlayWorkout)