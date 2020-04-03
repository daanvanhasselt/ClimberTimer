import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addStep } from '../state/Actions'

import { StyleSheet, ScrollView, View } from 'react-native'
import { Text, Button, Icon, List, ListItem } from 'native-base'

import HangboardView from './HangboardView'
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
    list: {
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
        justifyContent: 'space-around'
    }
})

// single step list item
function Item({ navigation, hangboard, workout, step }) {
    return (
        <ListItem style={styles.listItem}>
            <HangboardView
                onPress={() => navigation.push('Step', { workout, step })}
                hangboard={hangboard}
                selectedHolds={step.holds}
                showHolds={true}
                showNonSelectedHolds={false} />
            <View style={styles.itemLabelContainer}>
                <Text>{"Work: " + formatTime(step.workDuration).join(':')}</Text>
                <Text>{"Rest: " + formatTime(step.restDuration).join(':')}</Text>
                <Text>{"Reps: " + step.reps}</Text>
            </View>
        </ListItem>
    )
}

function WorkoutDetail(props) {
    // retrieve the data from state
    const workout = props.hangboard.workouts.find((workout) => workout.id === props.route.params.workout)
    const items = workout.steps && workout.steps.map((step, i) => {
        return <Item key={i} index={i} navigation={props.navigation} hangboard={props.hangboard} workout={workout.id} step={step} />
    })

    return (
        <>
            <View style={styles.header}>
                <Button iconLeft light
                    onPress={() => props.navigation.goBack()}>
                    <Icon name='arrow-back' />
                    <Text>Back</Text>
                </Button>
                <Text style={styles.headerText}>{workout.title}</Text>
                <Button iconLeft success
                    onPress={() => props.navigation.goBack()}>
                    <Icon name='arrow-dropright-circle' />
                    <Text>Start</Text>
                </Button>
            </View>

            <View style={styles.mainContent}>
                <ScrollView style={{ width: '100%' }}>
                    <List style={styles.list} className="steps">
                        {items}
                    </List>
                    <Button 
                        className="addStep"
                        full success
                        onPress={() => {
                            // dispatch action
                            props.addStep(workout.id)
                        }}>
                        <Text>Add step</Text>
                    </Button>
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
    addStep
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutDetail)