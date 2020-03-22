import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addStep } from '../state/Actions'

import { StyleSheet, ScrollView, View } from 'react-native'
import { Text, Button, Icon, List, ListItem } from 'native-base'

const styles = StyleSheet.create({
    mainContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    header: {
        height: 48,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#dedede'
    },
    headerText: {
        fontSize: 18,
        paddingRight: 20
    },
    listItem: {
        flexDirection: 'column'
    }
})

// single step list item
function Item({ navigation, workout, step, index }) {
    return (
        <ListItem style={styles.listItem}
            onPress={() => {
                navigation.push('Step', { workout, step })
            }}>
            <Text>{"Step " + index}</Text>
            <Text>{"Work: " + step.workDuration}</Text>
            <Text>{"Rest: " + step.restDuration}</Text>
            <Text>{"Reps: " + step.reps}</Text>
            <Text>{"Holds: " + (step.holds && step.holds.toString())}</Text>
        </ListItem>
    )
}

function WorkoutDetail(props) {
    // retrieve the data from state
    const workout = props.hangboard.workouts.find((workout) => workout.id === props.route.params.workout)
    const items = workout.steps && workout.steps.map((step, i) => {
        return <Item key={i} index={i} navigation={props.navigation} workout={workout.id} step={step} />
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
            </View>

            <View style={styles.mainContent}>
                <ScrollView style={{ width: '100%' }}>
                    <List>
                        {items}
                    </List>
                    <Button full success
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