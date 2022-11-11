import React from "react";

type itemType = {
    title: string
    value: any
}

type propsTypeAccordion = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: itemType[]
    onClick: (value: any) => void
}

export const AccordionControlled = React.memo(
    ({titleValue, collapsed, onChange, items, onClick}: propsTypeAccordion) => {

        console.log('Accordion renderer')

        return (
            <div>
                Controlled<br/>
                <AccordionTitle title={titleValue} onChange={onChange}/>
                {!collapsed && <AccordionBody items={items} onClick={onClick}/>}
            </div>
        )
    })


type propsTypeAccordionTitle = {
    title: string;
    onChange: () => void
}

const AccordionTitle = ({title, onChange}: propsTypeAccordionTitle) => {
    console.log('AccordionTitle renderer')
    return <h3 onClick={onChange}>{title}</h3>
}

type AccordionBodyType = {
    items: itemType[]
    onClick: (value: any) => void
}

function AccordionBody({items, onClick}: AccordionBodyType) {
    console.log('AccordionBody renderer')
    return <ul>
        {items.map((i, index) => <li onClick={() => onClick(i.value)} key={index}>{i.title}</li>)}
    </ul>
}
