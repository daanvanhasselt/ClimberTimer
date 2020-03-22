import uuid from 'uuid'
import { SET_HANGBOARD, ADD_STEP, UPDATE_STEP } from './Actions'

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
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 5,
                            holds:[
                                0, 1
                            ]
                        },
                        {
                            id: 1,
                            workDuration: 6,
                            restDuration: 4,
                            reps: 2,
                            holds:[
                                2, 3
                            ]
                        },
                        {
                            id: 2,
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
            return {
                ...state,
                selectedHangboard: action.hangboard.id
            }

        case ADD_STEP:
            {
                let updatedBoard = Object.assign({}, state.hangboards[state.selectedHangboard])
                const workouts = updatedBoard.workouts.map((workout) => {
                    if(workout.id === action.workout) {
                        workout.steps.push(initialWorkoutStep())
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
            }
        case UPDATE_STEP:
            {
                console.log('UPDATE')
                console.log(action)
                let updatedBoard = Object.assign({}, state.hangboards[state.selectedHangboard])
                const workouts = updatedBoard.workouts.map((workout) => {
                    if(workout.id === action.workout) {
                        console.log('workout hit')
                        const steps = workout.steps.map((step) => {
                            if(step.id == action.step.id) {
                                console.log('step hit')
                                step.workDuration = action.step.workDuration
                                step.restDuration = action.step.restDuration
                                step.reps = action.step.reps
                            }
                            return step
                        })
                        workout.steps = steps
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
            }
        default:
            return state
    }
}

export default HangboardReducer