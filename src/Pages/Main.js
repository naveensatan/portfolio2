import React from 'react';

import Header from '../Components/Header/Header';
import Intro from '../Components/Intro/Intro';
import Articles from '../Components/Articles/Articles';
import About from '../Components/About/About';

const MainPage = () => {
    return(
        <>
            <Header/>
            <Intro/>
            <Articles/>
            <About/>
        </>
    )
};

export default MainPage;