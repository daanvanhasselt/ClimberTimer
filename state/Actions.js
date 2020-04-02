export const SET_HANGBOARD = 'SET_HANGBOARD'
export const ADD_STEP = 'ADD_STEP'
export const UPDATE_STEP = 'UPDATE_STEP'

export const SET_HOLD_SELECTION = 'SET_HOLD_SELECTION'
export const TOGGLE_HOLD_SELECTION = 'TOGGLE_HOLD_SELECTION'
export const CLEAR_HOLD_SELECTION = 'CLEAR_HOLD_SELECTION'

export function setHangboard(hangboard) {
    return {
        type: SET_HANGBOARD,
        hangboard
    }
}

export function addStep(workout) {
    return {
        type: ADD_STEP,
        workout
    }
}

export function updateStep(workout, step) {
    return {
        type: UPDATE_STEP,
        workout,
        step
    }
}

export function setHoldSelection(hangboard, holds) {
    return {
        type: SET_HOLD_SELECTION,
        hangboard,
        holds
    }
}

export function toggleHoldSelection(hangboard, hold) {
    return {
        type: TOGGLE_HOLD_SELECTION,
        hangboard,
        hold
    }
}

export function clearHoldSelection(hangboard) {
    return {
        type: CLEAR_HOLD_SELECTION,
        hangboard
    }
}