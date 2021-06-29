import React from 'react';

import Intro from '../Components/Intro/Intro';
import Articles from '../Components/Articles/Articles';
import About from '../Components/About/About';

const MainPage = () => {
    return(
        <>
            <Intro/>
            <Articles/>
            <About/>
        </>
    )
};

export default MainPage;