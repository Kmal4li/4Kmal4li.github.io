import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faFigma } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Vue.js",
    "JavaScript",
    "HTML5",
    "CSS",
    "Python",
    "PHP",
    "Laravel",
    "SQL",
    "Postman"
];

const labelsThird = [
    "Figma",
    "Canva",
    "Adobe XD",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faFigma} size="3x"/>
                    <h3>UI/UX</h3>
                    <p>I have strong skills in designing intuitive, aesthetic, and functional user interfaces (UI) and user experiences (UX). I am proficient in using tools like Figma and Canva to create wireframes, interactive prototypes, and responsive design layouts.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;