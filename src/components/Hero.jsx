import React from "react";
import "./Hero.css";

const Hero = ({
  catData,
  handleClick,
  handleAttribute,
  banned,
  handleUnban,
}) => {
  return (
    <div>
      <div className="main-container">
        <h1>The Catty World</h1>
        <h3>Discover Cats from your wildest Dreams!</h3>
        <p>😺😸😹😻😼😽🙀😿😾</p>
        <div>
          {catData && (
            <div className="listing-container">
              <h2>{catData.name}</h2>
              <div className="buttons">
                <button
                  type="button"
                  onClick={() => handleAttribute(catData.breed)}
                  className="attribute-button"
                >
                  Breed: {catData.breed}
                </button>
                <button
                  type="button"
                  onClick={() => handleAttribute(catData.weight)}
                  className="attribute-button"
                >
                  Weight: {catData.weight}
                </button>
                <button
                  type="button"
                  onClick={() => handleAttribute(catData.origin)}
                  className="attribute-button"
                >
                  Origin: {catData.origin}
                </button>
                <button
                  type="button"
                  onClick={() => handleAttribute(catData.lifeSpan)}
                  className="attribute-button"
                >
                  Lifespan: {catData.lifeSpan}
                </button>
                <button
                  type="button"
                  onClick={() => handleAttribute(catData.temperament)}
                  className="attribute-button"
                >
                  Temperament: {catData.temperament}
                </button>
                <br />
                <br />
              </div>
              <img
                src={catData.imageUrl}
                alt="A random cat from the Cat API"
                className="cat-pic"
              />
            </div>
          )}
          <br />
          {/* Button to fetch a new cat */}
          <button onClick={handleClick} className="fetch-button">
            Discover
          </button>
        </div>
      </div>
      <div className="banned-list">
        <h3>Ban List</h3>

        {banned.length > 0 ? (
          banned.map((attribute, index) => (
            <button
              key={index}
              onClick={() => handleUnban(attribute)} // Function to unban the attribute
              className="banned-button"
            >
              {attribute}
            </button>
          ))
        ) : (
          <p>No attributes banned yet.</p>
        )}
      </div>
    </div>
  );
};

export default Hero;
