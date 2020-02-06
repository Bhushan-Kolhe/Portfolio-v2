import React from 'react';
import Projects from '../../Resources/Projects';
import Fade from 'react-reveal/Fade';
import './ShowcaseProject.css';

function ShowcaseProject(props) {
    const PId = props.ProjectId;
    const Project = Projects.GetShowcaseProjectById(PId);
    const Img = `./img/${Project.Img}`;
    let ShowcaseProjectStyle = {};
    let ShowcaseImgStyle = {}
    if(PId%2 !== 0 && document.body.offsetWidth > 1000){
        ShowcaseProjectStyle = {
            flexDirection: "row-reverse",
            transform: "translateX(10px)"
        }
        ShowcaseImgStyle={
            paddingRight: "0px",
            paddingLeft: "70px"
        }
    }
    return (
        <Fade bottom cascade distance={"40%"}>
            <div className="ShowcaseProject" style={ShowcaseProjectStyle}>
                <div className="ShowcaseProject-Img-Container">
                    <img style={ShowcaseImgStyle} src={Img} alt="Project Images" />
                </div>
                <Fade bottom cascade delay={200} >
                    <div className="ShowcaseProject-Desc">
                        <h1>{Project.Title}</h1>
                        <p>{Project.Desc}</p>
                        <div className="ShowcaseProject-Stack">
                            {Project.Stack.map(Element => (<span> {Element} </span>))}
                        </div>
                        <div className="ShowcaseProject-Links">
                            {
                                Project.HasGit ? ( <Fade bottom delay={200} >
                                        <div>
                                            <a className="ShowcaseProject-GitLink" target="_blank" href={Project.GitLink}> Github </a>
                                        </div>
                                    </Fade> ) : ""}
                            {
                                Project.HasLink ? (
                                    <Fade bottom  delay={350} >
                                        <div>
                                            <a className="ShowcaseProject-LiveLink" target="_blank" href={Project.Link}> Live Version </a>
                                        </div>
                                    </Fade>
                                ) : ""
                            }
                        </div>
                    </div>
                </Fade>
            </div>
        </Fade>
    )
}

export default ShowcaseProject;
