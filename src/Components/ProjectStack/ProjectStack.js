import React from 'react';
import Projects from '../../Resources/Projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectStack.css';

function ProjectStack() {
    const ProjectsList = Projects.GetProjects();

    return (
        <div id="ProjectStack-Container">
            <div id="ProjectStack">
                <ProjectCard Project={ProjectsList[0]} />
                <ProjectCard Project={ProjectsList[0]} />
                <ProjectCard Project={ProjectsList[0]} />
                <ProjectCard Project={ProjectsList[0]} />
                <ProjectCard Project={ProjectsList[0]} />
                <ProjectCard Project={ProjectsList[0]} />
            </div>
            <button id="ProjectStack-ShowMore-btn"> Show More! </button>
        </div>
    )
}

export default ProjectStack;
