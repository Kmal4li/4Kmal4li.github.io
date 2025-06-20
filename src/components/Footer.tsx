import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Kmal4li" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/muhammad-akmal-ali-3388b62a2/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://www.instagram.com/m._akmal_a/" target="_blank" rel="noreferrer"><InstagramIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/Kmal4li" target="_blank" rel="noreferrer">Muhammad Akmal Ali</a> made with love.</p>
    </footer>
  );
}

export default Footer;