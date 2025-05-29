import React from "react";
import projek1 from '../assets/images/absensiprojek.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.absensi-app.myid/" target="_blank" rel="noreferrer"><img src={projek1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.absensi-app.myid/" target="_blank" rel="noreferrer"><h2>Attendance website</h2></a>
                <p>Developed a website that allows users to easily manage their attendance and attendance records. This website is available on the web for users to use.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;