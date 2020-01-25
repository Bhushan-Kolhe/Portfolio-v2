import React from 'react';
import WhyMeBlock from '../WhyMeBlock/WhyMeBlock';
import WhyMe from '../../Resources/WhyMe';
import './WhyWorkWithMe.css';

function WhyWorkWithMe() {
    return (
        <div id="WhyWorkWithMe-Section">
            <div id="WhyWorkWithMe-Title">
                <h1>Why Work With Me</h1>
            </div>
            <div id="WhyWorkWithMe-Body">
                <div id="WhyWorkWithMe-Grid">
                    <WhyMeBlock Data={WhyMe[0]} />
                    <WhyMeBlock Data={WhyMe[1]} />
                    <WhyMeBlock Data={WhyMe[2]} />
                </div>
            </div>
        </div>
    )
}

export default WhyWorkWithMe;
