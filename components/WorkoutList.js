import React from 'react'
import { connect } from 'react-redux'

import { StyleSheet, ScrollView, View } from 'react-native'
import { Text, List, ListItem } from 'native-base'

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

// single workout list item
function Item({ workout }) {
    return (
    <ListItem key={workout.id}>
        <Text>{workout.title}</Text>
    </ListItem>
    )
}

function WorkoutList(props) {
    // workouts for selected hangboard
    const workouts = HangboardDetails[props.hangboard].workouts
    const items = workouts.map((workout) => {
        return <Item workout={workout}/>
    })

    return (
        <View style={styles.mainContent}>
            <HangboardSelector />
            <ScrollView style={{ width: '100%' }}>
                <List>
                    {items}
                </List>
            </ScrollView>
        </View>
    )
}

// get state through props
const mapStateToProps = (state) => ({
    hangboard: state.hangboard.hangboard
})

export default connect(mapStateToProps)(WorkoutList)