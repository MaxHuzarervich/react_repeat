import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingType} from "./components/Rating/Rating";


function Hello() {
    alert('Hello!')
}

// Hello();


function App() {

    const [RatingValue, setRatingValue] = useState<RatingType>(0)

    return (
        <div>
            {/*<PageTitle title={'This is App Title'}/>*/}
            {/*<PageTitle title={'Hello'}/>*/}
            <Rating value={RatingValue} onClick={setRatingValue}/>
            {/*<AccordionUncontrolled titleValue={'Menu'}/>*/}
            <Accordion collapsed={false} titleValue={'Users'}/>
            {/*<RatingUncontrolled />*/}
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
