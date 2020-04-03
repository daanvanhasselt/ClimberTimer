import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ScrollView, View, StyleSheet } from 'react-native'
import { List, ListItem, Text } from 'native-base'
import Header from './Header'
import HangboardSelector from './HangboardSelector'

const styles = StyleSheet.create({
    mainContent: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#F5FCFF',
    },
    listItem: {
        marginLeft: 0,
        // flex:1,
        // paddingRight: 0,
        // alignItems: 'flex-start',
        // width:'100%', 
        // textAlign: 'center',
    },
    selectedListItem: {
        backgroundColor: '#e0e0e0'
    },
    listItemText: {
        paddingLeft: 20,
    }
})

// single hold list item
function Item({ hold, onPress, selected }) {
    return (
        <ListItem style={[styles.listItem, selected && styles.selectedListItem]} onPress={onPress}>
            <Text style={styles.listItemText}>{(selected ? "x   " : "     ") + hold.name}</Text>
        </ListItem>
    )
}

function HoldSelector(props) {
    const toggleHold = (hold) => {
         // update its selected holds
         let updatedHolds = props.selectedHolds.slice()
         let searchIndex = updatedHolds.indexOf(hold)
         if(searchIndex === -1) {
            updatedHolds.push(hold)
         }
         else {
            updatedHolds.splice(searchIndex, 1)
         }

         props.setHolds(updatedHolds)
    }
    const holds = props.hangboard.holds || []
    const items = holds.map((hold, i) => {
        return <Item key={i} hold={hold} selected={props.selectedHolds.includes(hold.id)}
                    onPress={()=>{
                        toggleHold(hold.id)
                    }}/>
    })

    return (
        <React.Fragment>
            <Header title="Select Holds" menuButton={false} doneButton={true} done={props.close} navigation={props.navigation} />
                <View style={styles.mainContent}>
                    <HangboardSelector 
                        showHolds={true} 
                        showNonSelectedHolds={true} 
                        selectedHolds={props.selectedHolds}
                        disableHangboardSwitch={props.disableHangboardSwitch}/>
                    <ScrollView>
                        <List>
                            {items}
                        </List>
                    </ScrollView>
                </View>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
})

// set state through props
const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HoldSelector)
