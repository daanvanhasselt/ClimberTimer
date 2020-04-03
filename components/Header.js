import React from 'react'
import { Header } from 'react-native-elements'

class AppHeader extends React.Component {
    render() {
        let leftComponent = null
        if(this.props.backButton) {
            leftComponent = { icon: 'arrow-back', color: '#EEEEEE', onPress:() => this.props.goBack ? this.props.goBack() : this.props.navigation.goBack() }
        }
        else if(this.props.menuButton) {
            leftComponent = { icon: 'menu', color: '#EEEEEE', onPress:() => this.props.navigation.toggleDrawer() }
        }

        let rightComponent = null
        if(this.props.settingsButton) {
            rightComponent = { icon: 'settings', color: '#EEEEEE', onPress:() => this.props.navigation.navigate('Settings') }
        }
        else if(this.props.doneButton) {
            rightComponent = { icon: 'check', color: '#EEEEEE', onPress:() => this.props.done && this.props.done() }
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