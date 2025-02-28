import React from 'react';
import 'portfolio/src/styles/Footer.css'; // Importa el archivo de estilos para el footer

function Footer() {
  return (
    <footer className="footer">
      <div className="toolbar">
        <button className="toolbar-btn">Inicio</button>
        <button className="toolbar-btn">Explorador</button>
        <button className="toolbar-btn">Contactar</button>
      </div>
      <p>Copyright © 2023 - El portafolio de Alexander</p>
    </footer>
  );
}

export default Footer;
