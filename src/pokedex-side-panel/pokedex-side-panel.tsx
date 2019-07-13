import React, { Component } from 'react';
import './pokedex-side-panel.css';

type PokedexSidePanelState = {
  height: string | null;
  weight: string | null;
  description: string | null;
}

class PokedexSidePanel extends Component<any, PokedexSidePanelState> {

  render() {
    return (
        <div className="pokedexSidePanel">
          <div className="descriptionArea">
            <div></div>
          </div>
        </div>
    );
  };
}

export default PokedexSidePanel;
