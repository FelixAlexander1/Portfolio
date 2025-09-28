import React, { useState, useEffect } from 'react';
import '98.css'; 
import 'portfolio/src/App.css';
import miImagen from 'portfolio/src/images/avatar.png';
import windowsImage from 'portfolio/src/images/windows-0.png';
import { FaJava, FaDatabase, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiHtml5, SiCss3 } from 'react-icons/si';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import CardProyectos from './components/CardProyectos';
import DesktopIcons from './components/DesktopIcons';
import blocNotasGif from './assets/gifs/BlocNotas.gif';
import blogGif from './assets/gifs/Blog.gif';
import tiendagif from './assets/gifs/tiendagif.gif';
import DashboardGif from './assets/gifs/Dashboard.gif';
import WarehouseGif from './assets/gifs/Warehouse.gif';

function App() {
  const [activeTab, setActiveTab] = useState('sobre-mi');
  const [gameStarted, setGameStarted] = useState(false);

  const tabTitles = {
    'sobre-mi': 'Sobre mí',
    'proyectos': 'Proyectos',
    'contacto': 'Contacto'
  };

  useEffect(() => {
    setGameStarted(false);
  }, [activeTab]);

  return (
    <div className="desktop">
      <DesktopIcons setActiveTab={setActiveTab} />

      <div className="window" >
        <div className="title-bar">
        <div className="title-bar-text">{tabTitles[activeTab] || 'Mi Carpeta'}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>

        <div className="window-body">
          {activeTab === 'sobre-mi' && (
            <div className="tab-content">
              <h2>Sobre mí</h2>
              <div className="image-and-text">
                <div className="image-container">
                  <canvas id="canvas"></canvas>
                  <img src={miImagen} alt="Alexander" className="image" id="image" />
                </div>

                <div className="text-container-wrapper">
                  <div className="text-container"> 
                    <p>
                      ¡Hola! Soy Alexander, Técnico en Desarrollo de Aplicaciones Multiplataforma,
                      con experiencia en Java y MySQL. Actualmente, estoy ampliando mis conocimientos en React y JavaScript,
                      y me apasiona seguir aprendiendo y enfrentar nuevos retos en el desarrollo front-end.
                    </p>
                  </div>
                </div>
              </div>
              <div className="technologies">
                  <FaReact size={40} />
                  <FaNodeJs size={40} />
                  <SiHtml5 size={40} />
                  <SiCss3 size={40} />
                  <FaJava size={40} />
                  <FaDatabase size={40} />
                </div>
            </div>
          )}

          {activeTab === 'proyectos' && (
            <div className="tab-content">
              <h2>Proyectos</h2>
              <div className="card-proyectos-container">
                <CardProyectos 
                  title="Bloc de Notas" 
                  description="Bloc de notas en React en el puedes crear, editar y eliminar notas." 
                  imageSrc={blocNotasGif}
                  gifSrc={blocNotasGif}
                  githubRepo="https://github.com/FelixAlexander1/crud-login"
                />
                <CardProyectos 
                  title="Blog" 
                  description="Blog en React en el que puedes ver noticias referentes a tecnologia." 
                  imageSrc={blogGif} 
                  gifSrc={blogGif}
                  githubRepo="https://github.com/FelixAlexander1/Blog"
                />
                <CardProyectos 
                  title="Tienda"
                  description="Tienda en React donde puedes ver productos y añadirlos al carrito."
                  imageSrc={tiendagif}
                  gifSrc={tiendagif}
                  githubRepo="https://github.com/FelixAlexander1/Tienda-e"
                  />            
                <CardProyectos 
                  title="Dashboard"
                  description="Dashboard dinamico en react."
                  imageSrc={DashboardGif}
                  gifSrc={DashboardGif}
                  githubRepo="https://github.com/FelixAlexander1/dashboard"
                  />
                <CardProyectos 
                  title="Warehouse"
                  description="Aplicación para control de almacen."
                  imageSrc={WarehouseGif}
                  gifSrc={WarehouseGif}
                  githubRepo="https://github.com/FelixAlexander1/almacen"
                  />  
              </div>
            </div>
          )}

          {activeTab === 'contacto' && (
            <div className="tab-content">
              <h2>Contacto</h2>
              <ContactInfo />
              <ContactForm />
            </div>
          )}
        </div>
      </div>

      <div className="toolbar">
        <button className="start-button">
          <img src={windowsImage} alt="Windows 98" />
          <span className="start-text">Start</span>
        </button>
        <div className="clock">12:34 PM</div>
      </div>
    </div>
  );
}

export default App;
