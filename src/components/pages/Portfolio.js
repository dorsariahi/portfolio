import React from 'react';
import Project from '../Project';

const Portfolio = () => {
    const projects = [
        {
            imgPath: './img/quiz.png',
            title: 'quiz website',
            github: 'https://github.com/dorsariahi/module-4-challenge',
            liveApp: 'https://dorsariahi.github.io/module-4-challenge/',
            alt: 'Screenshot quiz app'
        },
        {
            imgPath: './img/WorkdayScheduler.png',
            title: 'Workday Scheduler',
            github: 'https://github.com/dorsariahi/module-5-challenge',
            liveApp: 'https://dorsariahi.github.io/module-5-challenge/',
            alt: 'Schule making app'
        },
        {
            imgPath: './img/Weather.png',
            title: 'Weather Dashboard',
            github: 'https://github.com/dorsariahi/module-6-challenge',
            liveApp: 'https://dorsariahi.github.io/module-6-challenge/',
            desc: 'A weather app that allows a user to input a city and view the current conditions along with a 5-day forecast. Tools used: OpenWeather API, Bootstrap',
            alt: 'Screenshot of Weather Dashboard app'
        },

        {
            imgPath: './img/notetaker',
            title: 'note taker app',
            github: 'https://github.com/dorsariahi/module-11-challenge',
            liveApp: 'https://note-taker-dorsa.herokuapp.com/',
            desc: 'A generator using Express.js that takes user input to create a note.',
            alt: 'Screenshot of  note app'
        }
    ]

    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <div className="projects">
                {projects.map((project) => <Project key={project.title} imgPath={project.imgPath} title={project.title} github={project.github} liveApp={project.liveApp} desc={project.desc} alt={project.alt} />)}
            </div>
        </div>
    )
};

export default Portfolio;