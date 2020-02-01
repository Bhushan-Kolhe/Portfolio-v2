import React from 'react';
import './ProjectCard.css';
import uuid from 'uuid';
import Fade from 'react-reveal/Fade';

function ProjectCard(props) {
    const Project = props.Project;
    const Delay = props.delay;
    return (
        <Fade bottom delay={Delay*150} distance={"40%"}>
            <div>
                <div className="ProjectCard">
                    <div className="ProjectCard-Top">
                        <div className="ProjectCard-Header">
                            <img src="./img/plan.svg" alt="Project Icon" />
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
                            Project.Stack.map( Element => <span key={uuid.v4()}> {Element} </span>)
                        }
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default ProjectCard;
