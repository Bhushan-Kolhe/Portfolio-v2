import React from 'react';
import SkillList from '../../Resources/Skills';
import './DevelopmentSkillCard.css';

function DevelopmentSkillCard() {
    const DevelopmentSkills = SkillList.Development;

    return (
        <div id="DevelopmentSkillCard">
            <div className="SkillCard-Title">
                <img src="./img/programming.svg"></img>
                <h1> Development </h1>
            </div>
            <div className="SkillCard-Section">
                <div className="SkillCard-Section-Title">
                    <h1> Front End </h1>
                </div>
                <div className="SkillCard-Section-list">
                    <ul>
                        {DevelopmentSkills.FrontEnd.map(Element => <li> {Element} </li>)}
                    </ul>
                </div>
            </div>   
            <div className="SkillCard-Section">
                <div className="SkillCard-Section-Title">
                    <h1> Back End </h1>
                </div>
                <div className="SkillCard-Section-list">
                    <ul>
                        {DevelopmentSkills.BackEnd.map(Element => <li> {Element} </li>)}
                    </ul>
                </div>
            </div>     
            <div className="SkillCard-Section">
                <div className="SkillCard-Section-Title">
                    <h1> Databases </h1>
                </div>
                <div className="SkillCard-Section-list">
                    <ul>
                        {DevelopmentSkills.Databases.map(Element => <li> {Element} </li>)}
                    </ul>
                </div>
            </div>   
            <div className="SkillCard-Section">
                <div className="SkillCard-Section-Title">
                    <h1> Game Development </h1>
                </div>
                <div className="SkillCard-Section-list">
                    <ul>
                        {DevelopmentSkills.GameDevelopment.map(Element => <li> {Element} </li>)}
                    </ul>
                </div>
            </div>   
            <div className="SkillCard-Section">
                <div className="SkillCard-Section-Title">
                    <h1> Developer Tool Kit </h1>
                </div>
                <div className="SkillCard-Section-list">
                    <ul>
                        {DevelopmentSkills.DeveloperToolKit.map(Element => <li> {Element} </li>)}
                    </ul>
                </div>
            </div>     
        </div>
    )
}

export default DevelopmentSkillCard;
