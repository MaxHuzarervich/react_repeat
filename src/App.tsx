import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {RatingUncontrolled} from "./components/RatingUncontrolled/RatingUncontrolled";
import {AccordionUncontrolled} from "./components/AccordionUncontrolled/AccorcdionUncontrolled";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {

    const [RatingValue, setRatingValue] = useState<RatingValueType>(0)

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    const [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div>
            {/*<PageTitle title={'This is App Title'}/>*/}
            {/*<PageTitle title={'Hello'}/>*/}
            <AccordionUncontrolled titleValue={'Menu'}/>
            <Accordion
                collapsed={accordionCollapsed}
                onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                titleValue={'Users'}/>
            <RatingUncontrolled/>
            <Rating value={RatingValue} onClick={setRatingValue}/>
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
        </div>
    );
}

type propsTypePageTitle = {
    title: string;
}

function PageTitle(props: propsTypePageTitle) {
    return <h1>{props.title}</h1>
}


export default App;
