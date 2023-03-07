import React from 'react';

const Project = ({ imgPath, title, github, liveApp, desc }) => {
    return (
        <div className="project">
            <img src={imgPath} className="projthumb" />
            <h2>{title}</h2>
            <p>{desc}</p>
            <div className="projlinks">
                <a href={github} className="projlink" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                <a href={liveApp} className="projlink" target="_blank" rel="noopener noreferrer">Live App</a>
            </div>
        </div>
    )
}

export default Project;