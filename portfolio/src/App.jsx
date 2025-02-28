import React, { useState, useEffect } from 'react';
import '98.css'; 
import 'portfolio/src/App.css';
import miImagen from 'portfolio/src/images/avatar.png';
import windowsImage from 'portfolio/src/images/windows-0.png';
import { FaJava, FaDatabase, FaReact, FaNodeJs, } from 'react-icons/fa'; // Importar los íconos
import { SiHtml5, SiCss3 } from 'react-icons/si';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import CardProyectos from './components/CardProyectos';
import DesktopIcons from './components/DesktopIcons'; // <-- Iconos del escritorio
import blocNotasGif from './assets/gifs/BlocNotas.gif';
import blogGif from './assets/gifs/Blog.gif';

function App() {
  const [activeTab, setActiveTab] = useState('sobre-mi');
  const [gameStarted, setGameStarted] = useState(false);
  
  useEffect(() => {
    setGameStarted(false);
  }, [activeTab]);

  return (
    <div className="desktop">
      {/* Agregar los iconos del escritorio */}
      <DesktopIcons setActiveTab={setActiveTab} /> 

      <div className="window">
        <div className="window-body">
          {activeTab === 'sobre-mi' && (
            <div className="tab-content">
              <h2>Sobre mí</h2>
              <div className="image-and-text">
                <div className="image-container">
                  <canvas id="canvas"></canvas>
                  <img src={miImagen} alt="Alexander" className="image" id="image" />
                </div>
                <p>
                  ¡Hola! Soy Alexander,
                  Técnico en Desarrollo de Aplicaciones Multiplataforma,
                  con experiencia en Java y MySQL. Actualmente, estoy ampliando mis conocimientos en React y JavaScript,
                  y me apasiona seguir aprendiendo y enfrentar nuevos retos en el desarrollo front-end.
                </p>
              </div>

              {/* Íconos debajo de la presentación */}
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
          
          {activeTab === 'juegos' && (
            <div className="tab-content">
              <h2>Juegos</h2>
              {!gameStarted ? (
                <button className="play-button" onClick={() => setGameStarted(true)}>Play</button>
              ) : (
                <div className="game-container">
                  <iframe src="/snake.html" className="game-frame"></iframe>
                </div>
              )}
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
