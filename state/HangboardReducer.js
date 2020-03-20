const Hangboards = {
    Beastmaker1000: 'beastmaker-1000',
    Beastmaker2000: 'beastmaker-2000'
}

const initialState = {
    hangboard: Hangboards.Beastmaker1000
}

const HangboardReducer = (state = initialState, action) => {
    const { type } = action
    switch(type) {
        case 'SET':
            return {
                ...state,
                hangboard: !action.hangboard
            }
        default:
            return state
    }
}

export default HangboardReducer