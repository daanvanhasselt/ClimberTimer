import React, { Component, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'
import { createDrawerNavigator, DrawerItemList, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
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
        onPress={() => Linking.openUrl('http://www.pulseinteractive.io')}
        labelStyle={{ fontFamily: 'Roboto' }}
      />
    </DrawerContentScrollView>
  );
}

function AppDrawer() {
  return (
    <Drawer.Navigator style={styles.container} initialRouteName="Timer" drawerContentOptions={{
      activeTintColor: '#555555',
      labelStyle: { fontFamily: 'Roboto' },
    }} drawerContent={props => CustomDrawerContent(props)}>
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