import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateStep, removeStep } from '../state/Actions'
import GripTypes from '../state/GripTypes'

import { View, StyleSheet, Alert } from 'react-native'
import { Text, Button, Icon, ActionSheet } from 'native-base'
import Modal from 'react-native-modal'
import WorkoutStepEditor from './WorkoutStepEditor'
import HangboardView from './HangboardView'
import HoldSelector from './HoldSelector'
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

function WorkoutStep(props) {
    const hangboard = props.hangboards.find(hangboard => hangboard.id === props.route.params.hangboard)
    const workout = hangboard.workouts.find(workout => workout.id === props.route.params.workout)
    const step = workout.steps.find(step => step.id === props.route.params.step)
    if(step === undefined) return null

    let minutes = (duration) => Math.floor(duration / 60) % 60
    let seconds = (duration) => Math.floor(duration) % 60
        
    const [workMinutes, setWorkMinutes] = useState(minutes(step.workDuration))
    const [workSeconds, setWorkSeconds] = useState(seconds(step.workDuration))
    const [restMinutes, setRestMinutes] = useState(minutes(step.restDuration))
    const [restSeconds, setRestSeconds] = useState(seconds(step.restDuration))
    const [reps, setReps] = useState(step.reps)
    const [gripType, setGripType] = useState(step.gripType)

    const [showHoldsModal, setShowHoldsModal] = useState(false)
    const [holds, setHolds] = useState(step.holds)

    const stepChanged = (workMinutes != minutes(step.workDuration)) || (workSeconds != seconds(step.workDuration)) || 
                        (restMinutes != minutes(step.restDuration)) || (restSeconds != seconds(step.restDuration)) || 
                        reps != step.reps || holds != step.holds || gripType != step.gripType

    const saveButton = (
        <Button success
            onPress={() => {
                props.updateStep(hangboard.id, workout.id, {
                    id: step.id,
                    workDuration: (workMinutes * 60) + workSeconds,
                    restDuration: (restMinutes * 60) + restSeconds,
                    reps: reps,
                    holds: holds,
                    gripType: gripType
                })
                props.navigation.goBack()
            }}>
            {stepChanged && <Icon name='checkmark' />}
        </Button>
    )

    const showGripTypeSelector = () => {
        const types = Object.values(GripTypes)
        types.push("Cancel")

        ActionSheet.show(
            {
                title: "Select grip",
                options: types,
                cancelButtonIndex: types.length - 1
            },
            (buttonIndex) => {
                // cancel button tapped
                if(buttonIndex >= types.length - 1) return

                setGripType(types[buttonIndex])
            }
        )
    }

    return (
        <React.Fragment>
            <Header title="Edit step" backButton={true} customRightButton={saveButton} navigation={props.navigation} />

            <View style={styles.editorContainer}>
                <HangboardView 
                    hangboard={hangboard} 
                    showHolds={true}
                    showNonSelectedHolds={true}
                    selectedHolds={holds}
                    onPress={()=> {
                        setShowHoldsModal(!showHoldsModal)
                    }}/>

                <Modal style={styles.modal} isVisible={showHoldsModal}>
                    <HoldSelector 
                        hangboard={hangboard} 
                        selectedHolds={holds} 
                        setHolds={setHolds}
                        disableHangboardSwitch={true}
                        close={()=>setShowHoldsModal(false)} />
                </Modal>

                <Button full
                    onPress={() => showGripTypeSelector()}>
                    <Text>{gripType}</Text>
                </Button>

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
                <Button 
                    className="removeStep"
                    full danger
                    onPress={() => {
                        Alert.alert(
                            'Remove step',
                            'Are you sure?',
                            [
                              {text: 'Cancel', style: 'cancel'},
                              {text: 'OK', onPress: () => {
                                  // dispatch action
                                props.navigation.goBack()
                                props.removeStep(hangboard.id, workout.id, step)
                              }},
                            ],
                            { cancelable: false }
                        )
                    }}>
                    <Text>Remove step</Text>
                </Button>
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
    updateStep, removeStep
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutStep)