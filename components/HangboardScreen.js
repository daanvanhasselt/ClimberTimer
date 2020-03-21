import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Header from './Header'
import WorkoutList from './WorkoutList'

// navigation stack
const Stack = createStackNavigator()

function HangboardScreen(props) {
    return (
        <>
            <Header title="Hangboard Training" backButton={true} navigation={props.navigation} />
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Workouts" component={WorkoutList} />
            </Stack.Navigator>
        </>
    )
}

export default HangboardScreen