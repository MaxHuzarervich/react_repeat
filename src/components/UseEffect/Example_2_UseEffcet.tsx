import React, {useEffect, useState} from "react";

export const ResetEffectExample = () => {

    const [text, setText] = useState('')

    console.log('COMPONENT RENDERER WITH - ' + text)

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)

        }

        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }

    }, [text])

    return <>
        Typed text: {text}
    </>
}

export const SetTimeOutExample = () => {

    const [text, setText] = useState('')

    console.log('COMPONENT RENDERER WITH - ' + text)

    useEffect(() => {

        const setTimeoutID = setTimeout(() => {
            setText('3 seconds passed')
        }, 3000)

        return () => {
            clearTimeout(setTimeoutID)
        }

    }, [text])

    return <>
        text: {text}
    </>

}