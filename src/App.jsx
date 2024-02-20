// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import Pagination from './components/Pagination';
import Filtro from './components/Filtro';

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [filterStatus, setFilterStatus] = useState(null);

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error));
  };

  const handleFilterClick = (status) => {
    setFilterStatus(status);
    // Aquí puedes añadir lógica adicional si es necesario
  };

  useEffect(() => {
    // Si hay un filtro de estado, aplica el filtro al URL de la API
    const url = filterStatus ? `${initialUrl}?status=${filterStatus}` : initialUrl;
    fetchCharacters(url);
  }, [filterStatus]);

  return (
    <>
      <Navbar brand="Rick and Morty App" />
      
      <div className="container mt-5">
        <Filtro onFilterClick={handleFilterClick} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={() => fetchCharacters(info.prev)}
          onNext={() => fetchCharacters(info.next)}
        />
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={() => fetchCharacters(info.prev)}
          onNext={() => fetchCharacters(info.next)}
        />
      </div>
    </>
  );
}

export default App;
