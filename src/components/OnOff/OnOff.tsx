import React, {useState} from "react";

export const OnOff = () => {

    // const on = false

    const [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '2px solid black',
        display: 'inline-block',
        margin: '0px 0px 3px 3px',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '2px solid black',
        display: 'inline-block',
        margin: '0px 0px 3px 3px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        margin: '0px 0px 3px 3px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red'
    }


    return (

        <div>
            <div onClick={()=>{setOn(true)}} style={onStyle}>ON</div>
            <div onClick={()=>{setOn(false)}} style={offStyle}>OFF</div>
            <div style={indicatorStyle}/>
        </div>
    )
}