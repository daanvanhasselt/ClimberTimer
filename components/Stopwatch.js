import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import SoundManager from '../utils/SoundManager'

const states = {
    stopped: 0,
    countdown: 1,
    working: 2,
    resting: 3
}

class Stopwatch extends React.Component {
    constructor() {
        super()
        this.countdownDuration = 3
        this.state = {
            state: states.stopped,
            countdownSecondsLeft: this.countdownDuration,
            workSecondsLeft: 0,
            restSecondsLeft: 0,
            repsLeft: 0
        }

        this.run = this.run.bind(this)
    }

    reset() {
        this.setState({
            countdownSecondsLeft: this.countdownDuration,
            workSecondsLeft: (this.props.workMinutes * 60) + this.props.workSeconds,
            restSecondsLeft: (this.props.restMinutes * 60) + this.props.restSeconds,
            repsLeft: this.props.reps
        })
    }

    componentDidMount() {
        this.reset()
        this.frameReq = requestAnimationFrame(this.run)        
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.frameReq)
    }

    run(t) {
        if (this.lastT != undefined) {
            if(this.state.state !== states.stopped) {   // is the stopwatch running?
                // delta time
                const dt = (t - this.lastT) / 1000;

                // countdown
                if(this.state.state == states.countdown) {
                    // trigger audio
                    const newT = this.state.countdownSecondsLeft - dt
                    if(Math.floor(this.state.countdownSecondsLeft) !== Math.floor(newT)) {
                        if(Math.ceil(newT) > 0) {
                            SoundManager.play('countdown')
                        }
                        else {
                            SoundManager.play('work')
                        }
                    }

                    // update state
                    this.setState({
                        countdownSecondsLeft: newT
                    }, ()=>{
                        if(this.state.countdownSecondsLeft <= 0) {
                            console.log('countdown done: working')
                            // after countdown we always go to work, regardless of reps
                            this.setState({
                                state: states.working
                            })
                        }
                    })
                }
                // working
                else if(this.state.state == states.working) {
                    // trigger audio
                    const newT = this.state.workSecondsLeft - dt
                    if(Math.floor(this.state.workSecondsLeft) !== Math.floor(newT)) {
                        if(Math.ceil(newT) > 0 && Math.ceil(newT) <= 3) {
                            SoundManager.play('countdown')
                        }
                        else if(Math.ceil(newT) == 0) {
                            SoundManager.play('rest')
                        }
                    }

                    // update state
                    this.setState({
                        workSecondsLeft: newT
                    }, ()=>{
                        if(this.state.workSecondsLeft <= 0) {
                            const newRepsLeft = this.state.repsLeft - 1
                            if(newRepsLeft >= 1) {  // skip the last rest since we're done
                                console.log('reps left: resting')
                                this.setState({
                                    state: states.resting,
                                    workSecondsLeft: (this.props.workMinutes * 60) + this.props.workSeconds,    // reset initial work seconds
                                    repsLeft: newRepsLeft
                                })
                            }
                            else {
                                console.log('done!')
                                this.setState({ state: states.stopped })
                                this.reset()
                            }
                        }
                    })
                }
                // resting
                else if(this.state.state == states.resting) {
                    // trigger audio
                    const newT = this.state.restSecondsLeft - dt
                    if(Math.floor(this.state.restSecondsLeft) !== Math.floor(newT)) {
                        if(Math.ceil(newT) > 0 && Math.ceil(newT) <= 3) {
                            SoundManager.play('countdown')
                        }
                        else if(Math.ceil(newT) == 0) {
                            SoundManager.play('work')
                        }
                    }

                    // update state
                    this.setState({
                        restSecondsLeft: newT
                    }, ()=>{
                        if(this.state.restSecondsLeft <= 0) {
                            console.log('resting done: working')
                            // after resting we always go to work, regardless of reps
                            this.setState({
                                state: states.working,
                                restSecondsLeft: (this.props.restMinutes * 60) + this.props.restSeconds // reset initial rest seconds
                            })
                        }
                    })
                }
            }
            else {
                // reset if we're not running so we stay up to date with props
                this.reset()
            }
        }

        // update lastT and request next frame
        this.lastT = t;
        this.frameReq = requestAnimationFrame(this.run)
    }

    // 3 -> 03
    pad(num) {
        return ("0"+num).slice(-2)
    }
    
    // number of seconds -> [mm, ss, ms]
    formatTime(secs) {
        let minutes = Math.floor(secs / 60) % 60
        let seconds = Math.floor(secs) % 60
        let milliseconds = Math.floor((secs % 1) * 100)
        return [this.pad(minutes), this.pad(seconds), this.pad(milliseconds)]
    }

    render() {
        // cherry pick our data based on state
        const running = this.state.state !== states.stopped
        const [countdownMinutes, countdownSeconds, countdownMilliseconds] = this.formatTime(this.state.countdownSecondsLeft)
        const [workMinutes, workSeconds, workMilliseconds] = this.formatTime(this.state.workSecondsLeft)
        const [restMinutes, restSeconds, restMilliseconds] = this.formatTime(this.state.restSecondsLeft)
        let m, s, ms, timerStyle, title;

        switch(this.state.state) {
            case states.countdown:
                m = countdownMinutes
                s = countdownSeconds
                ms = countdownMilliseconds
                timerStyle = styles.countdown
                title = 'READY...'
            break
            case states.resting:
                m = restMinutes
                s = restSeconds
                ms = restMilliseconds
                timerStyle = styles.resting
                title = 'REST'
            break
            case states.working:
                m = workMinutes
                s = workSeconds
                ms = workMilliseconds
                timerStyle = styles.working
                title = 'WORK'
            break
            case states.stopped:
                m = workMinutes
                s = workSeconds
                ms = workMilliseconds
                timerStyle = styles.working
                title = '-'
        }
        return (
            <View style={styles.contentContainer}>

                {/* custom button */}
                <TouchableOpacity 
                    className="button"
                    style={styles.buttonContainer}
                    onPress={() => this.setState({ state: running ? states.stopped : states.countdown })}>
                        <Text className="buttonTitle" style={styles.button}>{!running ? "START" : "STOP"}</Text>
                </TouchableOpacity>
                
                {/* timers */}
                <View style={[styles.timerContainer, timerStyle]}>
                    {/* reps */}
                    <View style={styles.repsContainer}>
                        <Text className="reps" style={[styles.timerText, timerStyle, styles.repsText]}>
                            {this.state.repsLeft}
                        </Text>
                        <Text style={[styles.timerText, timerStyle, styles.repsSubText]}>
                            reps
                        </Text>
                    </View>

                    {/* timers */}
                    <Text className="minutes" style={[styles.timerText, timerStyle]}>
                        {m}
                    </Text>
                    <Text style={[styles.timerDivider, timerStyle]}>:</Text>
                    <Text className="seconds" style={[styles.timerText, timerStyle]}>
                        {s}
                    </Text>
                    <Text style={[styles.timerDivider, timerStyle]}>:</Text>
                    <Text className="milliseconds" style={[styles.timerText, timerStyle]}>
                        {ms}
                    </Text>
                </View>

                {/* bottom text */}
                <Text className="message" style={[styles.title, timerStyle]}>{title}</Text>

            </View>
        )
    }
}

// styles

const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: 'column',
        height: '100%'
    },
    buttonContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#198fe3',
    },
    button: {
        padding: 12,
        color: 'white',
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    timerContainer: {
        flexDirection: 'row',
        flex: 2
    },
    repsContainer: {
        padding: 10
    },
    repsText: {
        fontSize: 32
    },
    repsSubText: {
        fontSize: 16,
    },
    timerText: {
        fontSize: 60,
        flex: 1,
        textAlign: 'center',
        fontFamily: 'Roboto'
    },
    timerDivider: {
        fontSize: 60
    },
    title: {
        textAlign: 'center',
        fontSize: 32,
        fontFamily: 'Roboto',
        flex: 1,
    },
    countdown: {
        backgroundColor: 'orange',
        color: 'black'
    },
    resting: {
        backgroundColor: 'blue',
        color: 'white'
    },
    working: {
        backgroundColor: 'green',
        color: 'white'
    }
})

export default Stopwatch