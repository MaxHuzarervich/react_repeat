import React, {useState} from 'react';
import './App.css';
import {AccordionControlled} from "./components/Accordion/AccordionControlled";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {RatingUncontrolled} from "./components/RatingUncontrolled/RatingUncontrolled";
import {AccordionUncontrolled} from "./components/AccordionUncontrolled/AccorcdionUncontrolled";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {
    GetValueOfUncontrolledInput,
    TrackValueUncontrolledInput
} from "./components/UncontrolledInput/uncontrolledInput";
import {ControlledCheckbox, ControlledInput, ControlledSelect} from "./components/ControlledInput/controlledInput";
import {Select} from "./components/Select/Select";
import {log} from "util";
import {Example1} from "./components/ReactMemo/ReactMemo";

function App() {

    const [RatingValue, setRatingValue] = useState<RatingValueType>(0)

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    const [switchOn, setSwitchOn] = useState<boolean>(false)

    const [value, setValue] = useState('2')

    return (
        <div>
            {/*<PageTitle title={'This is App Title'}/>*/}
            {/*<PageTitle title={'Hello'}/>*/}
            {/*<AccordionUncontrolled titleValue={'Menu'}/>*/}
            {/*<AccordionControlled*/}
            {/*    onClick={(value)=>{*/}
            {/*        console.log(`ID ${value}`)}}*/}
            {/*    collapsed={accordionCollapsed}*/}
            {/*    onChange={() => setAccordionCollapsed(!accordionCollapsed)}*/}
            {/*    titleValue={'Users'}*/}
            {/*    items={[{title:'1',value:1},{title:'2',value:2},{title:'3',value:3}]}*/}
            {/*/>*/}
            {/*<RatingUncontrolled/>*/}
            {/*<Rating value={RatingValue} onClick={setRatingValue}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            {/*<UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<TrackValueUncontrolledInput/>*/}
            {/*<GetValueOfUncontrolledInput/>*/}
            <ControlledInput/>
            {/*<ControlledCheckbox/>*/}
            {/*<ControlledSelect/>*/}
            {/*<Select*/}
            {/*    value={value}*/}
            {/*    onChange={setValue}*/}
            {/*    items={[{title: 'BMW', value: '1'}, {title: 'Mercedes', value: '2'}, {title: 'Volvo', value: '3'}]}/>*/}
            {/*<Select*/}
            {/*    // onChange={() => console.log('Hello!')}*/}
            {/*    // items={[{title: 'BMW', value: '1'}, {title: 'Mercedes', value: '2'}, {title: 'Volvo', value: '3'}]}/>*/}
            {/*<Example1/>*/}
        </div>
    );
}

// type propsTypePageTitle = {
//     title: string;
// }
//
// function PageTitle(props: propsTypePageTitle) {
//     return <h1>{props.title}</h1>
// }


export default App;
