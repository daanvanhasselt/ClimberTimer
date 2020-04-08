import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addStep, updateWorkout, removeWorkout } from '../state/Actions'

import { StyleSheet, ScrollView, View, Alert } from 'react-native'
import { Text, Button, Icon, List, ListItem } from 'native-base'

import Header from './Header'
import WorkoutStepListItem from './WorkoutStepListItem'
import { formatTime } from '../utils/Formatting'

const styles = StyleSheet.create({
    mainContent: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    header: {
        height: 48,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingBottom: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#d2d2d2'
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    center: {
        marginLeft: 'auto', 
        marginRight: 'auto'
    }
})

function WorkoutDetail(props) {
    // retrieve the data from state
    const workout = props.hangboard.workouts.find(workout => workout.id === props.route.params.workout)
    if(workout === undefined) return null

    let items = workout.steps && workout.steps.map((step, i) => {
        return <WorkoutStepListItem key={i} hangboard={props.hangboard} workout={workout} step={step} showDurations={!workout.locked} 
                    onPress={() => !workout.locked && props.navigation.push('Step', { hangboard: props.hangboard.id, workout: workout.id, step: step.id })}/>
    })

    // global editor listitem for work, rest and reps in case of locked workout
    if(workout.locked && workout.steps && workout.steps.length > 0) {
        const step = workout.steps[0]
        const item = <WorkoutStepListItem key={-1} workout={workout} step={step} showDurations={true}
                            onPress={() => props.navigation.push('Built-in workout', { hangboard: props.hangboard.id, workout: workout.id })}/>
        items = [item, ...items]
    }

    const startButton = (<Button success
                            onPress={() => {
                                props.navigation.push('Prepare', { hangboard: props.hangboard.id, workout: workout.id })
                            }}>
                            <Icon name='play' />
                        </Button>)

    return (
        <>
            <Header title={workout.title} backButton={true} customRightButton={startButton} navigation={props.navigation} 
                titleChanged={ title => {
                    // dont allow empty title
                    if(title.trim().length === 0) title = "-"

                    if(title === workout.title) return

                    workout.title = title
                    props.updateWorkout(props.hangboard.id, workout)
                }} />
            
            <View style={styles.mainContent}>
                <ScrollView style={{ width: '100%' }}>
                    <List style={styles.list} className="steps">
                        {(items && items.length > 0) ? items : <ListItem><Text style={styles.center}>No steps</Text></ListItem>}
                    </List>
                    {!workout.locked && <Button 
                        className="addStep"
                        full success
                        onPress={() => {
                            // dispatch action
                            props.addStep(props.hangboard.id, workout.id)
                        }}>
                        <Text>Add step</Text>
                    </Button>}
                    {!workout.locked && <Button 
                        className="removeStep"
                        full danger
                        onPress={() => {
                            Alert.alert(
                                'Remove workout',
                                'Are you sure?',
                                [
                                {text: 'Cancel', style: 'cancel'},
                                {text: 'OK', onPress: () => {
                                    // dispatch action
                                    props.navigation.goBack()
                                    props.removeWorkout(props.hangboard.id, workout)
                                }},
                                ],
                                { cancelable: false }
                            )
                        }}>
                        <Text>Remove workout</Text>
                    </Button>}
                </ScrollView>
            </View>
        </>
    )
}

// get state through props
const mapStateToProps = (state) => ({
    hangboard: state.hangboard.hangboards[state.hangboard.selectedHangboard]
})

// set state through props
const mapDispatchToProps = (dispatch) => bindActionCreators({
    addStep, updateWorkout, removeWorkout
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutDetail)