import React from 'react';

import HomePic from '../../7933.jpg';

const Intro = () => (
    <>
        <div className="intro-container">
            <div className="intro-pic-container">
                <img src={HomePic} alt="intro-pic" className="intro-pic"></img>
            </div>
            <div className="intro-text-container">
                <p className="intro-text-heading">Respect the Ability</p>
                <p className="intro-text-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
        </div>
    </>
);

export default Intro