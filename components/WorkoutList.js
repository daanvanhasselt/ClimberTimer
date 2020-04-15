import React, { useState, useContext } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addWorkout } from '../state/Actions'

import { StyleSheet, ScrollView, View } from 'react-native'
import { Text, List, ListItem, Footer, FooterTab, Button, Icon } from 'native-base'

import HangboardSelector from './HangboardSelector'
import Header from './Header'

import WorkoutContext from '../context/WorkoutContext'

const styles = StyleSheet.create({
    mainContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    center: {
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})

// single workout list item
function Item({ navigation, workout }) {
    return (
    <ListItem 
        onPress={() => {
            navigation.push('Workout', { workout: workout.id })
        }}>
        <Text>{workout.title}</Text>
    </ListItem>
    )
}

function WorkoutList(props) {
    const customWorkouts = useContext(WorkoutContext)
    const hangboard = customWorkouts ? props.customHangboard : props.hangboard

    const modes = {
        builtin: 0,
        custom: 1
    }
    const [mode, setMode] = useState(customWorkouts ? modes.custom : modes.builtin)

    // workouts for selected hangboard and mode
    const workouts = hangboard.workouts.filter((workout) => ((mode === modes.builtin && workout.locked === true) || (mode === modes.custom && workout.locked == false)))
    const items = workouts.map((workout, i) => {
        return <Item key={i} navigation={props.navigation} workout={workout}/>
    })

    return (
        <View style={styles.mainContent}>
            <Header title={customWorkouts ? "Custom Training" : "Hangboard Training"} backButton={false} menuButton={true} navigation={props.navigation} />
            {customWorkouts || <HangboardSelector />}


            <ScrollView style={{ width: '100%' }}>
                <List>
    {(items && items.length > 0) ? items : <ListItem><Text style={styles.center}>No {mode === modes.builtin ? "built-in" : "custom"} workouts</Text></ListItem>}
                </List>

                {mode === modes.custom && <Button 
                        className="addWorkout"
                        full success
                        onPress={() => {
                            // dispatch action
                            props.addWorkout(hangboard.id)
                        }}>
                        <Text>Add workout</Text>
                    </Button>}
            </ScrollView>

            {customWorkouts || <Footer>
                <FooterTab>

                    <Button vertical active={mode == modes.builtin}
                            onPress={()=>setMode(modes.builtin)}>
                    <Icon active={mode == modes.builtin} name="cube" />
                    <Text>Built-in</Text>
                    </Button>
                    <Button vertical active={mode == modes.custom}
                            onPress={()=>setMode(modes.custom)}>
                    <Icon active={mode == modes.custom} name="person" />
                    <Text>Custom</Text>
                    </Button>
                </FooterTab>
            </Footer>}

        </View>
    )
}

// get state through props
const mapStateToProps = (state) => ({
    hangboard: state.hangboard.hangboards[state.hangboard.selectedHangboard],
    customHangboard: state.hangboard.hangboards.find((hangboard) => hangboard.custom === true)
})

// set state through props
const mapDispatchToProps = (dispatch) => bindActionCreators({
    addWorkout
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutList)