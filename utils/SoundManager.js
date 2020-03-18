import { Audio } from 'expo-av'

const soundObjects = {}

class SoundManager {

    static async load(sounds) {
        for(const s in sounds) {
            const sound = sounds[s]
            soundObjects[s] = new Audio.Sound()

            // load the sound and play it muted as a forced preloader
            try {
                await soundObjects[s].loadAsync(sounds[s])
                await soundObjects[s].setStatusAsync({
                    isMuted: true,
                    shouldPlay: true
                })
            }
            catch(e) {
                console.error(e)
            }
        }
    }

    static async play(sound) {
        try {
            if(soundObjects[sound]) {
                // unmute and replay
                await soundObjects[sound].setStatusAsync({
                    isMuted: false
                })
                await soundObjects[sound].replayAsync()
            }
        }
        catch(e) {
            console.warn(e)
        }
    }
}

const sounds = {
    countdown: require("../assets/audio/short/2.wav"),
    rest: require("../assets/audio/short/1.wav"),
    work: require("../assets/audio/short/3.wav")
}
SoundManager.load(sounds)

export default SoundManager