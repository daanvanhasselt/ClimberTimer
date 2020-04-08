import React from 'react'
import Image from 'react-native-scalable-image'
import { Dimensions, TouchableWithoutFeedback, View, StyleSheet } from 'react-native'

const HangboardView = (props) => {
    const width = props.width || Dimensions.get('window').width

    const styles = StyleSheet.create({
        wrapper: {
            
        },
        holdsContainer: {
            width: '100%',
            height: width / props.hangboard.aspect,
            position: 'absolute',
        },
        hold: {
            position: 'absolute',
            backgroundColor: 'rgba(50, 120, 154, 0.75)'
        },
        selectedHold: {
            backgroundColor: 'rgba(0, 255, 0, 0.85)'
        },
        testHold: {
            width: '13.5%',
            height: '12%',
            left: '79.5%',
            top: '27%',
            borderRadius: 10
        }
    })
    
    const holdViews = (props.hangboard.holds || []).map((hold, i) => {
        const holdStyle = StyleSheet.create({
            hold: {
                left: (hold.position.x).toFixed(2) + "%",
                top: (hold.position.y).toFixed(2) + "%",
                width: (hold.size.w).toFixed(2) + "%",
                height: (hold.size.h).toFixed(2) + "%",
                borderRadius: hold.cornerRadius
            }
        })

        const holdIsSelected = (props.selectedHolds || []).includes(hold.id)

        const style = [holdStyle.hold, styles.hold, holdIsSelected && styles.selectedHold]
        return (props.showHolds && (props.showNonSelectedHolds || holdIsSelected)) && <View key={i} style={style}></View>
    })

    const holdsContainer = (
        <View style={styles.holdsContainer}>
            {holdViews}
        </View>)

    const view = (
        <View style={styles.wrapper}>
            <Image
                width={width} 
                source={props.hangboard.img} />
            {props.showHolds && holdsContainer}
        </View>
    )

    if(props.onPress) {
        return (
            <TouchableWithoutFeedback onPress={props.onPress}>
                {view}
            </TouchableWithoutFeedback>
        )
    }

    return view
}

export default HangboardView