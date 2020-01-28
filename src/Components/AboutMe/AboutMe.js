import React from 'react';
import RandomQuotes from '../../Resources/Quotes';
import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import './AboutMe.css';

function AboutMe() {
    const [ Quote, setQuote ] = useState(RandomQuotes());

    useEffect(() => {
        setInterval(()=> {
            const quote = RandomQuotes();
            setQuote(quote);
        }, 15000);
    },[]);

    return (
        <div id="AboutMe">
            <Fade bottom cascade distance={"60%"}>
                <div id="AboutMe-Container">
                    <div id="AboutMe-Left">
                        <img src="./img/1.png" />
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
                        <div id="AboutMe-Quote" className="Quote-Animation">
                            <p>
                                {Quote.quote}
                            </p>
                            <small>- {Quote.by}</small>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default AboutMe;
