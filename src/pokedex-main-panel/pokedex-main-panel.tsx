import React from 'react';
import './pokedex-main-panel.css';

import PokedexImagePanel from '../pokedex-image-panel/pokedex-image-panel';

// replace the src with data from api

type PokedexMainPanelProp = {
    spriteUrl: string | null;
    changeFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchFunction: () => void;
}

const PokedexMainPanel: React.FC<PokedexMainPanelProp> = (props) => {
    let keyUpFunction = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.searchFunction();
        }
    }

    return (
        <div className="mainPanelBackground">
            <div className="mainPanel">
                <PokedexImagePanel spriteUrl={props.spriteUrl} />
                <div className="bottomLeftContainer">
                    <div className="leftBlackButton"></div>
                    <div className="midButton redMidBtn"></div>
                    <div className="midButton greyMidBtn"></div>
                    <input type="text" className="pokemonSearchInput"
                        onChange={props.changeFunction}
                        onBlur={props.searchFunction}
                        onKeyUp={keyUpFunction} />

                </div>
                <div className="bottomRightContainer">
                    <div className="buttonPad"></div>
                </div>
            </div>
        </div>
    )
}

export default PokedexMainPanel;
