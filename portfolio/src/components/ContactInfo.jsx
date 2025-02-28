import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/ContactInfo.css';

function ContactInfo() {
  return (
    <div className="contact-icons">
      {/* Icono de LinkedIn */}
      <a href="https://linkedin.com/in/alexander-montesdeoca-garcía-8177b0326" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      
      {/* Icono de GitHub */}
      <a href="https://github.com/FelixAlexander1" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="GitHub">
        <FaGithub />
      </a>
    </div>
  );
}

export default ContactInfo;
