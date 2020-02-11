import React from 'react';
import MouseScroll from '../MouseScroll/MouseScroll';
import Fade from 'react-reveal/Fade';
import './HeroArea.css';

function HeroArea() {
    return (
        <div id="HeroArea">
            <Fade bottom delay={200} cascade delay={1000} distance={"60%"}>
                <div className="Container HeroContainer PrimaryFont">
                    <h1 className="Text-1 "> Hi, I am <span className="AlternateFont">Bhushan Kolhe</span>.</h1>
                    <h1 className="Text-2 AlternateFont"> I love to build things.</h1>
                    <h1 className="Text-3">I am software developer based in India and I love to build beautifull things such as  
                        <span className="AlternateFont"> Websites</span>, <span className="AlternateFont"> 
                        Applications</span> and <span className="AlternateFont">Games</span>. 
                    </h1>
                    <div>
                        <a href="#ContactMe">
                            <button className="GetInTouch-Btn">Get In Touch </button>
                        </a>
                    </div>

                </div>
            </Fade>
            <MouseScroll />
        </div>
    )
}

export default HeroArea;
