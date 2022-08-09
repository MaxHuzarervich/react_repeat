import React from "react";

type propsTypeAccordion = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

export function Accordion({titleValue,collapsed, onChange}:propsTypeAccordion) {

     return (
        <div>
            Controlled<br/>
            <AccordionTitle title={titleValue} onChange={onChange}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )}


    type propsTypeAccordionTitle = {
        title: string;
        onChange: () => void
    }

    function AccordionTitle({title,onChange}:propsTypeAccordionTitle) {
        return <h3 onClick={onChange}>{title}</h3>
    }

    function AccordionBody() {
        return <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    }
