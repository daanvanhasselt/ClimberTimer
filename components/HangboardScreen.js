import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import Header from './Header'
import WorkoutList from './WorkoutList'
import WorkoutDetail from './WorkoutDetail'
import WorkoutStep from './WorkoutStep'
import BuiltInWorkoutEditor from './BuiltInWorkoutEditor'

// navigation stack
const Stack = createStackNavigator()
const horizontalSlide = { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }

function HangboardScreen(props) {
    return (
        <>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Workouts" component={WorkoutList} options={horizontalSlide}/>
                <Stack.Screen name="Workout" component={WorkoutDetail} options={horizontalSlide}/>
                <Stack.Screen name="Built-in workout" component={BuiltInWorkoutEditor} options={horizontalSlide}/>
                <Stack.Screen name="Step" component={WorkoutStep} options={horizontalSlide}/>
            </Stack.Navigator>
        </>
    )
}

export default HangboardScreen