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
                return {
                    ...state,
                    hangboards: state.hangboards.map(hangboard => {
                        if(hangboard.id !== state.selectedHangboard) return hangboard

                        return {
                            ...hangboard,
                            selectedHolds: action.holds
                        }
                    })
                }
            }
        case CLEAR_HOLD_SELECTION:
            {
                const clearAction = {
                    type: SET_HOLD_SELECTION,
                    holds: []
                }
                return HangboardReducer(state, clearAction)
            }
        case TOGGLE_HOLD_SELECTION:
            {
                return {
                    ...state,
                    hangboards: state.hangboards.map(hangboard => {
                        if(hangboard.id !== state.selectedHangboard) return hangboard

                        const holds = hangboard.selectedHolds

                        // toggle the hold
                        let searchIndex = holds.indexOf(action.hold)
                        if(searchIndex === -1) holds.push(action.hold)
                        else holds.splice(searchIndex, 1)

                        return {
                            ...hangboard,
                            selectedHolds: holds
                        }
                    })
                }
            }
        default:
            return state
    }
}

export default HangboardReducer