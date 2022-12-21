import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const Example_UseEffect = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('Example_UseEffect')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>counter+
        </button>
        <button onClick={() => {
            setFake(fake + 1)
        }}>fake+
        </button>
    </>
}

export const Set_Timeout_UseEffect = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('Set_Timeout_UseEffect')

    useEffect(() => {
        setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000)
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>counter+
        </button>
        <button onClick={() => {
            setFake(fake + 1)
        }}>fake+
        </button>
    </>
}

export const Set_Interval_UseEffect = () => {
    const [counter, setCounter] = useState(1)

    console.log('Set_Interval_UseEffect')

    useEffect(() => {
        setInterval(() => {
            console.log('setInterval')
            setCounter(state => state + 1)
        }, 1000)
    }, [])

    return <>
        Hello, counter: {counter}
    </>
}