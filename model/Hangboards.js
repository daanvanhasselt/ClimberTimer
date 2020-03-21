const HangboardNames = {
    Beastmaker1000: 'Beastmaker 1000',
    Beastmaker2000: 'Beastmaker 2000'
}

const HangboardDetails = {
    [HangboardNames.Beastmaker1000]: {
        img: require('../assets/img/beastmaker-1000.jpg'),
        workouts: [
            {
                id: 0,
                title: 'Beasty 5A'
            },
            {
                id: 1,
                title: 'Beasty 5B'
            },
            {
                id: 2,
                title: 'Beasty 5C'
            },
            {
                id: 3,
                title: 'Beasty 6A'
            },
            {
                id: 4,
                title: 'Beasty 6B'
            },
            {
                id: 5,
                title: 'Beasty 6C'
            },
            {
                id: 6,
                title: 'Beasty 7A'
            },
            {
                id: 7,
                title: 'Beasty 7B'
            },
            {
                id: 8,
                title: 'Beasty 7B+'
            },
            {
                id: 9,
                title: 'Beasty 7C'
            }
        ]
    },
    [HangboardNames.Beastmaker2000]: {
        img: require('../assets/img/beastmaker-2000.jpg'),
        workouts: [
            {
                id: 0,
                title: 'Beasty 6Cish'
            },
            {
                id: 1,
                title: 'Beasty 7Aish'
            },
            {
                id: 2,
                title: 'Beasty 7Bish'
            },
            {
                id: 3,
                title: 'Beasty 7Cish'
            },
            {
                id: 4,
                title: 'Beasty 7C+ish'
            },
            {
                id: 5,
                title: 'Beasty 8Aish'
            },
            {
                id: 6,
                title: 'Beasty 8A+ish'
            },
            {
                id: 7,
                title: 'Crimpcentric Hard'
            },
            {
                id: 8,
                title: 'Crimpcentric Medium'
            }
            ,
            {
                id: 9,
                title: 'Pocketcentric Hard'
            },
            {
                id: 10,
                title: 'Pocketcentric Medium'
            },
            {
                id: 11,
                title: 'Slopercentric Hard'
            },
            {
                id: 12,
                title: 'Slopercentric Medium'
            }
        ]
    }
}

export default HangboardNames
export const Details = HangboardDetails