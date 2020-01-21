import React from 'react';
import DevelopmentSkillCard from '../DevelopmentSkillCard/DevelopmentSkillCard';
import DesignSkillCard from '../DesignSkillCard/DesignSkillCard';
import ProgrammingSkillCard from '../ProgrammingSkillCard/ProgrammingSkillCard';
import './Skills.css';

function Skills() {
    return (
        <div id="Skills-Container">
            <div id="Skills-grid">
                <DesignSkillCard />
                <DevelopmentSkillCard />
                <ProgrammingSkillCard />
            </div>
        </div>
    )
}

export default Skills;
