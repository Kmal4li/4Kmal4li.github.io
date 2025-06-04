import React from "react";
import profilePhoto from '../assets/images/profile.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePhoto} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Kmal4li" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/muhammad-akmal-ali-3388b62a2/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.instagram.com/m._akmal_a/" target="_blank" rel="noreferrer"><InstagramIcon/></a>
          </div>
          <h1>Muhammad Akmal Ali</h1>
          <p>Junior Software Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Kmal4li" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/muhammad-akmal-ali-3388b62a2/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.instagram.com/m._akmal_a/" target="_blank" rel="noreferrer"><InstagramIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;