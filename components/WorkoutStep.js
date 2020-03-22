import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateStep } from '../state/Actions'

import { View, StyleSheet } from 'react-native'
import { Button, Text, Icon } from 'native-base'
import WorkoutStepEditor from './WorkoutStepEditor'

const styles = StyleSheet.create({
    header: {
        height: 48,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#efefef'
    },
    editorContainer: { 
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
})

function WorkoutStep(props) {
    const step = props.route.params.step
    let minutes = (duration) => Math.floor(duration / 60) % 60
    let seconds = (duration) => Math.floor(duration) % 60
        
    const [workMinutes, setWorkMinutes] = useState(minutes(step.workDuration))
    const [workSeconds, setWorkSeconds] = useState(seconds(step.workDuration))
    const [restMinutes, setRestMinutes] = useState(minutes(step.restDuration))
    const [restSeconds, setRestSeconds] = useState(seconds(step.restDuration))
    const [reps, setReps] = useState(step.reps)

    return (
        <React.Fragment>
            <View style={styles.header}>
                <Button iconLeft light
                    onPress={() => props.navigation.goBack()}>
                    <Icon name='arrow-back' />
                    <Text>Back</Text>
                </Button>
                <Button iconLeft light
                    onPress={() => {
                        props.updateStep(props.route.params.workout, {
                            id: step.id,
                            workDuration: (workMinutes * 60) + workSeconds,
                            restDuration: (restMinutes * 60) + restSeconds,
                            reps: reps
                        })
                        props.navigation.goBack()
                    }}>
                    <Icon name='save' />
                    <Text>Save</Text>
                </Button>
            </View>

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
    
})

// set state through props
const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateStep
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutStep)