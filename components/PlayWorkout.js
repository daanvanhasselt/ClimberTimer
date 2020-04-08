import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { minutes, seconds, formatTime } from '../utils/Formatting'

import { View, StyleSheet, ScrollView } from 'react-native'
import { Text, List, ListItem } from 'native-base'

import Header from './Header'
import Stopwatch from './Stopwatch'
import HangboardView from './HangboardView'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollviewContainer: {
        flex: 3
    },
    scrollview: {

    },
    stopwatchContainer: {
        flex: 1
    },
    listItem: {
        marginLeft: 0,
        flex:1,
        paddingRight: 0,
        alignItems: 'flex-start',
        flexDirection: 'column',
        borderBottomWidth: 2
    },
    listItemActive: {
        backgroundColor: 'green'
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
function Item({ hangboard, workout, step, active, onLayout }) {
    return (
        <ListItem
            onLayout={event => {
                const layout = event.nativeEvent.layout
                onLayout && onLayout(layout)
            }}
            style={[styles.listItem, active && styles.listItemActive]}>
            <HangboardView
                hangboard={hangboard}
                selectedHolds={step.holds}
                showHolds={true}
                showNonSelectedHolds={false} />
            <View style={styles.itemLabelContainer}>
                <Text style={styles.itemLabel}>{"Work: " + formatTime(step.workDuration).join(':')}</Text>
                <Text style={styles.itemLabel}>{"Rest: " + formatTime(step.restDuration).join(':')}</Text>
                <Text style={styles.itemLabel}>{"Reps: " + step.reps}</Text>
            </View>
            <View style={styles.gripTypeContainer}>
                <Text style={styles.itemLabel}>{step.gripType}</Text>
            </View>
        </ListItem>
    )
}

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
        // TODO: at the end of a set,
        //      if there are more sets
        //          insert rest-only stopwatch with in-between-sets rest duration
        //          start next set
        setCurrentStepIndex((currentStepIndex + 1) % nSteps)
    }

    const stopwatchStopped = () => {
        console.log('stopped by user')
    }

    const [itemLayouts, setItemLayouts] = useState({})
    const scrollRef = useRef(null)

    useEffect(() => {
        const layout = itemLayouts[currentStepIndex]
        if(layout === undefined) return
        scrollRef.current.scrollTo({ x: 0, y: layout.y })
    }, [currentStepIndex])

    let items = workout.steps && workout.steps.map((step, i) => {
        return <Item key={i} hangboard={hangboard} workout={workout} step={step} active={i === currentStepIndex} onLayout={layout => setItemLayouts({...itemLayouts, [i]: layout})} />
    })

    return (
        <>
            <Header title={workout.title} backButton={true} navigation={props.navigation} />
            <View style={styles.container}>
                <View style={styles.scrollviewContainer}>
                    <ScrollView 
                        style={styles.scrollview}
                        ref={scrollRef}
                        scrollToOverflowEnabled={true}>
                        <List>
                            {items}
                        </List>
                    </ScrollView>
                </View>
                <View style={styles.stopwatchContainer}>
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
                </View>
            </View>
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