import React from 'react';
import CardProyectos from './CardProyectos';

function Main() {
  return (
    <main>
      <section id="sobre-mi">
        <h2>Sobre mí</h2>
        <p>Información sobre Alexander Montesdeoca.</p>
      </section>
      <section id="proyectos">
        <h2>Proyectos</h2>
        <p>Descripción de algunos proyectos.</p>
        <div className="inner-container">
          <CardProyectos title="Proyecto 1" description="Descripción del Proyecto 1." />
          <CardProyectos title="Proyecto 2" description="Descripción del Proyecto 2." />
          <CardProyectos title="Proyecto 3" description="Descripción del Proyecto 3." />
        </div>
      </section>
      <section id="contacto">
        <h2>Contacto</h2>
        <p>Cómo contactarme.</p>
      </section>
    </main>
  );
}

export default Main;