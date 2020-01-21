import React from 'react';
import SkillList from '../../Resources/Skills';
import './ProgrammingSkillCard.css';

function ProgrammingSkillCard() {
    const ProgrammingSkills = SkillList.Programming;
    
    return (
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
                        {ProgrammingSkills.Languages.map(Element => <li> {Element} </li>)}
                    </ul>
                </div>
            </div>   
            <div className="SkillCard-Section">
                <div className="SkillCard-Section-Title">
                    <h1> Frameworks </h1>
                </div>
                <div className="SkillCard-Section-list">
                    <ul>
                        {ProgrammingSkills.FrameworksAndPackages.map(Element => <li> {Element} </li>)}
                    </ul>
                </div>
            </div>   
        </div>
    )
}

export default ProgrammingSkillCard;
