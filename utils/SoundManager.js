import { Audio } from 'expo-av'

class SoundManager {
    constructor() {
        this.Sounds = {
            countdown: require("../assets/audio/short/2.wav"),
            rest: require("../assets/audio/short/1.wav"),
            work: require("../assets/audio/short/3.wav")
        }
        
        this.players = this.load(this.Sounds)
    }

    load(sounds) {
        let players = {}
        for(let s in sounds) {
            const soundObject = new Audio.Sound()
            try {
                soundObject.loadAsync(sounds[s])
                players[sounds[s]] = soundObject
            }
            catch(e) {
                console.error(e)
            }
        }
        return players
    }

    async play(sound) {
        console.log(`Play sound '${sound}'`)
        const player = this.players[sound]
        if(player === undefined) {
            console.log(`Invalid sound ${sound}`)
            //console.log(this.Sounds)
            //console.log(this.players)
            return
        }
        await player.replayAsync()
    }
}

export default new SoundManager()