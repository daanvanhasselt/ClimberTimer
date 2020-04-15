import uuid from 'uuid'
import { ADD_STEP, UPDATE_STEP, REMOVE_STEP, ADD_WORKOUT, UPDATE_WORKOUT, REMOVE_WORKOUT } from './Actions'
import GripTypes from './GripTypes'

const initialWorkout = () => ({
    id: uuid(),
    locked: false,
    title: "Custom workout",
    steps: []
})

const initialWorkoutStep = () => ({
    id: uuid(),
    workDuration: 7,
    restDuration: 3,
    reps: 1,
    holds: [],
    gripType: GripTypes.any
})

const WorkoutReducer = (state = [], action) => {
    const { type } = action
    switch(type) {
        case ADD_WORKOUT:
            {
                return [...state, initialWorkout()]
            }

        case UPDATE_WORKOUT:
            {
                console.log(action)
                return state.map(workout => {
                    if(workout.id !== action.workout.id) return workout
                    return { ...workout, ...action.workout }
                })
            }
        
        case REMOVE_WORKOUT:
            {
                return state.filter(workout => (workout.id !== action.workout.id))
            }
        
        case ADD_STEP:
            {
                return state.map(workout => {
                    if(workout.id !== action.workout) return workout

                    return {
                        ...workout,
                        steps: [...workout.steps, initialWorkoutStep()]
                    }
                })
            }

        case UPDATE_STEP:
            {
                return state.map(workout => {
                    if(workout.id !== action.workout) return workout

                    return {
                        ...workout,
                        steps: workout.steps.map(step => {
                            if(step.id !== action.step.id) return step
                            return { ...step, ...action.step }
                        })
                    }
                })
            }

        case REMOVE_STEP:
            {
                return state.map(workout => {
                    if(workout.id !== action.workout) return workout

                    return {
                        ...workout,
                        steps: workout.steps.filter(step => (step.id !== action.step.id))
                    }
                })
            }

        default:
            return state
    }
}

export default WorkoutReducer