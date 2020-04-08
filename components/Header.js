import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'
import { Text, Input } from 'native-base'

const styles = StyleSheet.create({
    title: {
        color: '#fff', 
        fontWeight: 'bold',
        width: '100%',
        fontSize: 17
    },
    editableTitle: {
        color: '#fff', 
        fontSize: 17
    }
})

const AppHeader = (props) => {
    let leftComponent = null
    if(props.customLeftButton) {
        rightComponent = props.customLeftButton;
    }
    else if(props.backButton) {
        leftComponent = { icon: 'arrow-back', color: '#EEEEEE', onPress:() => props.goBack ? props.goBack() : props.navigation.goBack() }
    }
    else if(props.menuButton) {
        leftComponent = { icon: 'menu', color: '#EEEEEE', onPress:() => props.navigation.toggleDrawer() }
    }

    let rightComponent = null
    if(props.customRightButton) {
        rightComponent = props.customRightButton;
    }
    else if(props.settingsButton) {
        rightComponent = { icon: 'settings', color: '#EEEEEE', onPress:() => props.navigation.navigate('Settings') }
    }
    else if(props.doneButton) {
        rightComponent = { icon: 'check', color: '#EEEEEE', onPress:() => props.done && props.done() }
    }

    
    const [editingTitle, setEditingTitle] = useState(false)
    const [editedTitle, setEditedTitle] = useState(props.title)

    let onTitlePress = null
    if(props.titleChanged) {
        onTitlePress = ()=>{ if(!editingTitle) setEditingTitle(true) }
    }

    let centerComponent = <Text style={styles.title} onPress={onTitlePress}>{props.title}</Text>
    if(editingTitle) {
        centerComponent = <Input style={styles.editableTitle} value={editedTitle} autoFocus={true} 
                                    onChangeText={ text => setEditedTitle(text) } 
                                    onEndEditing={ () => { 
                                        setEditingTitle(false)
                                        props.titleChanged(editedTitle) 
                                    }}/>
    }

    return (
        <Header placement="left"
            containerStyle={{ backgroundColor: '#2E2E2E' }}
            leftComponent={leftComponent}
            centerComponent={centerComponent}
            rightComponent={rightComponent}/>
        )
    }

export default AppHeader