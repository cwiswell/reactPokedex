import React, { Component } from 'react';
import './pokedex-side-panel.css';

type PokedexSidePanelState = {
  name: string | null;
  height: string | null;
  weight: string | null;
}

type PokedexSidePanelProps = {
  name: string | null;
  height: string | null;
  weight: string | null;
}

class PokedexSidePanel extends Component<PokedexSidePanelProps, PokedexSidePanelState> {
  state: PokedexSidePanelState = {
    name: this.props.name,
    height: this.props.height,
    weight: this.props.weight
  }

  render() {
    return (
        <div className="pokedexSidePanel">
          <div className="descriptionArea">
            <div>Name:  {this.state.name}</div>
          </div>
        </div>
    );
  };
}

export default PokedexSidePanel;
