export const SET_HANGBOARD = 'SET_HANGBOARD'
export const ADD_STEP = 'ADD_STEP'

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