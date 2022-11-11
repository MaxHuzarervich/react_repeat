import styles from './Select.module.css'
import {useEffect, useState} from "react";

type itemType = {
    title: string
    value: any
}

type selectType = {
    value?: any
    onChange: (value: any) => void
    items: itemType[]
}

export const Select = ({items, onChange, value}: selectType) => {

    const [active, setActive] = useState<boolean>(false)
    const [hoveredElement, setHoveredElement] = useState(value)
    useEffect(() => {
        setHoveredElement(value)
    }, [value])

    const showItems = () => {
        setActive(!active)
    }
    const toggleItems = (value: any) => {
        onChange(value);
        showItems()
    }

    const selectedItem = items.find(el => el.value === value)
    const hoveredItem = items.find(el => el.value === hoveredElement)
    const onKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
        debugger
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hoveredElement) {

                    const pretendentElement = e.key === 'ArrowDown'
                        ? items [i + 1]
                        : items[i - 1];

                    if (pretendentElement) {
                        onChange(pretendentElement.value)
                        return;
                    }
                }
            }if(!selectedItem){
            onChange(items[0].value)}
        }
        if(e.key==='Enter'||e.key==='Escape'){
            setActive(false)
        }
    }

    return (
        <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span
                className={styles.main}
                onClick={showItems}>{selectedItem && selectedItem.title}
            </span>
            {active && <div className={styles.items}>
                {items.map(i => <div
                    onMouseEnter={() => setHoveredElement(i.value)}
                    className={hoveredItem === i ? styles.item : ''}
                    onClick={() => {
                        toggleItems(i.value)
                    }}
                    key={i.value}>{i.title}</div>)}
            </div>}
        </div>
    )
}