import React from 'react';
import DevelopmentSkillCard from '../DevelopmentSkillCard/DevelopmentSkillCard';
import DesignSkillCard from '../DesignSkillCard/DesignSkillCard';
import ProgrammingSkillCard from '../ProgrammingSkillCard/ProgrammingSkillCard';
import Fade from 'react-reveal/Fade';
import './Skills.css';

function Skills() {
    return (
        <div id="Skills-Container">
            <Fade bottom delay={100} distance={"60%"}>
                <div id="Skills-Title">
                    <h1>SKILLS</h1>
                </div>
            </Fade>
            <div id="Skills-grid">
                <DesignSkillCard />
                <DevelopmentSkillCard />
                <ProgrammingSkillCard />
            </div>
        </div>
    )
}

export default Skills;
