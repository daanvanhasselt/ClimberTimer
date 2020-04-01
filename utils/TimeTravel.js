// https://stackoverflow.com/questions/42268673/jest-test-animated-view-for-react-native-app
// https://www.benjaminjohnson.me/blog/testing-animations-in-react-native/

import MockDate from 'mockdate'

export const frameTime = 10

export const setupTimeTravel = () => {
    MockDate.set(0)
    jest.useFakeTimers()
  }

export const timeTravel = (time = frameTime) => {
    const tickTravel = () => {
        // The React Animations module looks at the elapsed time for each frame to calculate its
        // new position
        const now = Date.now()
        MockDate.set(new Date(now + frameTime))

        // Run the timers forward
        jest.advanceTimersByTime(frameTime)
    }

    // Step through each of the frames
    const frames = time / frameTime
    let framesEllapsed
    for (framesEllapsed = 0; framesEllapsed < frames; framesEllapsed++) {
        tickTravel()
    }
}