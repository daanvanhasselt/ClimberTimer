import React from 'react'
import renderer from 'react-test-renderer'
import NumberPicker from '../components/NumberPicker'

test('<NumberPicker />', () => {
    const tree = renderer.create(<NumberPicker />).toJSON()
})

test('<NumberPicker /> displays value', () => {
    const checkValues = (value, stringValue) => {
        const tree = renderer.create(<NumberPicker value={value} />)
        const instance = tree.root
        const valueLabel = instance.findByProps({className: "value"})
        expect(valueLabel.props.value).toBe(stringValue)
    }

    checkValues(0, "00")
    checkValues(3, "03")
    checkValues(-1, "00")
    checkValues(99, "99")
    checkValues(100, "100")
})

test('<NumberPicker /> increments and decrements', () => {
    let value = 0
    const valueSetter = jest.fn(v => value = v)

    const update = () => {
        const tree = renderer.create(<NumberPicker value={value} valueSetter={valueSetter} />)
        const decrementButton = tree.root.findByProps({className: "decrement"})
        const incrementButton = tree.root.findByProps({className: "increment"})
        return [ tree, decrementButton, incrementButton ]
    }
    

    // increment to 1
    let [tree, decrementButton, incrementButton] = update()
    incrementButton.props.onPress()
    expect(valueSetter).toHaveBeenLastCalledWith(1)

    // increment to 2
    {[tree, decrementButton, incrementButton] = update()}
    incrementButton.props.onPress()
    expect(valueSetter).toHaveBeenLastCalledWith(2)

    // decrement to 1
    {[tree, decrementButton, incrementButton] = update()}
    decrementButton.props.onPress()
    expect(valueSetter).toHaveBeenLastCalledWith(1)

    // decrement to 0
    {[tree, decrementButton, incrementButton] = update()}
    decrementButton.props.onPress()
    expect(valueSetter).toHaveBeenLastCalledWith(0)

    // dont go negative
    {[tree, decrementButton, incrementButton] = update()}
    decrementButton.props.onPress()
    expect(valueSetter).toHaveBeenLastCalledWith(0)
})