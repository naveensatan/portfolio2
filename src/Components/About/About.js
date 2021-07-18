import React from 'react';

import HeadShot from '../../headshot.jpg';
import Social from '../Social/Social';

const About = () => (
    <>
        <div id="about"></div>
        <div>
            <h2 className="section-title">A bit about the author...</h2>
        </div>
        <div className="about-section-container">
            <div className="about-content-head">
                <img src={HeadShot} alt="author_headshot" className="author-headshot"></img>
                <div className="about-content-head-details">
                    <h1>Kasunjith Satanarachchi</h1>
                    <ul>
                        <li>LLB Graduate at Staffordshire University, UK</li>
                        <li>Youth Advocate at United Nations, Sri Lanka</li>
                        <li>Former Member of the Youth Parliment, Sri Lanka</li>
                    </ul>
                    <div className="about-content-body">
                        <h3>Follow Kasunjith...</h3>
                        <div className="about-content-social">
                            <Social/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default About