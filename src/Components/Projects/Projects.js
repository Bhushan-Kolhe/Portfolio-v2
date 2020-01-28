import React from 'react';
import Showcase from '../Showcase/Showcase';
import ProjectStack from '../ProjectStack/ProjectStack';
import Fade from 'react-reveal/Fade';
import './Projects.css';

function Projects() {

    return (
        <div id="Projects">
            <Fade bottom delay={100} distance={"60%"}>
                <div id="Projects-Title">
                    <h1>Projects</h1>
                </div>
            </Fade>
            <Showcase />
            <ProjectStack />
        </div>
    )
}

export default Projects;
