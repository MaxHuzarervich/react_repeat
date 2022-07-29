import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {AccordionUncontrolled} from "./components/AccordionUncontrolled/AccorcdionUncontrolled";
import {RatingUncontrolled} from "./components/RatingUncontrolled/RatingUncontrolled";


function Hello() {
    alert('Hello!')
}

// Hello();


function App() {
    return (
        <div>
            {/*<PageTitle title={'This is App Title'}/>*/}
            {/*<PageTitle title={'Hello'}/>*/}
            {/*<Rating value={3}/>*/}
            <AccordionUncontrolled titleValue={'Menu'}/>
            {/*<Accordion collapsed={false} titleValue={'Users'}/>*/}
            <RatingUncontrolled />
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<OnOff/>*/}
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
