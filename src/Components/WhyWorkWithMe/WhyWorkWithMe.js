import React from 'react';
import WhyMeBlock from '../WhyMeBlock/WhyMeBlock';
import WhyMe from '../../Resources/WhyMe';
import uuid from 'uuid';
import Fade from 'react-reveal/Fade';
import './WhyWorkWithMe.css';

function WhyWorkWithMe() {
    return (
        <div id="WhyWorkWithMe-Section">
            <Fade bottom delay={200} distance={"60%"}>
                <div id="WhyWorkWithMe-Title">
                    <h1>Why Work With Me</h1>
                </div>
            </Fade>
            <div id="WhyWorkWithMe-Body">
                    <div id="WhyWorkWithMe-Grid">
                        <WhyMeBlock key={uuid.v4()} Data={WhyMe[0]} />
                        <WhyMeBlock key={uuid.v4()} Data={WhyMe[1]} />
                        <WhyMeBlock key={uuid.v4()} Data={WhyMe[2]} />
                    </div>  
            </div>
        </div>
    )
}

export default WhyWorkWithMe;
