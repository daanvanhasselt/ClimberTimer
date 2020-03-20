const initialState = {
    visibility: false
}

const TestReducer = (state = initialState, action) => {
    const { type } = action
    switch(type) {
        case 'TOGGLE':
            return {
                ...state,
                visibility: !state.visibility
            }
        default:
            return state
    }
    return state
}

export default TestReducer