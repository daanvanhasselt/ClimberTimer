import React from 'react'
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake'
import { View, StyleSheet, TouchableOpacity, TouchableOpacityBase } from 'react-native'
import { Text, Icon } from 'native-base'
import SoundManager from '../utils/SoundManager'
import { pad, formatTime } from '../utils/Formatting'

const states = {
    initial: -1,
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
            state: states.initial,
            countdownSecondsLeft: this.countdownDuration,
            workSecondsLeft: 0,
            restSecondsLeft: 0,
            repsLeft: 0
        }

        this.run = this.run.bind(this)
    }

    reset(callback) {
        this.setState({
            countdownSecondsLeft: this.countdownDuration,
            workSecondsLeft: (this.props.workMinutes * 60) + this.props.workSeconds,
            restSecondsLeft: (this.props.restMinutes * 60) + this.props.restSeconds,
            repsLeft: this.props.reps
        }, callback)
    }

    componentDidMount() {
        this.reset()
        this.frameReq = requestAnimationFrame(this.run)
        activateKeepAwake()
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.frameReq)
        deactivateKeepAwake()
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.workMinutes !== this.props.workMinutes || prevProps.workSeconds !== this.props.workSeconds ||
            prevProps.restMinutes !== this.props.restMinutes || prevProps.restSeconds !== this.props.restSeconds ||
            prevProps.reps !== this.props.reps) {
                this.reset()
        }
        if(prevProps.autoStart !== this.props.autoStart) {
            if(this.props.autoStart && (this.state.state === states.stopped || this.state.state === states.initial)) {
                this.setState({
                    state: states.working
                })
            }
            else if(!this.props.autoStart && (this.state.state !== states.stopped && this.state.state !== states.initial)) {
                this.setState({
                    state: states.initial
                })
            }
        }
    }

    run(t) {
        const finish = () => {            
            this.setState({ state: states.initial }, () => {
                this.reset(() => {
                    if(this.props.onFinish) {
                        this.props.onFinish()
                    }
                })
            })
        }

        if (this.lastT != undefined) {
            if(this.state.state !== states.stopped && this.state.state !== states.initial) {   // is the stopwatch running?
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
                            if(newRepsLeft >= 1 || ((newRepsLeft >= 0 || this.props.reps <= 1) && this.props.includeLastRest)) {  // potentially skip the last rest since we're done
                                if(newRepsLeft <= 0 && this.props.includeLastRest && this.props.onPreFinish) {
                                    this.props.onPreFinish()
                                }
                                this.setState({
                                    state: states.resting,
                                    workSecondsLeft: (this.props.workMinutes * 60) + this.props.workSeconds,    // reset initial work seconds
                                    repsLeft: newRepsLeft
                                })
                            }
                            else {
                                if(this.props.includeLastRest && this.props.onPreFinish) {
                                    this.props.onPreFinish()
                                }

                                finish()
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
                            // after resting we go to work if there is any
                            if(this.state.repsLeft > 0) {
                                this.setState({
                                    state: states.working,
                                    restSecondsLeft: (this.props.restMinutes * 60) + this.props.restSeconds // reset initial rest seconds
                                })
                            }
                            else {
                                finish()
                            }
                        }
                    })
                }
            }
            else {
                // reset if we're not running so we stay up to date with props
                if(this.state.state === states.initial) {
                    if(this.props.autoStart) {
                        this.setState({
                            state: states.working
                        })
                    }
                    else {
                        this.reset()
                    }
                }
            }
        }

        // update lastT and request next frame
        this.lastT = t;
        this.frameReq = requestAnimationFrame(this.run)
    }

    render() {
        // cherry pick our data based on state
        const running = (this.state.state !== states.stopped) && (this.state.state !== states.initial)
        const [countdownMinutes, countdownSeconds, countdownMilliseconds] = formatTime(this.state.countdownSecondsLeft)
        const [workMinutes, workSeconds, workMilliseconds] = formatTime(this.state.workSecondsLeft)
        const [restMinutes, restSeconds, restMilliseconds] = formatTime(this.state.restSecondsLeft)
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
                title = 'DONE'
            break
            case states.initial:
                m = workMinutes
                s = workSeconds
                ms = workMilliseconds
                timerStyle = styles.working
                title = 'GET READY'
        }
        return (
            <View style={styles.contentContainer}>
               
               {/* custom button */}
               <TouchableOpacity 
                    className="button"
                    style={styles.buttonContainer}
                    onPress={() => {
                        if(running) {
                            if(this.props.onStop) this.props.onStop()
                            this.reset(() => {
                                this.setState({ state: states.initial })
                            })
                        }
                        else {
                            this.setState({ state: (this.props.skipCountdown ? states.working : states.countdown) })
                        }
                    }}>
                        
                    <Text className="buttonTitle" style={styles.button}>{!running ? "START" : "STOP"}</Text>
                </TouchableOpacity>

               {/* message */}
               <View style={[styles.firstRow, timerStyle]}>
                    <View style={[styles.repsContainer]}>
                        {this.props.showSetsLeft && (
                            <>
                                <Text className="sets" style={[styles.timerText, timerStyle, styles.setsText]}>
                                    {this.props.setsLeft}
                                </Text>
                                <Icon style={[styles.setsIcon, timerStyle]} name="refresh-circle"/> 
                            </>)
                        }
                    </View>
                    <View style={[styles.titleContainer]}>
                        <Text className="message" style={[styles.title, timerStyle]}>{title}</Text>
                    </View>
                    <View style={[styles.repsContainer]}>
                        <Text className="reps" style={[styles.timerText, timerStyle, styles.repsText]}>
                            {this.state.repsLeft}
                        </Text>
                        <Icon style={[styles.repsIcon, timerStyle]} name="refresh"/> 
                    </View>
               </View>

                {/* timers */}
                <View style={[styles.timerContainer, timerStyle]}>
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
            </View>
        )
    }
}

// styles

const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: 'column',
        flex: 1
    },
    buttonContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#198fe3',
    },
    firstRow: {
        flex: 1,
        flexDirection: 'row',
    },
    titleContainer: {
        flex: 5,
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
        flex: 2,
        flexDirection: 'row',
    },
    repsIcon: {
        alignSelf: 'center',
        padding: 6,
        marginRight: 32
    },
    repsText: {
        fontSize: 32,
        textAlign: 'right',
    },
    setsIcon: {
        alignSelf: 'center',
        padding: 6,
        // marginRight: 32
    },
    setsText: {
        fontSize: 32,
        textAlign: 'right',
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
        color: 'white',
        // borderWidth: 1
    }
})

export default Stopwatch