import React from 'react';
import '../styles/Card.css';
import PropTypes from 'prop-types';

function Card({ title, id, children }) {
  return (
    <div className="card" id={id}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string, // Añadimos id como prop
  children: PropTypes.node
};

export default Card;