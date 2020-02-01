import React from 'react';
import Fade from 'react-reveal/Fade';
import './MouseScroll.css'

function MouseScroll() {
    return (
        <Fade bottom cascade delay={1600} distance={"60%"}>
            <div className="mouse-position">  
                <div className="mouse-container">
                    <span className="mouse-outer">
                    <span className="mouse-wheel"></span>
                    </span>
                </div>
            </div>
        </Fade>
    )
}

export default MouseScroll
