import React from 'react';
import './pokedex-main-panel.css';

import PokedexImagePanel from '../pokedex-image-panel/pokedex-image-panel';
import SpriteUrl from '../interfaces/spriteUrls';

type PokedexMainPanelProp = {
    sprites: SpriteUrl | null;
    changeFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchFunction: () => void;
    errorText: string | null;
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
                <PokedexImagePanel spriteUrl={props.sprites} errorText={props.errorText} />
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
                    <div className="buttonPadBackground">
                        <div className="buttonPad"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokedexMainPanel;
