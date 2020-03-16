import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import { Icon } from 'react-native-elements'

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 60 + StatusBar.currentHeight,
      paddingTop: StatusBar.currentHeight,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#2E2E2E',
    },
    header: {
      flex: 1,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'left',
      marginLeft: 25,
      color: '#DDDDDD'
    },
    hamburger: {
        marginLeft: 20
    }
});

function Header({ handleHamburgerTap }) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content'/>
            <TouchableOpacity onPress={handleHamburgerTap}>
            <Icon
                name='bars'
                type='font-awesome'
                color='#EEEEEE'
                containerStyle={styles.hamburger}
                />
            </TouchableOpacity>
            <Text style={styles.header}>ClimberTimer</Text>
        </View>
    )
}

export default Header