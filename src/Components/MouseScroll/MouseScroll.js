import React from 'react';
import './MouseScroll.css'

function MouseScroll() {
    return (
        <div className="mouse-position">  
            <div className="mouse-container">
                <span className="mouse-outer">
                <span className="mouse-wheel"></span>
                </span>
            </div>
        </div>
    )
}

export default MouseScroll
