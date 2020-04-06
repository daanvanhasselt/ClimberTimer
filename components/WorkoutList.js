import React from 'react'
import { connect } from 'react-redux'

import { StyleSheet, ScrollView, View } from 'react-native'
import { Text, List, ListItem } from 'native-base'

import HangboardSelector from './HangboardSelector'
import Header from './Header'

const styles = StyleSheet.create({
    mainContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
})

// single workout list item
function Item({ navigation, workout }) {
    return (
    <ListItem 
        onPress={() => {
            navigation.push('Workout', { workout: workout })
        }}>
        <Text>{workout.title}</Text>
    </ListItem>
    )
}

function WorkoutList(props) {
    // workouts for selected hangboard
    const workouts = props.hangboard.workouts
    const items = workouts.map((workout, i) => {
        return <Item key={i} navigation={props.navigation} workout={workout}/>
    })

    return (
        <View style={styles.mainContent}>
            <Header title="Hangboard Training" backButton={false} menuButton={true} navigation={props.navigation} />
            <HangboardSelector />
            <ScrollView style={{ width: '100%' }}>
                <List>
                {(items && items.length > 0) ? items : <ListItem><Text style={{marginLeft: 'auto', marginRight: 'auto'}}>No workouts</Text></ListItem>}
                </List>
            </ScrollView>
        </View>
    )
}

// get state through props
const mapStateToProps = (state) => ({
    hangboard: state.hangboard.hangboards[state.hangboard.selectedHangboard]
})

export default connect(mapStateToProps)(WorkoutList)