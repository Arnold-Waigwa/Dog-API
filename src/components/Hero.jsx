import React, { useState } from "react";

const Hero = ({ catData, handleClick }) => {
  const [param, setParam] = useState({});

  return (
    <div>
      <h1>The Catty World</h1>
      <h3>Discover Cats from your wildest Dreams!</h3>
      <p>😺😸😹😻😼😽🙀😿😾</p>
      <div>
        {catData && (
          <div className="listing-container">
            <h2>{catData.name}</h2>
            <div className="buttons">
              <button type="button" className="attribute-button">
                Breed: {catData.breed}
              </button>
              <button type="button" className="attribute-button">
                Weight: {catData.weight}
              </button>
              <button type="button" className="attribute-button">
                Origin: {catData.origin}
              </button>
              <button type="button" className="attribute-button">
                Lifespan: {catData.lifeSpan}
              </button>
              <button type="button" className="attribute-button">
                Temperament: {catData.temperament}
              </button>
              <br />
              <br />
              <img
                src={catData.imageUrl}
                alt="A random cat from the Cat API"
                className="cat-pic"
              />
            </div>
          </div>
        )}
        <br />
        {/* Button to fetch a new cat */}
        <button onClick={handleClick} className="fetch-button">
          Discover
        </button>
      </div>
    </div>
  );
};

export default Hero;
