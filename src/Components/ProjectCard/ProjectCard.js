import React from 'react';
import './ProjectCard.css';

function ProjectCard(props) {
    const Project = props.Project;
    return (
        <div className="ProjectCard">
            <div className="ProjectCard-Header">
                <h1 className="ProjectCard-Title"> {Project.Title} </h1>
                <div className="ProjectCard-Links">
                    <a href={Project.GitLink} target="_blank"><img src="./img/github.svg" /></a>
                    <a href={Project.Link} target="_blank"><img src="./img/out.svg" /></a>
                </div>
            </div>
            <div className="ProjectCard-Body">
                <p>
                {Project.Desc}
                </p>
            </div>
        </div>
    )
}

export default ProjectCard;
