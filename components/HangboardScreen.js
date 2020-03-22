import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import Header from './Header'
import WorkoutList from './WorkoutList'
import WorkoutDetail from './WorkoutDetail'
import WorkoutStep from './WorkoutStep'

// navigation stack
const Stack = createStackNavigator()

function HangboardScreen(props) {
    return (
        <>
            <Header title="Hangboard Training" backButton={false} navigation={props.navigation} />
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Workouts" component={WorkoutList} options={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS ,
                }}/>
                <Stack.Screen name="Workout" component={WorkoutDetail} options={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS ,
                }}/>
                <Stack.Screen name="Step" component={WorkoutStep} options={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS ,
                }}/>
            </Stack.Navigator>
        </>
    )
}

export default HangboardScreen