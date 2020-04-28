import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
// import { Header } from 'react-native-elements'
import { Text, Input, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'

const AppHeader = (props) => {
    const highlightColor = 'rgba(0, 0, 0, 0.25)'
    
    const styles = StyleSheet.create({
        header: {
            marginTop: 20
        },
        title: {
        },
        editableTitle: {
            color: '#fff', 
            fontSize: 17
        },
        body: {
            paddingLeft: props.backButton ? 0 : 40
        },
        backButton: {
            marginRight: -20
        }
    })

    let leftComponent = null
    if(props.customLeftButton) {
        leftComponent = props.customLeftButton;
    }
    else if(props.backButton) {
        //leftComponent = { icon: 'arrow-back', color: '#EEEEEE', underlayColor: highlightColor, onPress:() => props.goBack ? props.goBack() : props.navigation.goBack() }
    }
    else if(props.menuButton) {
        // leftComponent = { icon: 'menu', color: '#EEEEEE', underlayColor: highlightColor, onPress:() => props.navigation.toggleDrawer() }
    }

    let rightComponent = null
    if(props.customRightButton) {
        rightComponent = props.customRightButton;
    }
    else if(props.settingsButton) {
        rightComponent = { icon: 'settings', color: '#EEEEEE', underlayColor: highlightColor, onPress:() => props.navigation.navigate('Settings') }
    }
    else if(props.doneButton) {
        rightComponent = { icon: 'check', color: '#EEEEEE', underlayColor: highlightColor, onPress:() => props.done && props.done() }
    }

    
    const [editingTitle, setEditingTitle] = useState(false)
    const [editedTitle, setEditedTitle] = useState(props.title)

    let onTitlePress = null
    if(props.titleChanged) {
        onTitlePress = ()=>{ if(!editingTitle) setEditingTitle(true) }
    }

    let centerComponent = <Title onPress={onTitlePress} style={styles.title}>{props.title}</Title>
    if(editingTitle) {
        centerComponent = <Input style={styles.editableTitle} value={editedTitle} autoFocus={true} 
                                    onChangeText={ text => setEditedTitle(text) } 
                                    onEndEditing={ () => { 
                                        setEditingTitle(false)
                                        props.titleChanged(editedTitle) 
                                    }}/>
    }

    return (
        <Header transparent style={styles.header}>
            {props.backButton && <Left style={styles.backButton}>
                <Button transparent
                    onPress={() => props.goBack ? props.goBack() : props.navigation.goBack()}>
                    <Icon name="arrow-back" />
                </Button>
            </Left>}
            <Body style={styles.body}>
                {centerComponent}
            </Body>
            <Right>
                <Button style={{backgroundColor:'rgba(0, 0, 0, 0)', elevation: 0}}>
                    <Icon name="md-more" />
                </Button>
            </Right>
        </Header>
        )
    }

export default AppHeader