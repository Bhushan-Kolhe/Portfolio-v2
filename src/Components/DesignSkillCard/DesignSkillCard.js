import React from 'react';
import SkillList from '../../Resources/Skills';
import './DesignSkillCard.css';

function DesignSkillCard() {
    const DesignSkills = SkillList.Design;
    
    return (
        <div id="DesignSkillCard">
            <div className="SkillCard-Title">
                <img src="./img/design.svg"></img>
                <h1> Design </h1>
            </div>
            <div className="SkillCard-Section">
                <div className="SkillCard-Section-list">
                    <ul>
                        {DesignSkills.List.map(Element => <li> {Element} </li>)}
                    </ul>
                </div>
            </div>   
            <div className="SkillCard-Section">
                <div className="SkillCard-Section-Title">
                    <h1> Design Tool Kit </h1>
                </div>
                <div className="SkillCard-Section-list">
                    <ul>
                        {DesignSkills.DesignToolKit.map(Element => <li> {Element} </li>)}
                    </ul>
                </div>
            </div>   
        </div>
    )
}

export default DesignSkillCard;
