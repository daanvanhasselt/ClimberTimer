import { createStore, combineReducers } from 'redux'

import HangboardReducer from './Hangboard'

const RootReducer = combineReducers({
    hangboard: HangboardReducer
})

const RootStore = createStore(
    RootReducer,            // main reducer
    {                       // initial state
        hangboard: {
            selectedHangboard: 0,
            hangboards: [
                {
                    id: 0,
                    name: 'Beastmaker 1000',
                    img: require('../assets/img/beastmaker-1000.jpg'),
                    workouts: [
                        {
                            id: 0,
                            title: 'Test workout',
                            steps: [
                                {
                                    id: 0,
                                    workDuration: 1,
                                    restDuration: 2,
                                    reps: 3,
                                    holds:[
                                        0, 1
                                    ]
                                },
                                {
                                    id: 1,
                                    workDuration: 3,
                                    restDuration: 4,
                                    reps: 2,
                                    holds:[
                                        2, 3
                                    ]
                                },
                                {
                                    id: 2,
                                    workDuration: 5,
                                    restDuration: 6,
                                    reps: 3,
                                    holds:[
                                        4, 5
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
)

export {
    RootReducer,
    RootStore
}