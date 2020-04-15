import GripTypes from './GripTypes'

export default {
    hangboards: [
        {
            id: 0,
            name: 'Beastmaker 1000',
            img: require('../assets/img/beastmaker-1000.jpg'),
            aspect: (1024/301),
            selectedHolds: [],
            holds: [
                {
                    id: 0,
                    name: 'Left #1 - jug',
                    position: {
                        x: 11,
                        y: 11
                    },
                    size: {
                        w: 10,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 1,
                    name: 'Right #1 - jug',
                    position: {
                        x: 79,
                        y: 11
                    },
                    size: {
                        w: 10,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 2,
                    name: 'Left #2 - hard sloper',
                    position: {
                        x: 25,
                        y: 11
                    },
                    size: {
                        w: 12,
                        h: 15
                    },
                    cornerRadius: 10
                },
                {
                    id: 3,
                    name: 'Right #2 - hard sloper',
                    position: {
                        x: 62.5,
                        y: 11
                    },
                    size: {
                        w: 12,
                        h: 15
                    },
                    cornerRadius: 10
                },
                {
                    id: 4,
                    name: 'Left #3 - easy sloper',
                    position: {
                        x: 38,
                        y: 11
                    },
                    size: {
                        w: 10,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 5,
                    name: 'Right #3 - easy sloper',
                    position: {
                        x: 51.25,
                        y: 11
                    },
                    size: {
                        w: 10,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 6,
                    name: 'Left #4 - 12mm big pocket',
                    position: {
                        x: 6.5,
                        y: 27
                    },
                    size: {
                        w: 13.5,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 7,
                    name: 'Right #4 - 12mm big pocket',
                    position: {
                        x: 79.5,
                        y: 27
                    },
                    size: {
                        w: 13.5,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 8,
                    name: 'Left #5 - 28mm medium pocket',
                    position: {
                        x: 38.25,
                        y: 27.5
                    },
                    size: {
                        w: 10,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 9,
                    name: 'Right #5 - 28mm medium pocket',
                    position: {
                        x: 51,
                        y: 27.5
                    },
                    size: {
                        w: 10,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 10,
                    name: 'Left #6 - 43mm big pocket',
                    position: {
                        x: 5.5,
                        y: 47
                    },
                    size: {
                        w: 13.5,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 11,
                    name: 'Right #6 - 43mm big pocket',
                    position: {
                        x: 80.5,
                        y: 47
                    },
                    size: {
                        w: 13.5,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 12,
                    name: 'Left #7 - 48mm small pocket',
                    position: {
                        x: 21.5,
                        y: 47
                    },
                    size: {
                        w: 7,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 13,
                    name: 'Right #7 - 48mm small pocket',
                    position: {
                        x: 71,
                        y: 47
                    },
                    size: {
                        w: 7,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 14,
                    name: 'Left #8 - 43mm medium pocket',
                    position: {
                        x: 30.5,
                        y: 47
                    },
                    size: {
                        w: 10,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 15,
                    name: 'Right #8 - 43mm medium pocket',
                    position: {
                        x: 59,
                        y: 47
                    },
                    size: {
                        w: 10,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 16,
                    name: 'Left #9 - 16mm big pocket',
                    position: {
                        x: 13,
                        y: 71
                    },
                    size: {
                        w: 14,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 17,
                    name: 'Right #9 - 16mm big pocket',
                    position: {
                        x: 72,
                        y: 71
                    },
                    size: {
                        w: 14.5,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 18,
                    name: 'Left #10 - 22mm small pocket',
                    position: {
                        x: 29.75,
                        y: 71
                    },
                    size: {
                        w: 7,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 19,
                    name: 'Right #10 - 22mm small pocket',
                    position: {
                        x: 63,
                        y: 71
                    },
                    size: {
                        w: 7,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 20,
                    name: 'Left #11 - 17mm medium pocket',
                    position: {
                        x: 39,
                        y: 71
                    },
                    size: {
                        w: 9.5,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 21,
                    name: 'Right #11 - 17mm medium pocket',
                    position: {
                        x: 51,
                        y: 71
                    },
                    size: {
                        w: 9.5,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 22,
                    name: 'Middle #12 - 50mm big pocket',
                    position: {
                        x: 42.5,
                        y: 47
                    },
                    size: {
                        w: 14.5,
                        h: 12
                    },
                    cornerRadius: 10
                }
            ],
            workouts: [
                {
                    id: 0,
                    locked: true,
                    title: 'Beasty 5A',
                    steps: [
                        {
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                0, 1
                            ],
                            gripType: GripTypes.fourFingers
                        },
                        {
                            id: 1,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                0, 1
                            ],
                            gripType: GripTypes.fourFingers
                        },
                        {
                            id: 2,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                14, 15
                            ],
                            gripType: GripTypes.threeFingersOpen
                        },
                        {
                            id: 3,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                10, 11
                            ],
                            gripType: GripTypes.threeFingersOpen
                        },
                        {
                            id: 4,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                10, 11
                            ],
                            gripType: GripTypes.fourFingersChisel
                        },
                        {
                            id: 5,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                10, 11
                            ],
                            gripType: GripTypes.fourFingersChisel
                        }
                    ]
                },
                {
                    id: 1,
                    locked: true,
                    title: 'Beasty 5B',
                    steps: [
                        {
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                10, 11
                            ],
                            gripType: GripTypes.fourFingersHalfCrimp
                        },
                        {
                            id: 1,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                4, 5
                            ],
                            gripType: GripTypes.fourFingers
                        },
                        {
                            id: 2,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                10, 11
                            ],
                            gripType: GripTypes.fourFingersHalfCrimp
                        },
                        {
                            id: 3,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                8, 9
                            ],
                            gripType: GripTypes.threeFingersOpen
                        },
                        {
                            id: 4,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                12, 13
                            ],
                            gripType: GripTypes.middleTwo
                        },
                        {
                            id: 5,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                10, 11
                            ],
                            gripType: GripTypes.fourFingersChisel
                        }
                    ]
                },
                {
                    id: 2,
                    locked: true,
                    title: 'Beasty 5C',
                    steps: [
                        {
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                10, 11
                            ],
                            gripType: GripTypes.fourFingersCrimp
                        },
                        {
                            id: 1,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                8, 9
                            ],
                            gripType: GripTypes.threeFingersOpen
                        },
                        {
                            id: 2,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 17
                            ],
                            gripType: GripTypes.fourFingersChisel
                        },
                        {
                            id: 3,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                12, 13
                            ],
                            gripType: GripTypes.middleTwo
                        },
                        {
                            id: 4,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                4, 5
                            ],
                            gripType: GripTypes.fourFingers
                        },
                        {
                            id: 5,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 17
                            ],
                            gripType: GripTypes.fourFingersChisel
                        }
                    ]
                },
                {
                    id: 3,
                    locked: true,
                    title: 'Beasty 6A',
                    steps: [
                        {
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2, 5
                            ],
                            gripType: GripTypes.fourFingers
                        },
                        {
                            id: 1,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                8, 9
                            ],
                            gripType: GripTypes.threeFingersOpen
                        },
                        {
                            id: 2,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                10, 11
                            ],
                            gripType: GripTypes.fourFingersCrimp
                        },
                        {
                            id: 3,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                12, 13
                            ],
                            gripType: GripTypes.frontTwo
                        },
                        {
                            id: 4,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 17
                            ],
                            gripType: GripTypes.fourFingersChisel
                        },
                        {
                            id: 5,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                12, 13
                            ],
                            gripType: GripTypes.middleTwo
                        }
                    ]
                },
                {
                    id: 4,
                    locked: true,
                    title: 'Beasty 6B',
                    steps: [
                        {
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2, 5
                            ],
                            gripType: GripTypes.fourFingers
                        },
                        {
                            id: 1,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 17
                            ],
                            gripType: GripTypes.fourFingersChisel
                        },
                        {
                            id: 2,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                8, 9
                            ],
                            gripType: GripTypes.threeFingersOpen
                        },
                        {
                            id: 3,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                12, 13
                            ],
                            gripType: GripTypes.middleTwo
                        },
                        {
                            id: 4,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 17
                            ],
                            gripType: GripTypes.fourFingersChisel
                        },
                        {
                            id: 5,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 17
                            ],
                            gripType: GripTypes.fourFingersChisel
                        }
                    ]
                },
                {
                    id: 5,
                    locked: true,
                    title: 'Beasty 6C',
                    steps: [
                        {
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2, 5
                            ],
                            gripType: GripTypes.fourFingers
                        },
                        {
                            id: 1,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 17
                            ],
                            gripType: GripTypes.fourFingersChisel
                        },
                        {
                            id: 2,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                8, 9
                            ],
                            gripType: GripTypes.threeFingersOpen
                        },
                        {
                            id: 3,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                18, 13
                            ],
                            gripType: GripTypes.middleTwo
                        },
                        {
                            id: 4,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 17
                            ],
                            gripType: GripTypes.fourFingersCrimp
                        },
                        {
                            id: 5,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                12, 13
                            ],
                            gripType: GripTypes.frontTwo
                        }
                    ]
                },
                {
                    id: 6,
                    locked: true,
                    title: 'Beasty 7A',
                    steps: [
                        {
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2, 3
                            ],
                            gripType: GripTypes.fourFingers
                        },
                        {
                            id: 1,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 17
                            ],
                            gripType: GripTypes.fourFingersHalfCrimp
                        },
                        {
                            id: 2,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                8, 17
                            ],
                            gripType: GripTypes.threeFingersOpen
                        },
                        {
                            id: 3,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                12, 19
                            ],
                            gripType: GripTypes.middleTwo
                        },
                        {
                            id: 4,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 17
                            ],
                            gripType: GripTypes.fourFingersHalfCrimp
                        },
                        {
                            id: 5,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                12, 13
                            ],
                            gripType: GripTypes.frontTwo
                        }
                    ]
                },
                {
                    id: 7,
                    locked: true,
                    title: 'Beasty 7B',
                    steps: [
                        {
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2, 3
                            ],
                            gripType: GripTypes.fourFingers
                        },
                        {
                            id: 1,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 17
                            ],
                            gripType: GripTypes.fourFingersHalfCrimp
                        },
                        {
                            id: 2,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 21
                            ],
                            gripType: GripTypes.threeFingersOpen
                        },
                        {
                            id: 3,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                18, 19
                            ],
                            gripType: GripTypes.middleTwo
                        },
                        {
                            id: 4,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 17
                            ],
                            gripType: GripTypes.fourFingersHalfCrimp
                        },
                        {
                            id: 5,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                12, 13
                            ],
                            gripType: GripTypes.backTwo
                        }
                    ]
                },
                {
                    id: 8,
                    locked: true,
                    title: 'Beasty 7B+',
                    steps: [
                        {
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2, 3
                            ],
                            gripType: GripTypes.fourFingers
                        },
                        {
                            id: 1,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                6, 17
                            ],
                            gripType: GripTypes.fourFingersHalfCrimp
                        },
                        {
                            id: 2,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 21
                            ],
                            gripType: GripTypes.threeFingersOpen
                        },
                        {
                            id: 3,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                18, 19
                            ],
                            gripType: GripTypes.middleTwo
                        },
                        {
                            id: 4,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                6, 17
                            ],
                            gripType: GripTypes.fourFingersHalfCrimp
                        },
                        {
                            id: 5,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                12, 13
                            ],
                            gripType: GripTypes.backTwo
                        }
                    ]
                },
                {
                    id: 9,
                    locked: true,
                    title: 'Beasty 7C',
                    steps: [
                        {
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2, 3
                            ],
                            gripType: GripTypes.fourFingers
                        },
                        {
                            id: 1,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                6, 17
                            ],
                            gripType: GripTypes.fourFingersHalfCrimp
                        },
                        {
                            id: 2,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 17
                            ],
                            gripType: GripTypes.threeFingersOpen
                        },
                        {
                            id: 3,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                18, 19
                            ],
                            gripType: GripTypes.middleTwo
                        },
                        {
                            id: 4,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                6, 7
                            ],
                            gripType: GripTypes.fourFingersHalfCrimp
                        },
                        {
                            id: 5,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                12, 13
                            ],
                            gripType: GripTypes.backTwo
                        }
                    ]
                },
            ]
        },
        {
            id: 1,
            name: 'Beastmaker 2000',
            img: require('../assets/img/beastmaker-2000.jpg'),
            aspect: (1024/301),
            selectedHolds: [],
            holds: [
                {
                    id: 0,
                    name: 'Left #1 - Hard sloper',
                    position: {
                        x: 5,
                        y: 12
                    },
                    size: {
                        w: 13,
                        h: 15
                    },
                    cornerRadius: 10
                },
                {
                    id: 1,
                    name: 'Right #1 - Hard sloper',
                    position: {
                        x: 81,
                        y: 12
                    },
                    size: {
                        w: 13,
                        h: 15
                    },
                    cornerRadius: 10
                },
                {
                    id: 2,
                    name: 'Left #2 - Medium sloper',
                    position: {
                        x: 21,
                        y: 12
                    },
                    size: {
                        w: 13,
                        h: 13
                    },
                    cornerRadius: 10
                },
                {
                    id: 3,
                    name: 'Right #2 - Medium sloper',
                    position: {
                        x: 65.5,
                        y: 12
                    },
                    size: {
                        w: 13,
                        h: 13
                    },
                    cornerRadius: 10
                },
                {
                    id: 4,
                    name: 'Left #3 - Easy sloper',
                    position: {
                        x: 37,
                        y: 12
                    },
                    size: {
                        w: 11,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 5,
                    name: 'Right #3 - Easy sloper',
                    position: {
                        x: 51,
                        y: 12
                    },
                    size: {
                        w: 11,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 6,
                    name: 'Left #4 - 40mm medium pocket',
                    position: {
                        x: 38,
                        y: 27
                    },
                    size: {
                        w: 10,
                        h: 13
                    },
                    cornerRadius: 10
                },
                {
                    id: 7,
                    name: 'Right #4 - 20mm medium pocket',
                    position: {
                        x: 51.5,
                        y: 27
                    },
                    size: {
                        w: 10,
                        h: 13
                    },
                    cornerRadius: 10
                },
                {
                    id: 8,
                    name: 'Left #5 - 33mm big pocket',
                    position: {
                        x: 4.75,
                        y: 46
                    },
                    size: {
                        w: 13,
                        h: 13
                    },
                    cornerRadius: 10
                },
                {
                    id: 9,
                    name: 'Right #5 - 33mm big pocket',
                    position: {
                        x: 81.5,
                        y: 46
                    },
                    size: {
                        w: 13,
                        h: 13
                    },
                    cornerRadius: 10
                },
                {
                    id: 10,
                    name: 'Left #6 - 55mm deep mono',
                    position: {
                        x: 19.25,
                        y: 45
                    },
                    size: {
                        w: 3.5,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 11,
                    name: 'Right #6 - 55mm deep mono',
                    position: {
                        x: 76.7,
                        y: 45
                    },
                    size: {
                        w: 3.5,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 12,
                    name: 'Left #7 - 35/50mm small pocket',
                    position: {
                        x: 24.5,
                        y: 46
                    },
                    size: {
                        w: 7.5,
                        h: 13
                    },
                    cornerRadius: 10
                },
                {
                    id: 13,
                    name: 'Right #7 - 35/50mm small pocket',
                    position: {
                        x: 67.5,
                        y: 46
                    },
                    size: {
                        w: 7.5,
                        h: 13
                    },
                    cornerRadius: 10
                },
                {
                    id: 14,
                    name: 'Left #8 - 30mm small pocket',
                    position: {
                        x: 33.75,
                        y: 46
                    },
                    size: {
                        w: 7.5,
                        h: 13
                    },
                    cornerRadius: 10
                },
                {
                    id: 15,
                    name: 'Right #8 - 30mm small pocket',
                    position: {
                        x: 58.5,
                        y: 46
                    },
                    size: {
                        w: 7.5,
                        h: 13
                    },
                    cornerRadius: 10
                },
                {
                    id: 16,
                    name: 'Left #9 - 15mm big pocket',
                    position: {
                        x: 5,
                        y: 71
                    },
                    size: {
                        w: 13,
                        h: 13
                    },
                    cornerRadius: 10
                },
                {
                    id: 17,
                    name: 'Right #9 - 15mm big pocket',
                    position: {
                        x: 81.5,
                        y: 71
                    },
                    size: {
                        w: 13,
                        h: 13
                    },
                    cornerRadius: 10
                },
                {
                    id: 18,
                    name: 'Left #10 - 27mm shallow mono',
                    position: {
                        x: 19.5,
                        y: 70.5
                    },
                    size: {
                        w: 3.5,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 19,
                    name: 'Right #10 - 27mm shallow mono',
                    position: {
                        x: 76.5,
                        y: 70.5
                    },
                    size: {
                        w: 3.5,
                        h: 12
                    },
                    cornerRadius: 10
                },
                {
                    id: 20,
                    name: 'Left #11 - 20mm small pocket',
                    position: {
                        x: 24.5,
                        y: 71
                    },
                    size: {
                        w: 7.5,
                        h: 13
                    },
                    cornerRadius: 10
                },
                {
                    id: 21,
                    name: 'Right #11 - 20mm small pocket',
                    position: {
                        x: 67.5,
                        y: 71
                    },
                    size: {
                        w: 7.5,
                        h: 13
                    },
                    cornerRadius: 10
                },
                {
                    id: 22,
                    name: 'Left #12 - 22mm slopey small pocket',
                    position: {
                        x: 33.25,
                        y: 71
                    },
                    size: {
                        w: 7.5,
                        h: 13
                    },
                    cornerRadius: 10
                },
                {
                    id: 23,
                    name: 'Left #12 - 22mm slopey small pocket',
                    position: {
                        x: 59,
                        y: 71
                    },
                    size: {
                        w: 7.5,
                        h: 13
                    },
                    cornerRadius: 10
                },
                {
                    id: 24,
                    name: 'Middle #9 - 52mm big pocket',
                    position: {
                        x: 43,
                        y: 46
                    },
                    size: {
                        w: 13.5,
                        h: 13
                    },
                    cornerRadius: 10
                },
                {
                    id: 25,
                    name: 'Middle #10 - 21mm big pocket',
                    position: {
                        x: 41.5,
                        y: 70
                    },
                    size: {
                        w: 16.5,
                        h: 13
                    },
                    cornerRadius: 10
                }
            ],
            workouts: [
                {
                    id: 0,
                    locked: true,
                    title: 'Beasty 6Cish',
                    steps: [
                        {
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                8, 9
                            ],
                            gripType: GripTypes.fourFingersHalfChisel
                        },
                        {
                            id: 1,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2, 5
                            ],
                            gripType: GripTypes.fourFingersOpen
                        },
                        {
                            id: 2,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                8, 9
                            ],
                            gripType: GripTypes.threeFingersOpen
                        },
                        {
                            id: 3,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2, 3
                            ],
                            gripType: GripTypes.fourFingersOpen
                        },
                        {
                            id: 4,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                14, 15
                            ],
                            gripType: GripTypes.middleTwo
                        },
                        {
                            id: 5,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                14, 15
                            ],
                            gripType: GripTypes.frontTwo
                        }
                    ]
                },
                {
                    id: 1,
                    locked: true,
                    title: 'Beasty 7Aish',
                    steps: [
                        {
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                8, 9
                            ],
                            gripType: GripTypes.fourFingersHalfCrimp
                        },
                        {
                            id: 1,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2, 3
                            ],
                            gripType: GripTypes.fourFingersOpen
                        },
                        {
                            id: 2,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                6, 9
                            ],
                            gripType: GripTypes.threeFingersOpen
                        },
                        {
                            id: 3,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2, 3
                            ],
                            gripType: GripTypes.fourFingersOpen
                        },
                        {
                            id: 4,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                6, 21
                            ],
                            gripType: GripTypes.middleTwo
                        },
                        {
                            id: 5,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                12, 13
                            ],
                            gripType: GripTypes.backTwo
                        }
                        ,
                        {
                            id: 6,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                               14, 15
                            ],
                            gripType: GripTypes.frontTwo
                        }
                    ]
                },
                {
                    id: 2,
                    locked: true,
                    title: 'Beasty 7Bish',
                    steps: [
                        {
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                8, 17
                            ],
                            gripType: GripTypes.fourFingersHalfCrimp
                        },
                        {
                            id: 1,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2, 1
                            ],
                            gripType: GripTypes.fourFingersOpen
                        },
                        {
                            id: 2,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                17, 7
                            ],
                            gripType: GripTypes.threeFingersOpen
                        },
                        {
                            id: 3,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 17
                            ],
                            gripType: GripTypes.fourFingersHalfCrimp
                        },
                        {
                            id: 4,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                20, 21
                            ],
                            gripType: GripTypes.middleTwo
                        },
                        {
                            id: 5,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                12, 13
                            ],
                            gripType: GripTypes.backTwo
                        }
                        ,
                        {
                            id: 6,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                               14, 23
                            ],
                            gripType: GripTypes.frontTwo
                        }
                    ]
                },
                {
                    id: 3,
                    locked: true,
                    title: 'Beasty 7Cish',
                    steps: [
                        {
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                25, 17
                            ],
                            gripType: GripTypes.fourFingersHalfCrimp
                        },
                        {
                            id: 1,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2, 1
                            ],
                            gripType: GripTypes.fourFingersOpen
                        },
                        {
                            id: 2,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 7
                            ],
                            gripType: GripTypes.threeFingersOpen
                        },
                        {
                            id: 3,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                17, 7
                            ],
                            gripType: GripTypes.fourFingersHalfCrimp
                        },
                        {
                            id: 4,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                20, 21
                            ],
                            gripType: GripTypes.middleTwo
                        },
                        {
                            id: 5,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                12, 13
                            ],
                            gripType: GripTypes.backTwo
                        }
                        ,
                        {
                            id: 6,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                               14, 21
                            ],
                            gripType: GripTypes.frontTwo
                        }
                    ]
                },
                {
                    id: 4,
                    locked: true,
                    title: 'Beasty 7C+ish',
                    steps: [
                        {
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 17
                            ],
                            gripType: GripTypes.fourFingersHalfCrimp
                        },
                        {
                            id: 1,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2, 1
                            ],
                            gripType: GripTypes.fourFingersOpen
                        },
                        {
                            id: 2,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 17
                            ],
                            gripType: GripTypes.threeFingersOpen
                        },
                        {
                            id: 3,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 17
                            ],
                            gripType: GripTypes.fourFingersHalfCrimp
                        },
                        {
                            id: 4,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                20, 21
                            ],
                            gripType: GripTypes.middleTwo
                        },
                        {
                            id: 5,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                14, 15
                            ],
                            gripType: GripTypes.backTwo
                        }
                        ,
                        {
                            id: 6,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                               20, 21
                            ],
                            gripType: GripTypes.frontTwo
                        }
                    ]
                },
                {
                    id: 5,
                    locked: true,
                    title: 'Beasty 8Aish',
                    steps: [
                        {
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 17
                            ],
                            gripType: GripTypes.backThreeHalfCrimp
                        },
                        {
                            id: 1,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                0, 1
                            ],
                            gripType: GripTypes.fourFingersOpen
                        },
                        {
                            id: 2,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 17
                            ],
                            gripType: GripTypes.threeFingersOpen
                        },
                        {
                            id: 3,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 17
                            ],
                            gripType: GripTypes.frontThreeHalfCrimp
                        },
                        {
                            id: 4,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                20, 21
                            ],
                            gripType: GripTypes.middleTwo
                        },
                        {
                            id: 5,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                14, 15
                            ],
                            gripType: GripTypes.backTwo
                        }
                        ,
                        {
                            id: 6,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                               20, 21
                            ],
                            gripType: GripTypes.frontTwo
                        }
                    ]
                },
                {
                    id: 6,
                    locked: true,
                    title: 'Beasty 8A+ish',
                    steps: [
                        {
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 17
                            ],
                            gripType: GripTypes.backThreeHalfCrimp
                        },
                        {
                            id: 1,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                0, 1
                            ],
                            gripType: GripTypes.fourFingersOpen
                        },
                        {
                            id: 2,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                7
                            ],
                            gripType: GripTypes.threeFingersOpen
                        },
                        {
                            id: 3,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 17
                            ],
                            gripType: GripTypes.frontThreeHalfCrimp
                        },
                        {
                            id: 4,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2
                            ],
                            gripType: GripTypes.fourFingersOpen
                        },
                        {
                            id: 5,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                22, 23
                            ],
                            gripType: GripTypes.middleTwo
                        }
                        ,
                        {
                            id: 6,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                               22, 23
                            ],
                            gripType: GripTypes.frontTwo
                        }
                    ]
                },
                {
                    id: 7,
                    locked: true,
                    title: 'Crimpcentric Hard',
                    steps: [
                        {
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 17
                            ],
                            gripType: GripTypes.backThreeHalfCrimp
                        },
                        {
                            id: 1,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                25
                            ],
                            gripType: GripTypes.fourFingersFullCrimp
                        },
                        {
                            id: 2,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2, 1
                            ],
                            gripType: GripTypes.fourFingersOpen
                        },
                        {
                            id: 3,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                25
                            ],
                            gripType: GripTypes.fourFingersFullCrimp
                        },
                        {
                            id: 4,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                20, 21
                            ],
                            gripType: GripTypes.frontTwo
                        },
                        {
                            id: 5,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                25
                            ],
                            gripType: GripTypes.fourFingersFullCrimp
                        },
                        {
                            id: 6,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                               2, 1
                            ],
                            gripType: GripTypes.fourFingersOpen
                        },
                        {
                            id: 7,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                               25
                            ],
                            gripType: GripTypes.fourFingersFullCrimp
                        }
                    ]
                },
                {
                    id: 8,
                    locked: true,
                    title: 'Crimpcentric Medium',
                    steps: [
                        {
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                8, 9
                            ],
                            gripType: GripTypes.backThreeHalfCrimp
                        },
                        {
                            id: 1,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                25
                            ],
                            gripType: GripTypes.fourFingersFullCrimp
                        },
                        {
                            id: 2,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2, 1
                            ],
                            gripType: GripTypes.fourFingersOpen
                        },
                        {
                            id: 3,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                25
                            ],
                            gripType: GripTypes.fourFingersFullCrimp
                        },
                        {
                            id: 4,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                20, 21
                            ],
                            gripType: GripTypes.middleTwo
                        },
                        {
                            id: 5,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                25
                            ],
                            gripType: GripTypes.fourFingersFullCrimp
                        },
                        {
                            id: 6,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                               2, 1
                            ],
                            gripType: GripTypes.fourFingersOpen
                        },
                        {
                            id: 7,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                               25
                            ],
                            gripType: GripTypes.fourFingersFullCrimp
                        }
                    ]
                },
                {
                    id: 9,
                    locked: true,
                    title: 'Pocketcentric Hard',
                    steps: [
                        {
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                20, 21
                            ],
                            gripType: GripTypes.backTwoHalfCrimp
                        },
                        {
                            id: 1,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                18, 23
                            ],
                            gripType: GripTypes.middleMono
                        },
                        {
                            id: 2,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2, 1
                            ],
                            gripType: GripTypes.fourFingersOpen
                        },
                        {
                            id: 3,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                22, 23
                            ],
                            gripType: GripTypes.middleTwo
                        },
                        {
                            id: 4,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                20, 21
                            ],
                            gripType: GripTypes.frontTwo
                        },
                        {
                            id: 5,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                12
                            ],
                            gripType: GripTypes.middleTwo
                        }
                        ,
                        {
                            id: 6,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                               22, 21
                            ],
                            gripType: GripTypes.frontTwo
                        }
                    ]
                },
                {
                    id: 10,
                    locked: true,
                    title: 'Pocketcentric Medium',
                    steps: [
                        {
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                12, 13
                            ],
                            gripType: GripTypes.backTwoHalfCrimp
                        },
                        {
                            id: 1,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                14, 15
                            ],
                            gripType: GripTypes.frontTwo
                        },
                        {
                            id: 2,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2, 1
                            ],
                            gripType: GripTypes.fourFingersOpen
                        },
                        {
                            id: 3,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                20, 21
                            ],
                            gripType: GripTypes.middleTwo
                        },
                        {
                            id: 4,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                12, 13
                            ],
                            gripType: GripTypes.backTwo
                        },
                        {
                            id: 5,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2, 1
                            ],
                            gripType: GripTypes.fourFingersOpen
                        }
                        ,
                        {
                            id: 6,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                               14, 21
                            ],
                            gripType: GripTypes.frontTwo
                        }
                    ]
                },
                {
                    id: 11,
                    locked: true,
                    title: 'Slopercentric Hard',
                    steps: [
                        {
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2, 1
                            ],
                            gripType: GripTypes.fourFingersOpen
                        },
                        {
                            id: 1,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                4
                            ],
                            gripType: GripTypes.fourFingersOpen
                        },
                        {
                            id: 2,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                0, 1
                            ],
                            gripType: GripTypes.fourFingersOpen
                        },
                        {
                            id: 3,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2
                            ],
                            gripType: GripTypes.fourFingersOpen
                        },
                        {
                            id: 4,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                12, 13
                            ],
                            gripType: GripTypes.backTwo
                        },
                        {
                            id: 5,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                7
                            ],
                            gripType: GripTypes.threeFingersOpen
                        },
                        {
                            id: 6,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                               2
                            ],
                            gripType: GripTypes.fourFingersOpen
                        }
                    ]
                },
                {
                    id: 12,
                    locked: true,
                    title: 'Slopercentric Medium',
                    steps: [
                        {
                            id: 0,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                4, 3
                            ],
                            gripType: GripTypes.fourFingersOpen
                        },
                        {
                            id: 1,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2
                            ],
                            gripType: GripTypes.fourFingersOpen
                        },
                        {
                            id: 2,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 7
                            ],
                            gripType: GripTypes.threeFingersOpen
                        },
                        {
                            id: 3,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2, 3
                            ],
                            gripType: GripTypes.fourFingersOpen
                        },
                        {
                            id: 4,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                16, 7
                            ],
                            gripType: GripTypes.threeFingersOpen
                        },
                        {
                            id: 5,
                            workDuration: 7,
                            restDuration: 3,
                            reps: 1,
                            holds:[
                                2
                            ],
                            gripType: GripTypes.fourFingersOpen
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            custom: true,
            name: 'Custom',
            workouts: []
        }
    ],
    selectedHangboard: 0
}