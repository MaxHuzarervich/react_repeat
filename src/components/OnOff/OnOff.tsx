import React from "react";

type OnOffType = {
    on: boolean
    onChange: (on:boolean) => void
}

export const OnOff = React.memo(({on, onChange}:OnOffType) => {


    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '0px 0px 3px 3px',
        padding: '2px',
        borderRadius: '2px',
        backgroundColor: on ? 'green' : 'white',
        transition: '0.3s'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '0px 0px 3px 3px',
        padding: '2px',
        borderRadius: '2px',
        backgroundColor: on ? 'white' : 'red',
        transition: '0.3s'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        margin: '0px 0px 3px 3px',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red',
        transition: '0.5s'
    }


    return (

        <div>
            <div onClick={()=>{ onChange(true) }} style={onStyle}>ON</div>
            <div onClick={()=>{ onChange(false) }} style={offStyle}>OFF</div>
            <div style={indicatorStyle}/>
        </div>
    )
})