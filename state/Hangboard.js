import { SET_HANGBOARD } from './Actions'
import Hangboards from '../model/Hangboards'

const initialState = {
    hangboard: Hangboards.Beastmaker1000
}

const HangboardReducer = (state = initialState, action) => {
    const { type } = action
    switch(type) {
        case SET_HANGBOARD:
            return {
                ...state,
                hangboard: action.hangboard
            }
        default:
            return state
    }
}

export default HangboardReducer