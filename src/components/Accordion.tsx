import React from "react";

type propsTypeAccordion = {
    titleValue: string;
    collapsed: boolean;
}

export function Accordion({titleValue,collapsed}:propsTypeAccordion) {

     return (
        <div>
            <AccordionTitle title={titleValue}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )}


    type propsTypeAccordionTitle = {
        title: string;
    }

    function AccordionTitle(props: propsTypeAccordionTitle) {
        return <h3>{props.title}</h3>
    }

    function AccordionBody() {
        return <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    }
