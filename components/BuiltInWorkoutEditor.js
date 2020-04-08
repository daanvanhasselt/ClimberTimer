import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateStep } from '../state/Actions'

import { View, StyleSheet } from 'react-native'
import { Text, Button, Icon } from 'native-base'
import WorkoutStepEditor from './WorkoutStepEditor'
import Header from './Header'

const styles = StyleSheet.create({
    header: {
        height: 48,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#efefef'
    },
    modal: {
        margin: 0,
    },
    editorContainer: { 
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
})

function BuiltInWorkoutEditor(props) {
    const hangboard = props.hangboards.find(hangboard => hangboard.id === props.route.params.hangboard)
    const workout = hangboard.workouts.find(workout => workout.id === props.route.params.workout)
    const step = (workout.steps && workout.steps.length > 0) && workout.steps[0]
    if(step === undefined) return null

    let minutes = (duration) => Math.floor(duration / 60) % 60
    let seconds = (duration) => Math.floor(duration) % 60
        
    const [workMinutes, setWorkMinutes] = useState(minutes(step.workDuration))
    const [workSeconds, setWorkSeconds] = useState(seconds(step.workDuration))
    const [restMinutes, setRestMinutes] = useState(minutes(step.restDuration))
    const [restSeconds, setRestSeconds] = useState(seconds(step.restDuration))
    const [reps, setReps] = useState(step.reps)

    const stepChanged = (workMinutes != minutes(step.workDuration)) || (workSeconds != seconds(step.workDuration)) || 
                        (restMinutes != minutes(step.restDuration)) || (restSeconds != seconds(step.restDuration)) ||
                        (reps != step.reps)

    const saveButton = (
        <Button success
            onPress={() => {
                workout.steps.forEach((step) => {
                    props.updateStep(hangboard.id, workout.id, {
                        id: step.id,
                        workDuration: (workMinutes * 60) + workSeconds,
                        restDuration: (restMinutes * 60) + restSeconds,
                        reps: reps
                    })
                })
                
                props.navigation.goBack()
            }}>
            {stepChanged && <Icon name='checkmark' />}
        </Button>)

    return (
        <React.Fragment>
            <Header title="Edit all steps" backButton={true} customRightButton={saveButton} navigation={props.navigation} />

            <View style={styles.editorContainer}>
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
            
        </React.Fragment>
    )
}

// get state through props
const mapStateToProps = (state) => ({
    hangboards: state.hangboard.hangboards
})

// set state through props
const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateStep
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BuiltInWorkoutEditor)