import React, {useState} from "react";

function generation() {
    console.log('generateData')
    return 1
}

export const Example_1 = () => {
    console.log('Example_1')
    const [counter, setCounter] = useState(generation)
    return <>
        <button onClick={() => {setCounter(state => state + 1)}}/>
        {counter}
    </>
}