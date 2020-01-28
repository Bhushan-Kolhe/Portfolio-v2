import React from 'react';
import SkillList from '../../Resources/Skills';
import uuid from 'uuid';
import Fade from 'react-reveal/Fade';
import './DesignSkillCard.css';

function DesignSkillCard() {
    const DesignSkills = SkillList.Design;
    
    return (
        <Fade bottom delay={300} distance={"60%"}>
            <div id="DesignSkillCard">
                <div className="SkillCard-Title">
                    <img src="./img/design.svg"></img>
                    <h1> Design </h1>
                </div>
                <div className="SkillCard-Section">
                    <div className="SkillCard-Section-list">
                        <ul>
                            {DesignSkills.List.map(Element => <li key={uuid.v4()}> {Element} </li>)}
                        </ul>
                    </div>
                </div>   
                <div className="SkillCard-Section">
                    <div className="SkillCard-Section-Title">
                        <h1> Design Tool Kit </h1>
                    </div>
                    <div className="SkillCard-Section-list">
                        <ul>
                            {DesignSkills.DesignToolKit.map(Element => <li key={uuid.v4()}> {Element} </li>)}
                        </ul>
                    </div>
                </div>   
            </div>
        </Fade>
    )
}

export default DesignSkillCard;
