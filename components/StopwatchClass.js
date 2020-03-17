import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

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
            if(this.state.state !== states.stopped) {
                // delta time
                const dt = (t - this.lastT) / 1000;

                if(this.state.state == states.countdown) {
                    this.setState({
                        countdownSecondsLeft: this.state.countdownSecondsLeft - dt
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
                else if(this.state.state == states.working) {
                    this.setState({
                        workSecondsLeft: this.state.workSecondsLeft - dt
                    }, ()=>{
                        if(this.state.workSecondsLeft <= 0) {
                            const newRepsLeft = this.state.repsLeft - 1
                            if(newRepsLeft >= 1) {  // if we go to resting we will always work after that
                                console.log('reps left: resting')
                                this.setState({
                                    state: states.resting,
                                    workSecondsLeft: (this.props.workMinutes * 60) + this.props.workSeconds                                    ,
                                    repsLeft: newRepsLeft
                                })
                            }
                            else {
                                console.log('done!')
                                this.setState({ state: states.stopped })
                            }
                        }
                    })
                }
                else if(this.state.state == states.resting) {
                    this.setState({
                        restSecondsLeft: this.state.restSecondsLeft - dt
                    }, ()=>{
                        if(this.state.restSecondsLeft <= 0) {
                            console.log('resting done: working')
                            // after resting we always go to work, regardless of reps
                            this.setState({
                                state: states.working,
                                restSecondsLeft: (this.props.restMinutes * 60) + this.props.restSeconds
                            })
                        }
                    })
                }
            }
            else {
                this.reset()
            }
        }

        this.lastT = t;
        this.frameReq = requestAnimationFrame(this.run)
    }

    pad(num) {
        return ("0"+num).slice(-2)
    }
    
    formatTime(secs) {
        let minutes = Math.floor(secs / 60) % 60
        let seconds = Math.floor(secs) % 60
        let milliseconds = Math.floor((secs % 1) * 100)
        return [this.pad(minutes), this.pad(seconds), this.pad(milliseconds)]
    }

    render() {
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

                <TouchableOpacity 
                 style={styles.buttonContainer}
                    onPress={() => this.setState({ state: running ? states.stopped : states.countdown })}>
                        <Text style={styles.button}>{!running ? "Start" : "Stop"}</Text>
                </TouchableOpacity>
                
                <View style={[styles.timerContainer, timerStyle]}>
                    <View style={styles.repsContainer}>
                        <Text style={[styles.timerText, timerStyle, styles.repsText]}>
                            {this.state.repsLeft}
                        </Text>
                        <Text style={[styles.timerText, timerStyle, styles.repsSubText]}>
                            reps
                        </Text>
                    </View>
                    <Text style={[styles.timerText, timerStyle]}>
                        {m}
                    </Text>
                    <Text style={[styles.timerDivider, timerStyle]}>:</Text>
                    <Text style={[styles.timerText, timerStyle]}>
                        {s}
                    </Text>
                    <Text style={[styles.timerDivider, timerStyle]}>:</Text>
                    <Text style={[styles.timerText, timerStyle]}>
                        {ms}
                    </Text>
                </View>

                <Text style={[styles.title, timerStyle]}>{title}</Text>

            </View>
        )
    }
}

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
        fontFamily: 'monospace'
    },
    timerDivider: {
        fontSize: 60
    },
    title: {
        textAlign: 'center',
        fontSize: 32,
        fontFamily: 'monospace',
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