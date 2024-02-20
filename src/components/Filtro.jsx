// Filtro.js
import React from 'react';

const Filtro = ({ onFilterClick }) => {
  return (
    <>
      <button className="btn btn-primary" onClick={() => onFilterClick('alive')}>
        Mostrar Personajes Vivos
      </button>
    </>
  );
}

export default Filtro;
