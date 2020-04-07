import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addStep, removeWorkout } from '../state/Actions'

import { StyleSheet, ScrollView, View, Alert } from 'react-native'
import { Text, Button, Icon, List, ListItem } from 'native-base'

import HangboardView from './HangboardView'
import Header from './Header'
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
    },
    listItem: {
        marginLeft: 0,
        flex:1,
        paddingRight: 0,
        alignItems: 'flex-start',
        flexDirection: 'column',
        borderBottomWidth: 2
    },
    itemLabelContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        // backgroundColor: 'red',
        height: 35,
        marginTop: 10
    },
    gripTypeContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        // backgroundColor: 'red',
        height: 10,
        marginTop: 10
    },
    itemLabel: {
    }
})

// single step list item
function Item({ navigation, hangboard, workout, step }) {
    return (
        <ListItem style={styles.listItem}>
            <HangboardView
                onPress={() => !workout.locked && navigation.push('Step', { hangboard: hangboard.id, workout: workout.id, step: step.id })}
                hangboard={hangboard}
                selectedHolds={step.holds}
                showHolds={true}
                showNonSelectedHolds={false} />
            {workout.locked || 
            (<View style={styles.itemLabelContainer}>
                <Text style={styles.itemLabel}>{"Work: " + formatTime(step.workDuration).join(':')}</Text>
                <Text style={styles.itemLabel}>{"Rest: " + formatTime(step.restDuration).join(':')}</Text>
                <Text style={styles.itemLabel}>{"Reps: " + step.reps}</Text>
            </View>)}
            <View style={styles.gripTypeContainer}>
                <Text style={styles.itemLabel}>{step.gripType}</Text>
            </View>
        </ListItem>
    )
}

function WorkoutDetail(props) {
    // retrieve the data from state
    const workout = props.hangboard.workouts.find(workout => workout.id === props.route.params.workout)
    if(workout === undefined) return null

    let items = workout.steps && workout.steps.map((step, i) => {
        return <Item key={i} index={i} navigation={props.navigation} hangboard={props.hangboard} workout={workout} step={step} />
    })

    // global editor listitem for work, rest and reps in case of locked workout
    if(workout.locked && workout.steps && workout.steps.length > 0) {
        const step = workout.steps[0]
        const item = (  <ListItem key={-1} style={styles.listItem}
                                onPress={() => props.navigation.push('Built-in workout', { hangboard: props.hangboard.id, workout: workout.id })}>
                            <View style={styles.itemLabelContainer}>
                                <Text style={styles.itemLabel}>{"Work: " + formatTime(step.workDuration).join(':')}</Text>
                                <Text style={styles.itemLabel}>{"Rest: " + formatTime(step.restDuration).join(':')}</Text>
                                <Text style={styles.itemLabel}>{"Reps: " + step.reps}</Text>
                            </View>
                        </ListItem>)
        items = [item, ...items]
    }

    const startButton = (<Button success
                            onPress={() => props.navigation.goBack()}>
                            <Icon name='play' />
                        </Button>)

    return (
        <>
            <Header title={workout.title} backButton={true} customRightButton={startButton} navigation={props.navigation} />
            
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
                    {!workout.locked &&                 <Button 
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
    addStep, removeWorkout
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutDetail)