import React from 'react';
import './ProjectCard.css';

function ProjectCard(props) {
    const Project = props.Project;
    return (
        <div className="ProjectCard">
            <div className="ProjectCard-Top">
                <div className="ProjectCard-Header">
                    <img src="./img/plan.svg" />
                    <div className="ProjectCard-Links">
                        <a href={Project.GitLink} target="_blank"><img src="./img/github.svg" /></a>
                        <a href={Project.Link} target="_blank"><img src="./img/out.svg" /></a>
                    </div>
                </div>
                <div className="ProjectCard-Body">
                    <h1 className="ProjectCard-Title"> {Project.Title} </h1>
                    <p>
                    {Project.Desc}
                    </p>
                </div>
            </div>
            <div className="ProjectCard-Footer">
                {
                    Project.Stack.map( Element => <span> {Element} </span>)
                }
            </div>
        </div>
    )
}

export default ProjectCard;
