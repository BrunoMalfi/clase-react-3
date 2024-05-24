import React from 'react';
import './PokemonCard.css';

const PokemonCard = ({name,front,back, frontShiny, backShiny, home}) => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-card-header">
        <img src={home} alt="Pokemon" />
      </div>
      <div className="pokemon-card-body">
        <h5 className="pokemon-card-title">{name}</h5>
        <p className="pokemon-card-text">
          Pikachu is an Electric-type Pokémon introduced in Generation I.
        </p>
        <p className="pokemon-card-price">$10.00</p>
        <div className="pokemon-card-images">
          <img src={front} alt="Pokemon 1" />
          <img src={back} alt="Pokemon 2" />
          <img src={frontShiny} alt="Pokemon 3" />
          <img src={backShiny} alt="Pokemon 4" />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
