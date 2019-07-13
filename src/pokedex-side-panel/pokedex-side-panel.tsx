import React, { Component } from 'react';
import './pokedex-side-panel.css';

type PokedexSidePanelState = {
  name: string | null;
  height: number | null;
  weight: number | null;
}

type PokedexSidePanelProps = {
  name: string | null;
  height: number | null;
  weight: number | null;
}

class PokedexSidePanel extends Component<PokedexSidePanelProps, PokedexSidePanelState> {
  state: PokedexSidePanelState = {
    name: this.props.name,
    height: this.props.height,
    weight: this.props.weight
  }

  render() {
    let height = this.state.height === null ? "N/A" : `${this.state.height} dm`;
    let weight = this.state.weight === null ? "N/A" : `${this.state.weight} hg`;

    return (
        <div className="pokedexSidePanel">
          <div className="descriptionArea">
            <div>Name:  {this.state.name}</div>
            
            <div>Height:  {height}</div>
            
            <div>Weight:  {weight}</div>
          </div>
        </div>
    );
  };
}

export default PokedexSidePanel;
