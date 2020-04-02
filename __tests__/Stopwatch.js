import React from 'react'
import { setupTimeTravel, timeTravel, frameTime } from '../utils/TimeTravel'
import renderer from 'react-test-renderer'
import Stopwatch from '../components/Stopwatch'

// mock soundmanager so we dont get errors about loading sound files
jest.mock('../utils/SoundManager', () => ({
    play: ()=>{}
}))

beforeEach(setupTimeTravel)

test('<Stopwatch />', () => {
    const tree = renderer.create(<Stopwatch />).toJSON()
})

test('<Stopwatch /> with workDuration 0:03, restDuration 0:03, reps 2', () => {
    const workMinutes = 0
    const workSeconds = 3
    const workTotalMs = ((workMinutes * 60) + workSeconds) * 1000
    const restMinutes = 0
    const restSeconds = 3
    const restTotalMs = ((restMinutes * 60) + restSeconds) * 1000
    const reps = 2

    const buttonTitles = {
        start: "START",
        stop: "STOP"
    }

    const messages = {
        idle: "-",
        countdown: "READY...",
        work: "WORK",
        rest: "REST"
    }
    const pad = (num) => ("0"+num).slice(-2)


    const tree = renderer.create(<Stopwatch 
                                    workMinutes={workMinutes} 
                                    workSeconds={workSeconds} 
                                    restMinutes={restMinutes} 
                                    restSeconds={restSeconds} 
                                    reps={reps} />)

    const instance = tree.root
    const button = instance.findByProps({className: "button"})
    const buttonLabel = instance.findByProps({className: "buttonTitle"})
    const repsLabel = instance.findByProps({className: "reps"})
    const minutesLabel = instance.findByProps({className: "minutes"})
    const secondsLabel = instance.findByProps({className: "seconds"})
    const millisecondsLabel = instance.findByProps({className: "milliseconds"})
    const messageLabel = instance.findByProps({className: "message"})

    const logState = () => {
        console.log(`${buttonLabel.props.children} | ${messageLabel.props.children} | (${repsLabel.props.children}) ${minutesLabel.props.children} : ${secondsLabel.props.children} : ${millisecondsLabel.props.children}`)
    }

    const checkState = (buttonTitle, message, reps, minutes, seconds, milliseconds) => {
        // logState()
        expect(buttonLabel.props.children).toBe(buttonTitle)
        expect(messageLabel.props.children).toBe(message)
        expect(repsLabel.props.children).toBe(reps)
        expect(minutesLabel.props.children).toBe(pad(minutes))
        expect(secondsLabel.props.children).toBe(pad(seconds))
        expect(millisecondsLabel.props.children).toBe(pad(milliseconds))
    }

    checkState(buttonTitles.start, messages.idle, reps, workMinutes, workSeconds, 0)

    // START COUNTDOWN
    button.props.onPress()
    timeTravel(frameTime)  // button press costs 1 frame
    checkState(buttonTitles.stop, messages.countdown, reps, 0, 3, 0)

    // END COUNTDOWN
    timeTravel(3000)    // countdown duration
    checkState(buttonTitles.stop, messages.countdown, reps, 0, 0, 0)
    timeTravel(frameTime)  // state switch costs 1 frame

    // START WORK
    checkState(buttonTitles.stop, messages.work, reps, workMinutes, workSeconds, 0)

    // END WORK
    timeTravel(workTotalMs)
    checkState(buttonTitles.stop, messages.work, reps, 0, 0, 0)
    timeTravel(frameTime)  // state switch costs 1 frame

    // START REST
    checkState(buttonTitles.stop, messages.rest, reps - 1, restMinutes, restSeconds, 0)

    // END REST
    timeTravel(restTotalMs)
    checkState(buttonTitles.stop, messages.rest, reps - 1, 0, 0, 0)
    timeTravel(frameTime)  // state switch costs 1 frame

    // START WORK
    checkState(buttonTitles.stop, messages.work, reps - 1, workMinutes, workSeconds, 0)

    // END WORK
    timeTravel(workTotalMs)
    checkState(buttonTitles.stop, messages.work, reps - 1, 0, 0, 0)
    timeTravel(frameTime)  // state switch costs 1 frame

    // BACK TO INITIAL STATE
    checkState(buttonTitles.start, messages.idle, reps, workMinutes, workSeconds, 0)
})