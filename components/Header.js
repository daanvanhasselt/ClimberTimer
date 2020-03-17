import React from 'react'
import { Header } from 'react-native-elements'
import { withNavigation } from 'react-navigation'
import { DrawerActions } from '@react-navigation/drawer'

class AppHeader extends React.Component {
    render() {
        let leftComponent = { icon: 'menu', color: '#EEEEEE', onPress:() => this.props.navigation.toggleDrawer() }
        if(this.props.backButton) {
            leftComponent = { icon: 'arrow-back', color: '#EEEEEE', onPress:() => this.props.navigation.navigate('Simple Timer') }
        }

        let rightComponent = null
        if(this.props.settingsButton) {
            rightComponent = { icon: 'settings', color: '#EEEEEE', onPress:() => this.props.navigation.navigate('Settings') }
        }

        return (
            <Header placement="left"
                containerStyle={{ backgroundColor: '#2E2E2E' }}
                leftComponent={leftComponent}
                centerComponent={{ text: this.props.title, style: { color: '#fff', fontWeight: 'bold', fontSize: 17 } }}
                rightComponent={rightComponent}/>
            )
        }
}

export default AppHeader