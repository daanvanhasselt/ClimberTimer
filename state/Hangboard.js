import uuid from 'uuid'
import {    SET_HANGBOARD, 
            ADD_WORKOUT, UPDATE_WORKOUT, REMOVE_WORKOUT,
            ADD_STEP, UPDATE_STEP, REMOVE_STEP,
            SET_HOLD_SELECTION, CLEAR_HOLD_SELECTION, TOGGLE_HOLD_SELECTION 
        } from './Actions'
import initialState from './HangboardData'
import WorkoutReducer from './Workout'

const HangboardReducer = (state = initialState, action) => {
    const { type } = action
    switch(type) {
        
        case SET_HANGBOARD:
            // return state with new selected hangboard
            return {
                ...state,
                selectedHangboard: action.hangboard
            }

        case ADD_WORKOUT:
        case UPDATE_WORKOUT:
        case REMOVE_WORKOUT:
        case ADD_STEP:
        case UPDATE_STEP:
        case REMOVE_STEP:
            {
                return {
                    ...state,
                    hangboards: state.hangboards.map(hangboard => {
                        if(hangboard.id !== state.selectedHangboard) return hangboard

                        return { 
                            ...hangboard, 
                            workouts: WorkoutReducer(hangboard.workouts, action)
                        }
                    })
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