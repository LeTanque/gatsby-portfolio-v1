import React, { useState } from "react";
import { GoLink, GoMarkGithub } from "react-icons/go";


const Project = props => {
    const { project } = props;
    
    const [ visible, setVisible ] = useState({
        visible: false,
        containerHeight: "100%",
        containerBg: "rgba(17,17,17,0)",
        imgMargin: "0 auto"
    })

    return (
        <>
            <div  className="block__single-project">

                <div className="block__single-project-header">
                    <img src={project.iconUrl} alt={project.name} className="img__project-icon" />
                    <h4>{project.name}</h4>
                </div>

                <div className="block__project-image-container" style={{ 
                    height: visible.containerHeight,
                    backgroundColor: visible.containerBg
                }} >
                    <img src={project.imageUrl} alt={project.name} className="img__project-image" style={{
                        margin: visible.imgMargin
                    }}/>
                </div>

                <div className="block__single-project-description">
                    <p>{project.description}</p>
                    <p>{project.role}</p>
                    <div className="block__project-link" >
                        <GoLink /><a href={project.link} className="link__project" alt={project.name} >Link to deployed site</a>
                    </div>
                    {project.github ? (
                        <div className="block__project-link" >
                            <GoMarkGithub /><a href={project.github} className="link__project" alt={project.name} >Link to repo</a>
                        </div>
                    ) : null}
                </div>

            </div>
        </>
    );
};


export default Project

