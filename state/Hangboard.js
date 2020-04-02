import uuid from 'uuid'
import { SET_HANGBOARD, ADD_STEP, UPDATE_STEP, SET_HOLD_SELECTION, CLEAR_HOLD_SELECTION, TOGGLE_HOLD_SELECTION } from './Actions'
import initialState from './HangboardData'

const initialWorkoutStep = () => ({
    id: uuid(),
    workDuration: 7,
    restDuration: 3,
    reps: 1,
    holds: []
})

const HangboardReducer = (state = initialState, action) => {
    const { type } = action
    switch(type) {
        
        case SET_HANGBOARD:
            // return state with new selected hangboard
            return {
                ...state,
                selectedHangboard: action.hangboard
            }

        case ADD_STEP:
            {
                // find the selected board
                let updatedBoard = Object.assign({}, state.hangboards[state.selectedHangboard])

                // update its workouts
                updatedBoard.workouts = updatedBoard.workouts.map((workout) => {
                    // only update the relevant workout
                    if(workout.id === action.workout) {
                        // add a new step
                        workout.steps.push(initialWorkoutStep())
                    }
                    return workout
                })
                
                // create new hangboards array
                const boards = state.hangboards.map((board) => {
                    if(board.id === updatedBoard.id) {
                        return updatedBoard
                    }
                    return board
                })

                // return state with new boards
                return {
                    ...state,
                    hangboards: boards
                }
            }
        case UPDATE_STEP:
            {
                // find the selected board
                let updatedBoard = Object.assign({}, state.hangboards[state.selectedHangboard])

                // update its workouts
                updatedBoard.workouts = updatedBoard.workouts.map((workout) => {
                    // only update the relevant workout
                    if(workout.id === action.workout) {
                        // update the workouts' steps
                        workout.steps = workout.steps.map((step) => {
                            // only update the relevant step
                            if(step.id == action.step.id) {
                                step.workDuration = action.step.workDuration
                                step.restDuration = action.step.restDuration
                                step.reps = action.step.reps
                            }
                            return step
                        })
                    }
                    return workout
                })

                // create new hangboards array
                const boards = state.hangboards.map((board) => {
                    if(board.id === updatedBoard.id) {
                        return updatedBoard
                    }
                    return board
                })

                // return state with new boards
                return {
                    ...state,
                    hangboards: boards
                }
            }
        case SET_HOLD_SELECTION:
            {
                // find the selected board
                let updatedBoard = Object.assign({}, state.hangboards[state.selectedHangboard])

                // update its selected holds
                updatedBoard.selectedHolds = action.holds

                // create new hangboards array
                const boards = state.hangboards.map((board) => {
                    if(board.id === updatedBoard.id) {
                        return updatedBoard
                    }
                    return board
                })

                // return state with new boards
                return {
                    ...state,
                    hangboards: boards
                }
            }
        case CLEAR_HOLD_SELECTION:
            {
                // find the selected board
                let updatedBoard = Object.assign({}, state.hangboards[state.selectedHangboard])

                // update its selected holds
                updatedBoard.selectedHolds = []

                // create new hangboards array
                const boards = state.hangboards.map((board) => {
                    if(board.id === updatedBoard.id) {
                        return updatedBoard
                    }
                    return board
                })

                // return state with new boards
                return {
                    ...state,
                    hangboards: boards
                }
            }
        case TOGGLE_HOLD_SELECTION:
            {
                // find the selected board
                let updatedBoard = Object.assign({}, state.hangboards[state.selectedHangboard])

                // update its selected holds
                let searchIndex = updatedBoard.selectedHolds.indexOf(action.hold)
                if(searchIndex === -1) {
                    updatedBoard.selectedHolds.push(action.hold)
                }
                else {
                    updatedBoard.selectedHolds.splice(searchIndex, 1)
                }

                // create new hangboards array
                const boards = state.hangboards.map((board) => {
                    if(board.id === updatedBoard.id) {
                        return updatedBoard
                    }
                    return board
                })

                // return state with new boards
                return {
                    ...state,
                    hangboards: boards
                }
            }
        default:
            return state
    }
}

export default HangboardReducer