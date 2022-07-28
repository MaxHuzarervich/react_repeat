import React from "react";

type propsTypeRating = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating({value}:propsTypeRating) {

    return (
        <div>
            <Star selected={value > 0}/>
            <Star selected={value > 1}/>
            <Star selected={value > 2}/>
            <Star selected={value > 3}/>
            <Star selected={value > 4}/>
        </div>
    )
}

type propsTypeStar = {
    selected: boolean
}

function Star({selected}:propsTypeStar) {
    {
        return selected ? <span><b>star</b></span> : <span>star</span>
    }
}