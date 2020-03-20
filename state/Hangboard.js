const Hangboards = {
    Beastmaker1000: 'Beastmaker 1000',
    Beastmaker2000: 'Beastmaker 2000'
}

const initialState = {
    hangboard: Hangboards.Beastmaker1000
}

const HangboardReducer = (state = initialState, action) => {
    const { type } = action
    switch(type) {
        case 'SET_HANGBOARD':
            return {
                ...state,
                hangboard: action.hangboard
            }
        default:
            return state
    }
}

export default HangboardReducer
export { Hangboards }