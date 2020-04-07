export const SET_HANGBOARD = 'SET_HANGBOARD'

export const ADD_WORKOUT = 'ADD_WORKOUT'
export const UPDATE_WORKOUT = 'UPDATE_WORKOUT'
export const REMOVE_WORKOUT = 'REMOVE_WORKOUT'

export const ADD_STEP = 'ADD_STEP'
export const UPDATE_STEP = 'UPDATE_STEP'
export const REMOVE_STEP = 'REMOVE_STEP'

export const SET_HOLD_SELECTION = 'SET_HOLD_SELECTION'
export const TOGGLE_HOLD_SELECTION = 'TOGGLE_HOLD_SELECTION'
export const CLEAR_HOLD_SELECTION = 'CLEAR_HOLD_SELECTION'

export function setHangboard(hangboard) {
    return {
        type: SET_HANGBOARD,
        hangboard
    }
}

export function addWorkout(hangboard) {
    return {
        type: ADD_WORKOUT,
        hangboard
    }
}

export function updateWorkout(hangboard, workout) {
    return {
        type: UPDATE_WORKOUT,
        hangboard,
        workout
    }
}

export function removeWorkout(hangboard, workout) {
    return {
        type: REMOVE_WORKOUT,
        hangboard,
        workout
    }
}

export function addStep(hangboard, workout) {
    return {
        type: ADD_STEP,
        hangboard,
        workout
    }
}

export function updateStep(hangboard, workout, step) {
    return {
        type: UPDATE_STEP,
        hangboard,
        workout,
        step
    }
}

export function removeStep(hangboard, workout, step) {
    return {
        type: REMOVE_STEP,
        hangboard,
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