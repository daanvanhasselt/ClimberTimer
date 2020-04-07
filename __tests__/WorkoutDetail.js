import React from 'react'
import renderer, { act } from 'react-test-renderer'

import { Provider as ReduxProvider } from 'react-redux'
import { RootStore } from '../state/TestStore'

import WorkoutDetail from '../components/WorkoutDetail'

const state = RootStore.getState()
const hangboard = state.hangboard.hangboards[state.hangboard.selectedHangboard]
const lockedWorkout = hangboard.workouts[0]
const customWorkout = hangboard.workouts[1]

test('<WorkoutDetail /> renders a listitem for each step for a custom workout', () => {
    const tree = renderer.create((
        <ReduxProvider store={RootStore}>
            <WorkoutDetail route={{params: { workout: customWorkout.id } }} />
        </ReduxProvider>
    ))
    
    const stepsList = tree.root.findByProps({className: "steps"})
    expect(stepsList.props.children.length).toBe(customWorkout.steps.length)
})

test('<WorkoutDetail /> renders a listitem for each step and 1 listitem for locked workout params', () => {
    const tree = renderer.create((
        <ReduxProvider store={RootStore}>
            <WorkoutDetail route={{params: { workout: lockedWorkout.id } }} />
        </ReduxProvider>
    ))
    
    const stepsList = tree.root.findByProps({className: "steps"})
    expect(stepsList.props.children.length).toBe(lockedWorkout.steps.length + 1)
})

test('<WorkoutDetail /> renders more items after clicking add button on custom workout', () => {
    const tree = renderer.create((
        <ReduxProvider store={RootStore}>
            <WorkoutDetail route={{params: { workout: customWorkout.id } }} />
        </ReduxProvider>
    ))
    
    const numSteps = customWorkout.steps.length
    const stepsList = tree.root.findByProps({className: "steps"})
    const addStepButton = tree.root.findByProps({className: "addStep"})
    
    act(() => {
        addStepButton.props.onPress()
    })
    expect(stepsList.props.children.length).toBe(numSteps + 1)

    act(() => {
        addStepButton.props.onPress()
    })
    expect(stepsList.props.children.length).toBe(numSteps + 2)
})

test('<WorkoutDetail /> does not show an add button on locked workout', () => {
    const tree = renderer.create((
        <ReduxProvider store={RootStore}>
            <WorkoutDetail route={{params: { workout: lockedWorkout.id } }} />
        </ReduxProvider>
    ))
    
    expect(tree.root.findAllByProps({className: "addStep"}).length).toBe(0)
})