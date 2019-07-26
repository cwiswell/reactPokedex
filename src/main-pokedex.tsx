import React, { Component } from 'react';
import './main-pokedex.css';
import PokedexMainPanel from './pokedex-main-panel/pokedex-main-panel';
import PokedexSidePanel from './pokedex-side-panel/pokedex-side-panel';
import PokeApiService from './libs/pokeapi';
import Pokemon from './interfaces/pokemon';

type PokedexState = {
  pokemon: Pokemon | null;
  searchString: string | null;
}

class Pokedex extends Component<any, PokedexState> {
  state: PokedexState = {
    pokemon: null,
    searchString: null
  }
  pokeapi: PokeApiService = new PokeApiService();

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchString: e.target.value });
  };

  searchPokemon = () => {
    let pokemonDataPromise = this.pokeapi.getPokemon(this.state.searchString);

    if (pokemonDataPromise === undefined || pokemonDataPromise === null) {
      return;
    }

    let currentScope = this;

    pokemonDataPromise.then(function (data) {
      if (data == null) { return; }

      currentScope.setState({ pokemon: data });
    })
  };

  render() {
    let currentPokemon = this.state.pokemon;
    
    return (
      <div className="background">
        <div className="mainPokedex">
          <div className="cameraRing">
            <div className="cameraLens"></div>
          </div>
          <div className="light redLight"></div>
          <div className="light yellowLight"></div>
          <div className="light greenLight"></div>
          <PokedexMainPanel spriteUrl={currentPokemon == null ? null : currentPokemon.sprites.front_default} 
                            changeFunction={this.onInputChange} 
                            searchFunction={this.searchPokemon} />
        </div>
        <PokedexSidePanel name={currentPokemon == null ? null : currentPokemon.name}
                          weight={currentPokemon == null ? null : currentPokemon.weight} 
                          height={currentPokemon == null ? null : currentPokemon.height} 
                          pokemonNumber={currentPokemon == null ? null : currentPokemon.id} />
      </div>
    );
  };
}

export default Pokedex;
