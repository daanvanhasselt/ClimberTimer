import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Header from './Header'
import WorkoutList from './WorkoutList'
import WorkoutDetail from './WorkoutDetail'

// navigation stack
const Stack = createStackNavigator()

function HangboardScreen(props) {
    return (
        <>
            <Header title="Hangboard Training" backButton={false} navigation={props.navigation} />
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Workouts" component={WorkoutList} />
                <Stack.Screen name="Workout" component={WorkoutDetail} />
            </Stack.Navigator>
        </>
    )
}

export default HangboardScreen