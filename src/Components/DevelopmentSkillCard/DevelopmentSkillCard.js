import React from 'react';
import SkillList from '../../Resources/Skills';
import Fade from 'react-reveal/Fade';
import uuid from 'uuid';
import './DevelopmentSkillCard.css';

function DevelopmentSkillCard() {
    const DevelopmentSkills = SkillList.Development;

    return (
        <Fade bottom delay={100} distance={"20%"}>
            <div>
                <div id="DevelopmentSkillCard">
                    <div className="SkillCard-Title">
                        <img src="./img/programming.svg" alt="Icon"></img>
                        <h1> Development </h1>
                    </div>
                    <div className="SkillCard-Section">
                        <div className="SkillCard-Section-Title">
                            <h1> Front End </h1>
                        </div>
                        <div className="SkillCard-Section-list">
                            <ul>
                                {DevelopmentSkills.FrontEnd.map(Element => <li key={uuid.v4()}> {Element} </li>)}
                            </ul>
                        </div>
                    </div>   
                    <div className="SkillCard-Section">
                        <div className="SkillCard-Section-Title">
                            <h1> Back End </h1>
                        </div>
                        <div className="SkillCard-Section-list">
                            <ul>
                                {DevelopmentSkills.BackEnd.map(Element => <li key={uuid.v4()}> {Element} </li>)}
                            </ul>
                        </div>
                    </div>     
                    <div className="SkillCard-Section">
                        <div className="SkillCard-Section-Title">
                            <h1> Databases </h1>
                        </div>
                        <div className="SkillCard-Section-list">
                            <ul>
                                {DevelopmentSkills.Databases.map(Element => <li key={uuid.v4()}> {Element} </li>)}
                            </ul>
                        </div>
                    </div>   
                    <div className="SkillCard-Section">
                        <div className="SkillCard-Section-Title">
                            <h1> Game Development </h1>
                        </div>
                        <div className="SkillCard-Section-list">
                            <ul>
                                {DevelopmentSkills.GameDevelopment.map(Element => <li key={uuid.v4()}> {Element} </li>)}
                            </ul>
                        </div>
                    </div>   
                    <div className="SkillCard-Section">
                        <div className="SkillCard-Section-Title">
                            <h1> Developer Tool Kit </h1>
                        </div>
                        <div className="SkillCard-Section-list">
                            <ul>
                                {DevelopmentSkills.DeveloperToolKit.map(Element => <li key={uuid.v4()}> {Element} </li>)}
                            </ul>
                        </div>
                    </div>     
                </div>
            </div>
        </Fade>
    )
}

export default DevelopmentSkillCard;
