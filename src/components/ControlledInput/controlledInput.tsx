import React, {ChangeEvent, useState} from "react";


export const ControlledInput = React.memo(() => {
    const [parentValue, setParentValue] = useState('')

    const change = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={change}/>
})

export const ControlledCheckbox = React.memo(() => {
    const [value, setValue] = useState<boolean>(true)

    const change = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }

    return <div>
        <input type={'checkbox'} checked={value} onChange={change}/>
    </div>
})

export const ControlledSelect = React.memo(() => {
    const [value, setValue] = useState('1')

    const change = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return <select value={value} onChange={change}>
        <option>none</option>
        <option value={'1'}>1</option>
        <option value={'2'}>2</option>
        <option value={'3'}>3</option>
    </select>
})