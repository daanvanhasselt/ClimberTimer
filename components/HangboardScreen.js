import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import WorkoutList from './WorkoutList'
import WorkoutDetail from './WorkoutDetail'
import WorkoutStep from './WorkoutStep'
import BuiltInWorkoutEditor from './BuiltInWorkoutEditor'
import PrepareWorkout from './PrepareWorkout'
import PlayWorkout from './PlayWorkout'

import WorkoutContext from '../context/WorkoutContext'

// navigation stack
const Stack = createStackNavigator()
const horizontalSlide = { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }

function HangboardScreen(props) {
    return (
        <WorkoutContext.Provider value={props.custom}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Workouts" component={WorkoutList} options={horizontalSlide}/>
                <Stack.Screen name="Workout" component={WorkoutDetail} options={horizontalSlide}/>
                <Stack.Screen name="Built-in workout" component={BuiltInWorkoutEditor} options={horizontalSlide}/>
                <Stack.Screen name="Step" component={WorkoutStep} options={horizontalSlide}/>
                <Stack.Screen name="Prepare" component={PrepareWorkout} options={horizontalSlide}/>
                <Stack.Screen name="Play workout" component={PlayWorkout} options={horizontalSlide}/>
            </Stack.Navigator>
        </WorkoutContext.Provider>
    )
}

export default HangboardScreen