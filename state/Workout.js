import uuid from 'uuid'
import { ADD_STEP, UPDATE_STEP, REMOVE_STEP } from './Actions'

const initialWorkoutStep = () => ({
    id: uuid(),
    workDuration: 7,
    restDuration: 3,
    reps: 1,
    holds: []
})

const WorkoutReducer = (state = [], action) => {
    const { type } = action
    switch(type) {
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

                    console.log(action.step)
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