import React from 'react'
import { setupTimeTravel, timeTravel } from '../utils/TimeTravel'
import renderer from 'react-test-renderer'
import { cleanup } from '@testing-library/react'

// mock soundmanager so we dont get errors about loading sound files
import SoundManager from '../utils/SoundManager'
jest.mock('../utils/SoundManager', () => ({
    play: ()=>{}
}))

import Stopwatch from '../components/Stopwatch'

beforeEach(setupTimeTravel)
afterEach(cleanup)

test('<Stopwatch />', () => {
    const tree = renderer.create(<Stopwatch />).toJSON()
    expect(tree.children.length).toBe(3)
})

test('<Stopwatch /> with workDuration 0:10, restDuration 0:05, reps 2', () => {
    const tree = renderer.create(<Stopwatch workMinutes={0} workSeconds={10} restMinutes={0} restSeconds={5} reps={2} />)
    const instance = tree.root
    const button = instance.findByProps({className: "button"})
    const buttonLabel = instance.findByProps({className: "buttonTitle"})
    const repsLabel = instance.findByProps({className: "reps"})
    const minutesLabel = instance.findByProps({className: "minutes"})
    const secondsLabel = instance.findByProps({className: "seconds"})
    const millisecondsLabel = instance.findByProps({className: "milliseconds"})
    const messageLabel = instance.findByProps({className: "message"})

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

    const logState = () => {
        // console.log(`${buttonLabel.props.children} | ${messageLabel.props.children} | (${repsLabel.props.children}) ${minutesLabel.props.children} : ${secondsLabel.props.children} : ${millisecondsLabel.props.children}`)
    }

    const checkState = (buttonTitle, message, reps, minutes, seconds, milliseconds) => {
        expect(buttonLabel.props.children).toBe(buttonTitle)
        expect(messageLabel.props.children).toBe(message)
        expect(repsLabel.props.children).toBe(reps)
        expect(minutesLabel.props.children).toBe(pad(minutes))
        expect(secondsLabel.props.children).toBe(pad(seconds))
        expect(millisecondsLabel.props.children).toBe(pad(milliseconds))
    }

    checkState(buttonTitles.start, messages.idle, 2, 0, 10, 0)

    // START COUNTDOWN
    button.props.onPress()
    timeTravel(10)  // button press costs 1 frame

    checkState(buttonTitles.stop, messages.countdown, 2, 0, 3, 0)

    timeTravel(3000)    // countdown duration
    timeTravel(10)  // state switch costs 1 frame

    // START WORK
    logState()
    checkState(buttonTitles.stop, messages.work, 2, 0, 10, 0)

    // END WORK
    timeTravel(10000)
    logState()
    checkState(buttonTitles.stop, messages.work, 2, 0, 0, 0)
    timeTravel(10)  // state switch costs 1 frame

    // START REST
    logState()
    checkState(buttonTitles.stop, messages.rest, 1, 0, 5, 0)

    // END REST
    timeTravel(5000)
    checkState(buttonTitles.stop, messages.rest, 1, 0, 0, 0)
    timeTravel(10)  // state switch costs 1 frame

    // START WORK
    logState()
    checkState(buttonTitles.stop, messages.work, 1, 0, 10, 0)

    // END WORK
    timeTravel(10000)
    logState()
    checkState(buttonTitles.stop, messages.work, 1, 0, 0, 0)
    timeTravel(10)  // state switch costs 1 frame

    // BACK TO INITIAL STATE
    logState()
    checkState(buttonTitles.start, messages.idle, 2, 0, 10, 0)
})