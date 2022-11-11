import React, {useRef, useState} from "react";


export const UncontrolledInput = () => {
    <input/>
}

export const TrackValueUncontrolledInput = React.memo(() => {
    const [value, setValue] = useState('')
    return <><input onChange={e => setValue(e.currentTarget.value)}/> - {value}</>
})

export const GetValueOfUncontrolledInput = React.memo(() => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)  //при помощи хука useRef создаем ссылку
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <div>
        <input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actual value:{value}</div>
})