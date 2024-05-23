import React from 'react';
import './PokemonCard.css';

const PokemonCard = () => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-card-header">
        <img src="https://via.placeholder.com/150" alt="Pokemon" />
      </div>
      <div className="pokemon-card-body">
        <h5 className="pokemon-card-title">Pikachu</h5>
        <p className="pokemon-card-text">
          Pikachu is an Electric-type Pokémon introduced in Generation I.
        </p>
        <p className="pokemon-card-price">$10.00</p>
        <div className="pokemon-card-images">
          <img src="https://via.placeholder.com/75" alt="Pikachu 1" />
          <img src="https://via.placeholder.com/75" alt="Pikachu 2" />
          <img src="https://via.placeholder.com/75" alt="Pikachu 3" />
          <img src="https://via.placeholder.com/75" alt="Pikachu 4" />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
