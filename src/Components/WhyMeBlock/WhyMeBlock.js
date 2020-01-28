import React from 'react';
import Fade from 'react-reveal/Fade';
import './WhyMeBlock.css';

function WhyMeBlock(props) {
    const Data = props.Data;
    const img = `./img/${Data.img}`;
    const DelayIndex = props.DelayIndex;
    return (
        <div className="WhyMeBlock">
            <div className="WhyMeBlock-Head">
                <Fade bottom distance={"60%"}>
                    <div>
                        <img src={img}></img>
                    </div>
                </Fade>
                <Fade bottom distance={"60%"}>
                    <h1> { Data.Title } </h1>
                </Fade>
            </div>
            <Fade bottom distance={"60%"}>
                <div className="WhyMeBlock-Body">
                    <p>
                        { Data.Body }
                    </p>
                </div>
            </Fade>
        </div>
    )
}

export default WhyMeBlock;
