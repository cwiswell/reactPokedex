import React from 'react';
import './pokedex-side-panel.css';
import FlavorText from '../interfaces/flavorText';

type PokedexSidePanelProps = {
  name: string | null;
  height: number | null;
  weight: number | null;
  pokemonNumber: number | null;
  flavorTexts: Array<FlavorText>;
}

const PokedexSidePanel: React.FC<PokedexSidePanelProps> = (props) => {
  let height = props.height === null ? "N/A" : `${props.height} dm`;
  let weight = props.weight === null ? "N/A" : `${props.weight} hg`;
  let flavorText = "";
  let gameName = "";
  if(props.flavorTexts === null || props.flavorTexts === undefined || props.flavorTexts.length === 0)
  {
    flavorText= "No information available.";
    gameName="Unknown";
  }else{
    flavorText = props.flavorTexts[0].flavor_text;
    gameName = props.flavorTexts[0].version.name;
  }

  return (
    <div className="pokedexSidePanel">
      <div className="descriptionArea">
        <div className="nameDiv">Name:  {props.name}</div>
        <div># {props.pokemonNumber}</div>
        <div>Height:  {height}</div>

        <div>Weight:  {weight}</div>
        <br />
      </div>
      <div className="flavorTextArea">
        <div>
          {gameName}
        </div>
        <div>
          {flavorText}
        </div>
      </div>
    </div>
  );

}

export default PokedexSidePanel;
