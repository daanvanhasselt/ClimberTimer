// 3 => 03
const pad = (num) => {
    let str = Math.max(0, num).toString()
    if(num < 10) {
        str = "0" + str
    }
    return str
}

// number of seconds -> [mm, ss, ms]
const formatTime = (secs) => {
    let minutes = Math.floor(secs / 60) % 60
    let seconds = Math.floor(secs) % 60
    let milliseconds = Math.floor((secs % 1) * 100)
    return [pad(minutes), pad(seconds), pad(milliseconds)]
}

// number of seconds -> minutes
// 53 -> 0
// 63 -> 1
const minutes = (secs) => Math.floor(secs / 60) % 60

// number of seconds -> seconds
// 53 -> 53
// 63 -> 3
const seconds = (secs) => Math.floor(secs) % 60



export { pad, formatTime, minutes, seconds }