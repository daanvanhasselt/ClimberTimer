import React from 'react'
import DurationPicker from './DurationPicker'

function WorkoutStepEditor(props) {
    return (
    <>
        <DurationPicker 
            title="Work duration" 
            minutes={props.workMinutes}
            setMinutes={props.setWorkMinutes}
            seconds={props.workSeconds}
            setSeconds={props.setWorkSeconds} />

        <DurationPicker 
            title="Rest duration" 
            minutes={props.restMinutes}
            setMinutes={props.setRestMinutes}
            seconds={props.restSeconds}
            setSeconds={props.setRestSeconds} />

        <DurationPicker 
            title="Reps" 
            minutes={props.reps}
            setMinutes={props.setReps} />
            
    </>)
}

export default WorkoutStepEditor