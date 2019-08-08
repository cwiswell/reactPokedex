import React, { useState } from 'react';
import './main-pokedex.css';
import PokedexMainPanel from './pokedex-main-panel/pokedex-main-panel';
import PokedexSidePanel from './pokedex-side-panel/pokedex-side-panel';
import PokeApiService from './libs/pokeapi';
import Pokemon from './interfaces/pokemon';
import ReferenceItem from './interfaces/referenceItem';
import FlavorText from './interfaces/flavorText';

const Pokedex: React.FC<any> = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [searchString, setSearchString] = useState<string | null>(null);
  const [errorText, setErrorText] = useState<string | null>(null);
  const language = 'en';
  //const [language, setLanguage] = useState<string>('en');
  const [previousSearchString, setpreviousSearchString] = useState<string | null>(null);

  const pokeapi: PokeApiService = new PokeApiService();

  const searchPokemon = () => {
    if (previousSearchString !== null && searchString === previousSearchString) {
      return;
    }
    
    let pokemonDataPromise = pokeapi.getPokemon(searchString);

    if (pokemonDataPromise === undefined || pokemonDataPromise === null) {
      setPokemon(null);
      setErrorText(null);
      return;
    }

    pokemonDataPromise.then(function (data) {
      if (data == null) {
        setPokemon(null);
        setErrorText(`Pokemon ${searchString} not found.`);
        return;
      }
      setPokemon(data);
      setErrorText(null);
      setpreviousSearchString(searchString);
    })
  };

  const isLanguage = (element: any, index: number, array: Array<any>) => {
    let lang: ReferenceItem = element.language;

    return lang.name === language;
  };


  let filteredFlavorText: Array<FlavorText> = [];

  if (pokemon !== null && pokemon.speciesData !== null) {
    let flavorText = pokemon.speciesData.flavor_text_entries;
    filteredFlavorText = flavorText.filter(isLanguage);
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
        <PokedexMainPanel sprites={pokemon === null ? null : pokemon.sprites}
          changeFunction={e => setSearchString(e.target.value)}
          searchFunction={searchPokemon}
          errorText={errorText} />
      </div>
      <PokedexSidePanel name={pokemon === null ? null : pokemon.name}
        weight={pokemon === null ? null : pokemon.weight}
        height={pokemon === null ? null : pokemon.height}
        pokemonNumber={pokemon === null ? null : pokemon.id}
        flavorTexts={filteredFlavorText} 
        types={pokemon === null ? null : pokemon.types} />
    </div>
  );
}

export default Pokedex;
