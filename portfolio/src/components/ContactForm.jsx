import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactForm.css';

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

    if (!name || !email || !message) {
      setErrorMessage('Por favor, completa todos los campos.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,  
      import.meta.env.VITE_TEMPLATE_ID, 
      { name, email, message },
      import.meta.env.VITE_PUBLIC_KEY  
    )
    .then((response) => {
      console.log('Correo enviado:', response);
      setFormData({ name: '', email: '', message: '' });
      setErrorMessage('');
      setSuccessMessage('¡Tu mensaje ha sido enviado con éxito!');
      console.log(import.meta.env.VITE_SERVICE_ID);
console.log(import.meta.env.VITE_TEMPLATE_ID);
console.log(import.meta.env.VITE_PUBLIC_KEY);

    })
    .catch((error) => {
      console.error('Error al enviar el correo:', error);
      setErrorMessage('Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.');
      console.log(import.meta.env.VITE_SERVICE_ID);
console.log(import.meta.env.VITE_TEMPLATE_ID);
console.log(import.meta.env.VITE_PUBLIC_KEY);
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" name="name" placeholder="Tu nombre" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" id="email" name="email" placeholder="Tu correo electrónico" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Mensaje</label>
        <textarea id="message" name="message" rows="4" placeholder="Escribe tu mensaje aquí" value={formData.message} onChange={handleChange} required />
      </div>
      <button type="submit" className="send-button">Enviar</button>
    </form>
  );
}

export default ContactForm;
