import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type propsTypeAccordion = {
    titleValue: string
}

export const AccordionUncontrolled = React.memo(({titleValue}: propsTypeAccordion) => {

    console.log('Accordion renderer')

    const [state, dispatch] = useReducer(reducer, {collapsed:false})

    return (
        <div>
            Uncontrolled<br/>
            <AccordionTitle
                title={titleValue}
                onClick={() => dispatch({type: TOGGLE_COLLAPSED})}
            />
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
})

type propsTypeAccordionTitle = {
    title: string
    onClick: () => void
}

const AccordionTitle = React.memo(({title, onClick}: propsTypeAccordionTitle) => {

    console.log('AccordionTitleRenderer')

    return (
        <div>
            <h3 onClick={() => {
                onClick()
            }}
                style={{marginLeft: '15px'}}>
                {title}
            </h3>
        </div>
    )
})

const AccordionBody = React.memo(() => {

    console.log('AccordionBodyRenderer')

    return <ul style={{margin: '15px'}}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
})

