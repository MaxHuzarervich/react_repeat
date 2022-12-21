import React, {useEffect, useState} from 'react';
import {DigitalClockView} from "./ClockDigital";
import {AnalogClockView} from "./AnalogClock";

export const get2digitString = (num: number) => num < 10 ? '0' + num : num

type PropsType = {
    mode: 'analog' | 'digital'
}

export const Clock: React.FC<PropsType> = props => {

    const {mode} = props

    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalID = setInterval(() => {
                console.log('TICK')
                setDate(new Date())
            },
            1000)

        return () => {
            clearInterval(intervalID)
        }

    }, [])

    let view;

    switch (mode) {
        case "digital":
            return <DigitalClockView date={date}/>
        case "analog":
        default:
            return <AnalogClockView date={date}/>
    }
}

export type ClockViewPropsType = {
    date: Date
}