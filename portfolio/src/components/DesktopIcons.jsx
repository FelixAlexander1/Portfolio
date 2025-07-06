import React from 'react';
import miPcIcon from '../images/mi-pc.png';
import folderIcon from '../images/folder.png';
import contactoIcon from '../images/contacto.png';
/*import gameIcon from 'portfolio/src/images/game.png';*/

const DesktopIcons = ({ setActiveTab }) => {
  return (
    <div className="desktop-icons">
      <a href="#" onClick={() => setActiveTab('sobre-mi')}>
        <img src={miPcIcon} alt="Mi PC" />
        <span>Sobre Mí</span>
      </a>
      <a href="#" onClick={() => setActiveTab('proyectos')}>
        <img src={folderIcon} alt="Proyectos" />
        <span>Proyectos</span>
      </a>
      <a href="#" onClick={() => setActiveTab('contacto')}>
        <img src={contactoIcon} alt="Contacto" />
        <span>Contacto</span>
      </a>
      {/* Nuevo icono para Juegos */}
      {/*<a href="#" onClick={() => setActiveTab('juegos')}>
        <img src={gameIcon} alt="Juegos" />
        <span>Juegos</span>
      </a>*/}
    </div>
  );
};

export default DesktopIcons;
