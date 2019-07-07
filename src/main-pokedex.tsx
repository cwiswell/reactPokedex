import React, { Component } from 'react';
import './main-pokedex.css';
import PokedexMainPanel from './pokedex-main-panel/pokedex-main-panel';

type PokedexState = {

}

class Pokedex extends Component<any, PokedexState> {

  render() {
    return (
      <div className="background">
        <div className="mainPokedex">
          <div className="cameraRing">
            <div className="cameraLens"></div>
          </div>
          <div className="light redLight"></div>
          <div className="light yellowLight"></div>
          <div className="light greenLight"></div>
          <PokedexMainPanel />
        </div>
        <div className="pokedexSidePanel">

        </div>
      </div>
    );
  };
}

export default Pokedex;
