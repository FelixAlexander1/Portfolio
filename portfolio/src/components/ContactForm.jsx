import React, { useState } from 'react';
import '../styles/ContactForm.css'; // Asegúrate de que el archivo de CSS esté importado correctamente

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Validación simple
    if (!name || !email || !message) {
      setErrorMessage('Por favor, completa todos los campos.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    // Simula el envío de datos
    console.log('Datos enviados:', formData);

    // Limpia el formulario y muestra un mensaje de éxito
    setFormData({ name: '', email: '', message: '' });
    setErrorMessage('');
    setSuccessMessage('¡Tu mensaje ha sido enviado con éxito!');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Tu correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Escribe tu mensaje aquí"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="send-button">
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;
