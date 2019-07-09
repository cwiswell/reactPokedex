import React from 'react';
import './pokedex-main-panel.css';

// replace the src with data from api

type PokedexMainPanelProp = {
    spriteUrl: string 
}

const PokedexMainPanel: React.FC<PokedexMainPanelProp> = (props) => {
    return (
        <div className="mainPanel">
            <div className="backgroundImagePanel">
                <div className="leftLight imagePanelLight"></div>
                <div className="rightLight imagePanelLight"></div>
                <div className="spritePanel">
                    <img src={props.spriteUrl} alt="pokemon sprite" width="100%"/>
                </div>
            </div>
        </div>
    )
}

export default PokedexMainPanel;
