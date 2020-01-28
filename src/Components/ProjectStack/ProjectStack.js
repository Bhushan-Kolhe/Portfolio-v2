import React from 'react';
import { useState } from 'react';
import Projects from '../../Resources/Projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import uuid from 'uuid';
import './ProjectStack.css';


function ProjectStack() {
    const ProjectsList = Projects.GetProjects();
    const [ ProjectsDisplayed, SetProjectsDisplayed ] =  useState(6);
    let ProjectToBeDisplayed = ProjectsList.slice(0,ProjectsDisplayed);

    let DelayParameter = 0
    const delay = () => DelayParameter++;

    const HandleClickShowMore = () => {
        if(ProjectsList.length > ProjectsDisplayed + 6)
            SetProjectsDisplayed(ProjectsDisplayed + 6);
        else if(ProjectsList.length == ProjectsDisplayed)
            SetProjectsDisplayed(6);
        else
        SetProjectsDisplayed(ProjectsList.length);
        ProjectToBeDisplayed=ProjectsList.slice(0,ProjectsDisplayed);
    }

    return (
        <div id="ProjectStack-Container"> 
            <div id="ProjectStack">
                {ProjectToBeDisplayed.map(Element => <ProjectCard delay={delay()} key={uuid.v4()} Project={Element} />)}
            </div>
            <button onClick={HandleClickShowMore} id="ProjectStack-ShowMore-btn"> {ProjectsList.length == ProjectsDisplayed ? "Show Less!": "Show More!"} </button>
        </div>
    )
}

export default ProjectStack;
