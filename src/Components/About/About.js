import React from 'react';

import HeadShot from '../../headshot.jpg';

const About = () => (
    <>
        <div id="about"></div>
        <div>
            <h2 className="section-title">About</h2>
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
                        {/* <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p> */}
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default About