import React, {useState} from "react";

type propsTypeAccordion = {
    titleValue: string
}

export function AccordionUncontrolled({titleValue}: propsTypeAccordion) {

    const [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle title={titleValue}  onClick={() => setCollapsed(!collapsed)}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type propsTypeAccordionTitle = {
    title: string
    onClick: () => void
}

function AccordionTitle({title, onClick}: propsTypeAccordionTitle) {

    return (
        <div>
            <h3 onClick={()=>{onClick()}}
                style={{marginLeft: '15px'}}>
                {title}
            </h3>
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
