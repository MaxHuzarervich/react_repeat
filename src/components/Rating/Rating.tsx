import React from "react";

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5

type propsTypeRating = {
    onClick: (value: RatingType) => void
    value: RatingType
}

export function Rating({value,onClick}:propsTypeRating) {

    return (
        <div>
            <Star selected={value > 0} onClick={onClick} value={1}/>
            <Star selected={value > 1} onClick={onClick} value={2}/>
            <Star selected={value > 2} onClick={onClick} value={3}/>
            <Star selected={value > 3} onClick={onClick} value={4}/>
            <Star selected={value > 4} onClick={onClick} value={5}/>
        </div>
    )
}

type propsTypeStar = {
    selected: boolean
    onClick: (value: RatingType) => void
    value: RatingType
}

function Star({selected,value,onClick}:propsTypeStar) {
    {
        return <span onClick={()=>onClick(value)}>
            {selected ? <b>star</b> : 'star'}
            </span>
    }
}