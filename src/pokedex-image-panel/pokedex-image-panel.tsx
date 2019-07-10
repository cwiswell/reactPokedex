import React from 'react';
import './pokedex-image-panel.css';

// replace the src with data from api

type PokedexImagePanelProp = {
    spriteUrl: string
}

const PokedexImagePanel: React.FC<PokedexImagePanelProp> = (props) => {
    return (
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
    )
}

export default PokedexImagePanel;
