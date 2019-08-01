import React, { Component } from 'react';
import './main-pokedex.css';
import PokedexMainPanel from './pokedex-main-panel/pokedex-main-panel';
import PokedexSidePanel from './pokedex-side-panel/pokedex-side-panel';
import PokeApiService from './libs/pokeapi';
import Pokemon from './interfaces/pokemon';
import ReferenceItem from './interfaces/referenceItem';
import FlavorText from './interfaces/flavorText';

type PokedexState = {
  pokemon: Pokemon | null;
  searchString: string | null;
  errorText: string | null;
  language: string;
}

class Pokedex extends Component<any, PokedexState> {
  state: PokedexState = {
    pokemon: null,
    searchString: null,
    errorText: null,
    language: 'en'
  }
  pokeapi: PokeApiService = new PokeApiService();

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchString: e.target.value });
  };

  searchPokemon = () => {
    let pokemonDataPromise = this.pokeapi.getPokemon(this.state.searchString);

    if (pokemonDataPromise === undefined || pokemonDataPromise === null) {
      this.setState({ pokemon: null, errorText: null });
      return;
    }

    let currentScope = this;

    pokemonDataPromise.then(function (data) {
      if (data == null) { 
        currentScope.setState({pokemon: null, errorText: `Pokemon ${currentScope.state.searchString} not found.`});
        return; 
      }
      
      currentScope.setState({ pokemon: data, errorText: null });
    })
  };

  isLanguage = (element: any, index: number, array: Array<any>) => {
     let lang: ReferenceItem = element.language;

     return lang.name === this.state.language;
  }

  render() {
    let currentPokemon = this.state.pokemon;
    
    let filteredFlavorText: Array<FlavorText> = [];

    if(currentPokemon !== null && currentPokemon.speciesData !== null){
      let flavorText = currentPokemon.speciesData.flavor_text_entries;
      filteredFlavorText = flavorText.filter(this.isLanguage);
    }

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
                            searchFunction={this.searchPokemon} 
                            errorText={this.state.errorText} />
        </div>
        <PokedexSidePanel name={currentPokemon == null ? null : currentPokemon.name}
                          weight={currentPokemon == null ? null : currentPokemon.weight} 
                          height={currentPokemon == null ? null : currentPokemon.height} 
                          pokemonNumber={currentPokemon == null ? null : currentPokemon.id}
                          flavorTexts={filteredFlavorText} />
      </div>
    );
  };
}

export default Pokedex;
