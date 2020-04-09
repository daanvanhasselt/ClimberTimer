import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { minutes, seconds, formatTime } from '../utils/Formatting'

import { View, StyleSheet, ScrollView } from 'react-native'
import { Text, List, ListItem } from 'native-base'
import WorkoutStepListItem from './WorkoutStepListItem'

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
    stopwatchContainer: {
        flex: 1
    },
    listItem: {
        marginLeft: 0,
        flex:1,
        paddingRight: 0,
        alignItems: 'flex-start',
        flexDirection: 'column',
        borderBottomWidth: 2,
    },
    listItemActive: {
        backgroundColor: 'green',
        fontWeight: 'bold',
        color: 'white'
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

function PlayWorkout(props) {
    const hangboard = props.hangboards.find(hangboard => hangboard.id === props.route.params.hangboard)
    const workout = hangboard.workouts.find(workout => workout.id === props.route.params.workout)

    const numSets = props.route.params.sets
    const restBetweenSets = props.route.params.restBetweenSets
    const [restingBetweenSets, setRestingBetweenSets] = useState(false)
    
    const [setsLeft, setSetsLeft] = useState(numSets)
    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    const [highlightStepIndex, setHighlightStepIndex] = useState(0)
    const step = workout.steps[currentStepIndex]
    const nSteps = workout.steps.length

    const workMinutes = minutes(step.workDuration)
    const workSeconds = seconds(step.workDuration)
    const restMinutes = minutes(step.restDuration)
    const restSeconds = seconds(step.restDuration)

    const stepDone = () => {
        if(restingBetweenSets) {
            setRestingBetweenSets(false)
            setCurrentStepIndex(0)
        }
        else {
            if(currentStepIndex + 1 >= nSteps) {    
                if(setsLeft > 1) {
                    setRestingBetweenSets(true)
                    setSetsLeft(setsLeft - 1)
                }
                else {
                    setSetsLeft(numSets)
                }
            }

            const nextStepIndex = (currentStepIndex + 1) % nSteps
            setCurrentStepIndex(nextStepIndex)
        } 
    }

    const stepAlmostDone = () => {
        setHighlightStepIndex(Math.min(highlightStepIndex + 1, nSteps))
    }

    const stopwatchStopped = () => {
        setRestingBetweenSets(false)
        setSetsLeft(numSets)
        setCurrentStepIndex(0)
        setHighlightStepIndex(0)
    }

    const [itemLayouts, setItemLayouts] = useState({})
    const scrollRef = useRef(null)

    useEffect(() => {
        const layout = itemLayouts[highlightStepIndex]
        if(layout === undefined) return
        scrollRef.current.scrollTo({ x: 0, y: layout.y })
    }, [highlightStepIndex])

    useEffect(() => {        
        if(currentStepIndex === 0) {
            setHighlightStepIndex(0)
        }
    }, [currentStepIndex])

    let items = workout.steps && workout.steps.map((step, i) => {
        return <WorkoutStepListItem key={i} hangboard={hangboard} workout={workout} step={step} active={i === highlightStepIndex} onLayout={layout => setItemLayouts({...itemLayouts, [i]: layout})} />
    })

    return (
        <>
            <Header title={workout.title} backButton={true} navigation={props.navigation} />
            <View style={styles.container}>
                <View style={styles.scrollviewContainer}>
                    <ScrollView 
                        ref={scrollRef}
                        scrollToOverflowEnabled={true}>
                        <List>
                            {items}
                        </List>
                    </ScrollView>
                </View>
                <View style={styles.stopwatchContainer}>
                    {restingBetweenSets ? 
                    <Stopwatch
                        skipCountdown={true}
                        autoStart={true}
                        includeLastRest={true}
                        showSetsLeft={true}
                        setsLeft={setsLeft}
                        workMinutes={0}
                        workSeconds={0}
                        restMinutes={minutes(restBetweenSets)}
                        restSeconds={seconds(restBetweenSets)}
                        reps={1}
                        onFinish={stepDone}
                        onStop={stopwatchStopped} />
                    :
                    <Stopwatch
                        skipCountdown={currentStepIndex !== 0 || (setsLeft !== numSets && setsLeft >= 1)}
                        autoStart={currentStepIndex !== 0 || setsLeft !== numSets && setsLeft >= 1}
                        includeLastRest={currentStepIndex < nSteps - 1}
                        showSetsLeft={true}
                        setsLeft={setsLeft}
                        workMinutes={workMinutes}
                        workSeconds={workSeconds}
                        restMinutes={restMinutes}
                        restSeconds={restSeconds}
                        reps={step.reps}
                        onPreFinish={stepAlmostDone}
                        onFinish={stepDone}
                        onStop={stopwatchStopped} />
                    }
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