export const SET_HANGBOARD = 'SET_HANGBOARD'

export function setHangboard(hangboard) {
    return {
        type: SET_HANGBOARD,
        hangboard
    }
}