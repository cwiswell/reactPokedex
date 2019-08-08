import React from 'react';
import './pokedex-side-panel.css';
import FlavorText from '../interfaces/flavorText';
import FlavorTextDisplay from '../flavor-text/flavor-text';
import PokemonType from '../interfaces/pokemonType';

type PokedexSidePanelProps = {
  name: string | null;
  height: number | null;
  weight: number | null;
  pokemonNumber: number | null;
  flavorTexts: Array<FlavorText>;
  types: Array<PokemonType> | null;
}

const PokedexSidePanel: React.FC<PokedexSidePanelProps> = (props) => {
  let height = props.height === null ? "N/A" : `${props.height} dm`;
  let weight = props.weight === null ? "N/A" : `${props.weight} hg`;
  let types = "N/A" ;

  if(props.types !== null && props.types.length > 0){
    let arrayOfTypes = props.types.map((item) => item.type.name);
    types = arrayOfTypes.join("\\");
  }

  return (
    <div className="pokedexSidePanel">
      <div className="descriptionArea">
        <div className="nameDiv">Name:  {props.name}</div>
        <div># {props.pokemonNumber}</div>
        <div>Height:  {height}</div>

        <div>Weight:  {weight}</div>
        
        <div className="typeDiv">Type: {types}</div>
      </div>
      <FlavorTextDisplay flavorTexts={props.flavorTexts} />
    </div>
  );

}

export default PokedexSidePanel;
