import uuid from 'uuid'
import { SET_HANGBOARD, ADD_STEP } from './Actions'

const initialState = {
    hangboards: [
        {
            id: 0,
            name: 'Beastmaker 1000',
            img: require('../assets/img/beastmaker-1000.jpg'),
            workouts: [
                {
                    id: 0,
                    title: 'Beasty 5A',
                    steps: [
                        {
                            workDuration: 7,
                            restDuration: 3,
                            reps: 5,
                            holds:[
                                0, 1
                            ]
                        },
                        {
                            workDuration: 6,
                            restDuration: 4,
                            reps: 2,
                            holds:[
                                2, 3
                            ]
                        },
                        {
                            workDuration: 5,
                            restDuration: 5,
                            reps: 3,
                            holds:[
                                4, 5
                            ]
                        }
                    ]
                },
                {
                    id: 1,
                    title: 'Beasty 5B',
                    steps: []
                },
                {
                    id: 2,
                    title: 'Beasty 5C',
                    steps: []
                },
                {
                    id: 3,
                    title: 'Beasty 6A',
                    steps: []
                },
                {
                    id: 4,
                    title: 'Beasty 6B',
                    steps: []
                },
                {
                    id: 5,
                    title: 'Beasty 6C',
                    steps: []
                },
                {
                    id: 6,
                    title: 'Beasty 7A',
                    steps: []
                },
                {
                    id: 7,
                    title: 'Beasty 7B',
                    steps: []
                },
                {
                    id: 8,
                    title: 'Beasty 7B+',
                    steps: []
                },
                {
                    id: 9,
                    title: 'Beasty 7C',
                    steps: []
                },
            ]
        },
        {
            id: 1,
            name: 'Beastmaker 2000',
            img: require('../assets/img/beastmaker-2000.jpg'),
            workouts: [
                {
                    id: 0,
                    title: 'Beasty 6Cish',
                    steps: []
                },
                {
                    id: 1,
                    title: 'Beasty 7Aish',
                    steps: []
                },
                {
                    id: 2,
                    title: 'Beasty 7Bish',
                    steps: []
                },
                {
                    id: 3,
                    title: 'Beasty 7Cish',
                    steps: []
                },
                {
                    id: 4,
                    title: 'Beasty 7C+ish',
                    steps: []
                },
                {
                    id: 5,
                    title: 'Beasty 8Aish',
                    steps: []
                },
                {
                    id: 6,
                    title: 'Beasty 8A+ish',
                    steps: []
                },
                {
                    id: 7,
                    title: 'Crimpcentric Hard',
                    steps: []
                },
                {
                    id: 8,
                    title: 'Crimpcentric Medium',
                    steps: []
                }
                ,
                {
                    id: 9,
                    title: 'Pocketcentric Hard',
                    steps: []
                },
                {
                    id: 10,
                    title: 'Pocketcentric Medium',
                    steps: []
                },
                {
                    id: 11,
                    title: 'Slopercentric Hard',
                    steps: []
                },
                {
                    id: 12,
                    title: 'Slopercentric Medium',
                    steps: []
                }
            ]
        }
    ],
    selectedHangboard: 0
}

const initialWorkoutStep = {
    workDuration: 7,
    restDuration: 3,
    reps: 1,
    holds: []
}

const HangboardReducer = (state = initialState, action) => {
    const { type } = action
    switch(type) {
        case SET_HANGBOARD:
            return {
                ...state,
                selectedHangboard: action.hangboard.id
            }
        case ADD_STEP:
            let updatedBoard = Object.assign({}, state.hangboards[state.selectedHangboard])
            const workouts = updatedBoard.workouts.map((workout) => {
                if(workout.id === action.workout.id) {
                    workout.steps.push(initialWorkoutStep)
                }
                return workout
            })
            updatedBoard.workouts = workouts
            
            const boards = state.hangboards.map((board) => {
                if(board.id === updatedBoard.id) {
                    return updatedBoard
                }
                return board
            })

            return {
                ...state,
                hangboards: boards
            }
        default:
            return state
    }
}

export default HangboardReducer