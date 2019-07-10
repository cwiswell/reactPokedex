import React from 'react';
import './pokedex-main-panel.css';

// replace the src with data from api

type PokedexMainPanelProp = {
    spriteUrl: string
}

const PokedexMainPanel: React.FC<PokedexMainPanelProp> = (props) => {
    return (
        <div className="mainPanel">
            <div className="backgroundImagePanelBorder">
                <div className="backgroundImagePanel">
                    <div className="leftLight imagePanelSmallLight"></div>
                    <div className="rightLight imagePanelSmallLight"></div>
                    <div className="spritePanel">
                        <img src={props.spriteUrl} alt="pokemon sprite" width="100%" />
                    </div>
                    <div className="imagePanelBottomLight"></div>
                    <div className="lineContainer">
                        <div className="lineDiv"></div>
                        <div className="lineDiv"></div>
                    </div>
                </div>

            </div>

            <input type="text" className="pokemonSearchInput" />
        </div>
    )
}

export default PokedexMainPanel;
