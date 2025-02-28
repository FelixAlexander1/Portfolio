import React, { useState } from 'react';
import '../styles/CardProyectos.css';
import PropTypes from 'prop-types';

function CardProyectos({ title, description, imageSrc = '', gifSrc = '', moreInfo = '', githubRepo = '' }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleViewCodeClick = () => {
    window.open(githubRepo, '_blank'); // Abre el repositorio en una nueva pestaña
  };

  return (
    <div 
      className="card-proyectos"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2>{title}</h2>
      <img 
        src={isHovered ? gifSrc : imageSrc} 
        alt={title} 
        width="100%" 
        height="auto" 
      />
      <p>{description}</p>
      {isHovered && (
        <div className="more-info">
          <p>{moreInfo}</p>
          <button className="btn" onClick={handleViewCodeClick}>Ver Código</button>
        </div>
      )}
    </div>
  );
}

CardProyectos.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  gifSrc: PropTypes.string.isRequired, // Aquí se pasa la ruta del GIF
  moreInfo: PropTypes.string,
  githubRepo: PropTypes.string.isRequired, // URL del repositorio de GitHub
};

export default CardProyectos;



