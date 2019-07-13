import React, { Component } from 'react';
import './pokedex-side-panel.css';

type PokedexSidePanelState = {

}

class PokedexSidePanel extends Component<any, PokedexSidePanelState> {

  render() {
    return (
        <div className="pokedexSidePanel">
          <div className="descriptionArea"></div>
        </div>
    );
  };
}

export default PokedexSidePanel;
