import React from 'react';
import Skill from '../Skill';
import { RiDownloadLine } from 'react-icons/ri';

const Resume = () => {
    const skills = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Tailwind', 'Node.js', 'Express.js', 'SQL', 'MySQL', 'MongoDB', 'Mongoose', 'NoSQL', 'React']

    return (
        <div className="resume">
            <h1>Proficiencies</h1>
            <div className="skills">
                {skills.map((skill) => <Skill key={skill} skill={skill} />)}
            </div>
            <div className='resumelinkdiv'>
                <a href='./img/Dorsaresume2022.pdf' className='resumelink' target='_blank'>
                    <p className='resumetext'>Download Resume</p>
                    <RiDownloadLine className='icon' />
                </a>
            </div>
        </div>
    )
};

export default Resume;