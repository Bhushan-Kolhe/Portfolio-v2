import React from 'react';
import Showcase from '../Showcase/Showcase';
import ProjectStack from '../ProjectStack/ProjectStack';
import './Projects.css';

function Projects() {

    return (
        <div id="Projects">
            <div id="Projects-Title">
                <h1>Projects</h1>
            </div>
            <Showcase />
            <ProjectStack />
        </div>
    )
}

export default Projects;
