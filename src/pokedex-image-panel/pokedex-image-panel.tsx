import React from 'react';
import './pokedex-image-panel.css';

type PokedexImagePanelProp = {
    spriteUrl: string | null
}

const PokedexImagePanel: React.FC<PokedexImagePanelProp> = (props) => {
    let imgArea = props.spriteUrl == null ? null : (<img src={props.spriteUrl} alt="pokemon sprite" width="100%" />)

    return (
            <div className="backgroundImagePanelBorder">
                <div className="backgroundImagePanel">
                    <div className="leftLight imagePanelSmallLight"></div>
                    <div className="rightLight imagePanelSmallLight"></div>
                    <div className="spritePanel">
                        {imgArea}
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
