import React from 'react';
import './WhyMeBlock.css';

function WhyMeBlock(props) {
    const Data = props.Data;
    const img = `./img/${Data.img}`
    return (
        <div className="WhyMeBlock">
            <div className="WhyMeBlock-Head">
                <div>
                    <img src={img}></img>
                </div>
                <h1> { Data.Title } </h1>
            </div>
            <div className="WhyMeBlock-Body">
                <p>
                    { Data.Body }
                </p>
            </div>
        </div>
    )
}

export default WhyMeBlock;
