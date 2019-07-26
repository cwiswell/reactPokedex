import React from 'react';
import './pokedex-side-panel.css';

type PokedexSidePanelProps = {
  name: string | null;
  height: number | null;
  weight: number | null;
  pokemonNumber: number | null;
}

const PokedexSidePanel: React.FC<PokedexSidePanelProps> = (props) => {
    let height = props.height === null ? "N/A" : `${props.height} dm`;
    let weight = props.weight === null ? "N/A" : `${props.weight} hg`;
    
    return (
        <div className="pokedexSidePanel">
          <div className="descriptionArea">
            <div className="nameDiv">Name:  {props.name}</div>
            <div># {props.pokemonNumber}</div>
            <div>Height:  {height}</div>
            
            <div>Weight:  {weight}</div>
          </div>
        </div>
    );
  
}

export default PokedexSidePanel;
