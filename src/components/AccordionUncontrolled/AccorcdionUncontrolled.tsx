import React, {useState} from "react";

type propsTypeAccordion = {
    titleValue: string
}

export function AccordionUncontrolled({titleValue}: propsTypeAccordion) {

    return (
        <div>
            <AccordionTitle title={titleValue}/>
            {/*<button onClick={setFalse}>+</button>*/}
            {/*{!collapsed && <AccordionBody/>}*/}
        </div>
    )
}


type propsTypeAccordionTitle = {
    title: string
}

function AccordionTitle({title}: propsTypeAccordionTitle) {

    const [collapsed, setCollapsed] = useState(true)

    const setFalse = () => setCollapsed(!collapsed)

    return (
        <div>
            <h3
                onClick={setFalse}
                style={{marginLeft: '15px'}}>
                {title}
            </h3>
            <div>
                {!collapsed && <AccordionBody/>}
            </div>
        </div>
    )
}

function AccordionBody() {
    return <ul style={{margin: '15px'}}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
