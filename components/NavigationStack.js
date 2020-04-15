import React from 'react'

import { createDrawerNavigator, DrawerItemList, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import { StyleSheet, Text } from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import { Divider } from 'react-native-elements'

import TimerScreen from './TimerScreen'
import SettingsScreen from './SettingsScreen'
import HangboardScreen from './HangboardScreen'
import CustomTrainingScreen from './CustomTrainingScreen'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    drawerHeader: {
      fontSize: 18,
      fontWeight: "bold",
      margin: 15
    }
})

const Drawer = createDrawerNavigator()

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
        <Text style={styles.drawerHeader}>ClimberTimer</Text>
        <DrawerItemList {...props} />
        <Divider />
        <DrawerItem
            label="About"
            onPress={() => WebBrowser.openBrowserAsync('http://www.pulseinteractive.io')}
            labelStyle={{ fontFamily: 'Roboto' }}
        />
        </DrawerContentScrollView>
    )
}

function NavigationStack() {
    return (
        <NavigationContainer>
            <Drawer.Navigator style={styles.container} initialRouteName="Timer" drawerContentOptions={{
            activeTintColor: '#555555',
            labelStyle: { fontFamily: 'Roboto' },
            }} drawerContent={props => CustomDrawerContent(props)}>
                <Drawer.Screen name="Simple Timer" component={TimerScreen} />
                <Drawer.Screen name="Hangboard Training" component={HangboardScreen} />
                <Drawer.Screen name="Custom Training" component={CustomTrainingScreen} />
                <Drawer.Screen name="Settings" component={SettingsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default NavigationStack