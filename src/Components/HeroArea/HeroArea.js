import React from 'react';
import MouseScroll from '../MouseScroll/MouseScroll';
import './HeroArea.css';

function HeroArea() {
    return (
        <div id="HeroArea">
            <div className="Container HeroContainer PrimaryFont">
                <h1 className="Text-1 "> Hi, I am <span className="AlternateFont">Bhushan Kolhe</span>.</h1>
                <h1 className="Text-2 AlternateFont"> I like to build things.</h1>
                <h1 className="Text-3">I am software developer based in India and I build things like  
                    <span className="AlternateFont"> Websites</span>, <span className="AlternateFont"> 
                    Applications</span> and <span className="AlternateFont">Games</span>. 
                </h1>
                <button className="GetInTouch-Btn">Get In Touch </button>
            </div>
            <MouseScroll />
        </div>
    )
}

export default HeroArea;
