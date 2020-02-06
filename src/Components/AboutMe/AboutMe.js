import React from 'react';
import RandomQuotes from '../../Resources/Quotes';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import './AboutMe.css';

function AboutMe() {
    const [ Quote, setQuote ] = useState(RandomQuotes());

    const OnReveal = () => {
        setInterval(()=> {
            const quote = RandomQuotes();
            setQuote(quote);
        }, 10000);
    }



    return (
        <div id="AboutMe">
            <Fade onReveal={OnReveal} bottom cascade distance={"60%"}>
                <div id="AboutMe-Container">
                    <div id="AboutMe-Left">
                        <img src="./img/avatar.svg" alt="My Illustration" />
                    </div>
                    <div id="AboutMe-Right">
                        <div id="AboutMe-Title">
                            <h1> About Me. </h1>
                        </div>
                        <div id="AboutMe-Body">
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hey!, my name Bhushan Kolhe and I am a Computer Engineer. 
                                I am fresh out of my university and currently searching for a hook in life. I am contagiously 
                                optimistic and love to be as high on life as a puppy. I am also a philosopher who loves to ponder 
                                upon the simplicity of our complex universe and a fiction nerd fantasizing about 
                                transcending reality. 
                                <br/>
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Like the sun which is always ready to rise in the morning, I am 
                                always ready to learn new skills and pick up a new project so if you have an idea or if you 
                                just want to have a chat, Be quick as a flash and Hit me up! :)   
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
