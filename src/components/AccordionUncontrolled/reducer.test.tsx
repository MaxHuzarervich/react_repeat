import {reducer, stateType, TOGGLE_COLLAPSED} from "./reducer";

test('collapsed should be true', () => {
//data

    const state:stateType = {
        collapsed: false
    }

//action

    let result = reducer(state, {type:TOGGLE_COLLAPSED})

//expect

expect(result.collapsed).toBe(true)

})

test('collapsed should be false', () => {
//data

    const state:stateType = {
        collapsed: true
    }

//action

    let result = reducer(state, {type:TOGGLE_COLLAPSED})

//expect

    expect(result.collapsed).toBe(false)

})

test('collapsed should be true', () => {
//data

    const state:stateType = {
        collapsed: false
    }

//action

    expect(() => {
        reducer(state, {type: 'FAKETYPE'})
    }).toThrowError()

})