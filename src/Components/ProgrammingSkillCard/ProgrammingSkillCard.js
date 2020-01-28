import React from 'react';
import SkillList from '../../Resources/Skills';
import uuid from 'uuid';
import Fade from 'react-reveal/Fade';
import './ProgrammingSkillCard.css';

function ProgrammingSkillCard() {
    const ProgrammingSkills = SkillList.Programming;
    
    return (
        <Fade bottom delay={500} distance={"60%"}>
            <div id="ProgrammingSkillCard">
                <div className="SkillCard-Title">
                    <img src="./img/code.svg"></img>
                    <h1> Programming </h1>
                </div>
                <div className="SkillCard-Section">
                    <div className="SkillCard-Section-Title">
                        <h1> Languages </h1>
                    </div>
                    <div className="SkillCard-Section-list">
                        <ul>
                            {ProgrammingSkills.Languages.map(Element => <li key={uuid.v4()}> {Element} </li>)}
                        </ul>
                    </div>
                </div>   
                <div className="SkillCard-Section">
                    <div className="SkillCard-Section-Title">
                        <h1> Frameworks </h1>
                    </div>
                    <div className="SkillCard-Section-list">
                        <ul>
                            {ProgrammingSkills.FrameworksAndPackages.map(Element => <li key={uuid.v4()}> {Element} </li>)}
                        </ul>
                    </div>
                </div>   
            </div>
        </Fade>
    )
}

export default ProgrammingSkillCard;
