import React, { Fragment } from 'react';
import './pokedex-image-panel.css';
import SpriteUrl from '../interfaces/spriteUrls';

type PokedexImagePanelProp = {
    spriteUrl: SpriteUrl | null;
    errorText: string | null;
}

const PokedexImagePanel: React.FC<PokedexImagePanelProp> = (props) => {
    let imgArea =(<Fragment>{props.errorText}</Fragment>);
    
    let tempSpriteUrl: SpriteUrl = props.spriteUrl == null ? {} as SpriteUrl : props.spriteUrl;
    if (tempSpriteUrl !== null || tempSpriteUrl !== undefined) {
        let currentUrl = tempSpriteUrl.front_default;
        if(currentUrl != null){
            imgArea = (<img src={currentUrl} alt="pokemon sprite" width="100%" />);
        }
    }

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
    );
}

export default PokedexImagePanel;
