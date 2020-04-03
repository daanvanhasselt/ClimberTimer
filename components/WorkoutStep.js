import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateStep } from '../state/Actions'

import { View, StyleSheet } from 'react-native'
import { Text, Button, Icon } from 'native-base'
import Modal from 'react-native-modal'
import WorkoutStepEditor from './WorkoutStepEditor'
import HangboardView from './HangboardView'
import HoldSelector from './HoldSelector'

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
        flex:1,
        paddingRight: 0,
        alignItems: 'flex-start'
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

    const [showHoldsModal, setShowHoldsModal] = useState(false)
    const [holds, setHolds] = useState(step.holds)

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
                            reps: reps,
                            holds: holds
                        })
                        props.navigation.goBack()
                    }}>
                    <Icon name='save' />
                    <Text>Save</Text>
                </Button>
            </View>

            <View style={styles.editorContainer}>
                <HangboardView 
                    hangboard={props.route.params.hangboard} 
                    showHolds={true} 
                    selectedHolds={holds}
                    onPress={()=> {
                        setShowHoldsModal(!showHoldsModal)
                    }}/>

                <Modal style={styles.modal} isVisible={showHoldsModal}>
                    <HoldSelector 
                        hangboard={props.route.params.hangboard} 
                        selectedHolds={holds} 
                        setHolds={setHolds}
                        close={()=>setShowHoldsModal(false)} />
                </Modal>
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