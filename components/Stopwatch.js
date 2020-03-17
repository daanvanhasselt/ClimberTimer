import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    timerText: {

    }
})

const states = {
    resting: 0,
    working: 1
}

function Stopwatch({ workMinutes, workSeconds, restMinutes, restSeconds, reps }) {
    const [running, setRunning] = useState(false)
    const [workState, setWorkState] = useState(states.working)
    const [workSecondsLeft, setWorkSecondsLeft] = useState((workMinutes * 60) + workSeconds)
    const [restSecondsLeft, setRestSecondsLeft] = useState((restMinutes * 60) + restSeconds)
    const [repsLeft, setRepsLeft] = useState(reps)
    const [lastT, setLastT] = useState(0)

    
    const frameReqRef = useRef()
    const previousTimeRef = useRef()

    function reset() {
        setWorkState(states.working)
        setWorkSecondsLeft((workMinutes * 60) + workSeconds)
        setRestSecondsLeft((restMinutes * 60) + restSeconds)
        setRepsLeft(reps)
    }

    useLayoutEffect(() => {
        reset()
        frameReqRef.current = requestAnimationFrame(run)
        return () => cancelAnimationFrame(frameReqRef.current)
    }, [running])


    function run(t) {
        if (previousTimeRef.current != undefined) {
            if(running) {
                // delta time
                const dt = (t - previousTimeRef.current) / 1000;

                // count down
                setWorkState(prev => {
                    let workState = prev
                
                    if(workState == states.working) {
                        setWorkSecondsLeft(prev => {    // IMPORTANT use the function setter to prevent stale data
                            const workSecondsLeft = prev - dt

                            // end of countdown
                            if(workSecondsLeft <= 0) {
                                // if theres more reps: rest, decrease reps left, and reset work seconds
                                if(repsLeft) {
                                    console.log('reps left: resting')
                                    workState = states.resting
                                    console.log(workState)
                                    setWorkSecondsLeft((workMinutes * 60) + workSeconds)
                                }
                                else {
                                    console.log('done!')
                                    setRunning(false)
                                }
                            }
                            return workSecondsLeft
                        })   
                    }
                    else {
                        setRestSecondsLeft(prev => {
                            const restSecondsLeft = prev - dt

                            // end of countdown
                            if(restSecondsLeft <= 0) {
                                console.log('resting done: working')
                                // after resting we always go to work, regardless of reps
                                workState = states.working
                                // also reset rest seconds for next run
                                setRestSecondsLeft((restMinutes * 60) + restSeconds)
                            }

                            return restSecondsLeft
                        })
                    }

                    console.log(`:  ${workState}`)
                    return workState
                })
            }
        }

        previousTimeRef.current = t;
        frameReqRef.current = requestAnimationFrame(run)
    }

    return (
        <View>
            <Button 
                title={!running ? "Start" : "Stop"}
                onPress={() => setRunning(!running)} />
            <Text style={styles.timerText}>
                {running ? "running" : "stopped"}
            </Text>
            <Text style={styles.timerText}>
                {workSecondsLeft}
            </Text>
            <Text style={styles.timerText}>
                {restSecondsLeft}
            </Text>
        </View>
    )
}

export default Stopwatch