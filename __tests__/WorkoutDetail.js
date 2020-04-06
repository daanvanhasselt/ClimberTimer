import React from 'react'
import renderer, { act } from 'react-test-renderer'

import { Provider as ReduxProvider } from 'react-redux'
import { RootStore } from '../state/TestStore'

import WorkoutDetail from '../components/WorkoutDetail'

const state = RootStore.getState()
const hangboard = state.hangboard.hangboards[state.hangboard.selectedHangboard]
const workout = hangboard.workouts[0]

test('<WorkoutDetail /> renders 3 items', () => {
    const tree = renderer.create((
        <ReduxProvider store={RootStore}>
            <WorkoutDetail route={{params: { workout } }} />
        </ReduxProvider>
    ))
    
    const stepsList = tree.root.findByProps({className: "steps"})
    expect(stepsList.props.children.length).toBe(3)
})

test('<WorkoutDetail /> renders more items after clicking add button', () => {
    const tree = renderer.create((
        <ReduxProvider store={RootStore}>
            <WorkoutDetail route={{params: { workout } }} />
        </ReduxProvider>
    ))
    
    const stepsList = tree.root.findByProps({className: "steps"})
    const addStepButton = tree.root.findByProps({className: "addStep"})
    
    act(() => {
        addStepButton.props.onPress()
    })
    expect(stepsList.props.children.length).toBe(4)

    act(() => {
        addStepButton.props.onPress()
    })
    expect(stepsList.props.children.length).toBe(5)
})