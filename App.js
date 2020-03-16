import React, { Component, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import TimerScreen from './components/TimerScreen'
import SettingsScreen from './components/SettingsScreen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})

const Drawer = createDrawerNavigator()

function AppDrawer() {
  return (
    <Drawer.Navigator style={styles.container} initialRouteName="Timer">
      <Drawer.Screen name="Timer" component={TimerScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  )
}

function App () {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  )
}
export default App