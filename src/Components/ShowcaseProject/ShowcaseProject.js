import React from 'react';
import Projects from '../../Resources/Projects';
import './ShowcaseProject.css';
import Fade from 'react-reveal/Fade';

function ShowcaseProject(props) {
    const PId = props.ProjectId;
    const Project = Projects.GetShowcaseProjectById(PId);
    const Img = `./img/${Project.Img}`;
    let ShowcaseProjectStyle = {};
    let ShowcaseImgStyle = {}
    if(PId%2 != 0){
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
                    <img style={ShowcaseImgStyle} src={Img} />
                </div>
                <Fade bottom cascade delay={200} >
                    <div className="ShowcaseProject-Desc">
                        <h1>{Project.Title}</h1>
                        <p>{Project.Desc}</p>
                        <Fade bottom cascade delay={300} >
                            <div className="ShowcaseProject-Links">
                                <a className="ShowcaseProject-GitLink" href={Project.GitLink}> Github </a>
                                <a className="ShowcaseProject-LiveLink" href={Project.Link}> Live Version </a>
                            </div>
                        </Fade>
                    </div>
                </Fade>
            </div>
        </Fade>
    )
}

export default ShowcaseProject;
