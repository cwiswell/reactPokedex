import React, { Component } from 'react';
import './main-pokedex.css';
import PokedexMainPanel from './pokedex-main-panel/pokedex-main-panel';
import PokedexSidePanel from './pokedex-side-panel/pokedex-side-panel';

type PokedexState = {
  searchString: string | null;
  spriteUrl: string | null;
}

class Pokedex extends Component<any, PokedexState> {
  state: PokedexState = {
    searchString: null,
    spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  }

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    this.setState({ searchString: e.target.value });
  };

  searchPokemon = () => {
    console.log(`Search ${this.state.searchString}`);
  };

  render() {
    return (
      <div className="background">
        <div className="mainPokedex">
          <div className="cameraRing">
            <div className="cameraLens"></div>
          </div>
          <div className="light redLight"></div>
          <div className="light yellowLight"></div>
          <div className="light greenLight"></div>
          <PokedexMainPanel spriteUrl={this.state.spriteUrl} changeFunction={this.onInputChange} searchFunction={this.searchPokemon} />
        </div>
        <PokedexSidePanel name="Pikachu" weight={4} height={60} pokemonNumber={25} />
      </div>
    );
  };
}

export default Pokedex;
