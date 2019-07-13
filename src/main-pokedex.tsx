import React, { Component } from 'react';
import './main-pokedex.css';
import PokedexMainPanel from './pokedex-main-panel/pokedex-main-panel';
import PokedexSidePanel from './pokedex-side-panel/pokedex-side-panel';

type PokedexState = {

}

class Pokedex extends Component<any, PokedexState> {

  
  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    //this.setState({ input: e.target.value });
  };

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
          <PokedexMainPanel spriteUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" changeFunction={this.onInputChange}/>
        </div>
        <PokedexSidePanel name="Pikachu" weight={4} height={60} />
      </div>
    );
  };
}

export default Pokedex;
