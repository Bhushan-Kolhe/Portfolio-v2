import React from 'react';
import './AboutMe.css';

function AboutMe() {
    return (
        <div id="AboutMe">
            <div id="AboutMe-Container">
                <div id="AboutMe-Left">

                </div>
                <div id="AboutMe-Right">
                    <div id="AboutMe-Title">
                        <h1> About Me. </h1>
                    </div>
                    <div id="AboutMe-Body">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets
                        </p>
                    </div>
                    <div id="AboutMe-Quote">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a 
                        </p>
                        <small>- Bhushan Kolhe</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
