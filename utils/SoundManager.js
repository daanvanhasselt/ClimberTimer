import { Audio } from 'expo-av'

class SoundManager {
    constructor() {
        this.Sounds = {
            countdown: require("../assets/audio/short/2.wav"),
            rest: require("../assets/audio/short/1.wav"),
            work: require("../assets/audio/short/3.wav")
        }
        
        this.load(this.Sounds)
    }

    async load(sounds) {
        let players = {}
        for(let s in sounds) {
            const soundObject = new Audio.Sound()
            try {
                await soundObject.loadAsync(sounds[s])
                players[sounds[s]] = soundObject
            }
            catch(e) {
                console.error(e)
            }
        }
        this.players = players
    }

    async play(sound) {
        // console.log(`Play sound '${sound}'`)
        const player = this.players[sound]
        if(player === undefined) {
            console.log(`Invalid sound ${sound}`)
            return
        }
        await player.replayAsync()
    }
}

export default new SoundManager()