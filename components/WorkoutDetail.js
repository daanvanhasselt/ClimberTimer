import React from 'react'
import { connect } from 'react-redux'

import { StyleSheet, ScrollView, View } from 'react-native'
import { Text, Button, Icon, List, ListItem } from 'native-base'

import { Details as HangboardDetails } from '../model/Hangboards'
import HangboardSelector from './HangboardSelector'

const styles = StyleSheet.create({
    mainContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
})

function WorkoutList(props) {
    return (
        <View style={styles.mainContent}>
            <Button iconLeft light
                onPress={() => props.navigation.goBack()}>
                <Icon name='arrow-back' />
                <Text>Back</Text>
            </Button>
            <Text>{props.route.params.workout.title}</Text>
        </View>
    )
}

// get state through props
const mapStateToProps = (state) => ({
    hangboard: state.hangboard.hangboard
})

export default connect(mapStateToProps)(WorkoutList)