import React from "react";

const Characters = ({ characters }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mb-4">
          <div className="card" style={{ minWidth: "200px" }}>
            <img src={item.image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <br />
              <p>location: {item.location.name}</p>
              <p>species: {item.species}</p>
              <p>Status: {item.status}</p>
              {/* Renderizado condicional en CharacterItem */}
              {item.status === 'Alive' ? (
                <p>Este personaje está vivo.</p>
              ) : (
                <p>Este personaje está muerto.</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
