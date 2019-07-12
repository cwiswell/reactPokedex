import React from 'react';
import './pokedex-main-panel.css';

import PokedexImagePanel from '../pokedex-image-panel/pokedex-image-panel';

// replace the src with data from api

type PokedexMainPanelProp = {
    spriteUrl: string
}

const PokedexMainPanel: React.FC<PokedexMainPanelProp> = (props) => {
    return (
        <div className="mainPanel">
            <PokedexImagePanel spriteUrl={props.spriteUrl} />
            <div className="bottomLeftContainer">
                <div className="leftBlackButton"></div>
                <div className="midButton redMidBtn"></div>
                <div className="midButton greyMidBtn"></div>
                <input type="text" className="pokemonSearchInput" />

            </div>
            <div className="bottomRightContainer">
                <div className="buttonPad"></div>
            </div>
        </div>
    )
}

export default PokedexMainPanel;
