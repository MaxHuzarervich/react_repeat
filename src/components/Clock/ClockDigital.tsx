import React from "react";
import {ClockViewPropsType, get2digitString} from "./Clock";


export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{get2digitString(date.getHours())}:</span>
        <span>{get2digitString(date.getMinutes())}:</span>
        <span>{get2digitString(date.getSeconds())}</span>
    </>
}