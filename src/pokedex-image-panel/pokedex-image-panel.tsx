import React, { Fragment } from 'react';
import './pokedex-image-panel.css';
import SpriteUrl from '../interfaces/spriteUrls';

interface Sprite {
    name: string;
    index: string;
}

const spriteList: Array<Sprite> = [
    {name: "Front Male", index: "front_default" },
    {name: "Back Male", index: "back_default" },
    {name: "Front Female", index: "front_female" },
    {name: "Back Female", index: "back_female" },
    {name: "Front Shiny Male", index: "front_shiny" },
    {name: "Back Shiny Male", index: "back_shiny" },
    {name: "Front Shiny Female", index: "front_shiny_female" },
    {name: "Back Shiny Female", index: "back_shiny_female" }
];

type PokedexImagePanelProp = {
    spriteUrl: SpriteUrl | null;
    errorText: string | null;
}


const PokedexImagePanel: React.FC<PokedexImagePanelProp> = (props) => {
    let imgArea =(<Fragment>{props.errorText}</Fragment>);
    let hasImage = false;

    let tempSpriteUrl: SpriteUrl = props.spriteUrl == null ? {} as SpriteUrl : props.spriteUrl;
    if (tempSpriteUrl !== null || tempSpriteUrl !== undefined) {
        let currentUrl = tempSpriteUrl["front_default"];
        if(currentUrl != null){
            imgArea = (<img src={currentUrl} alt="pokemon sprite" width="90%" />);
            hasImage = true;
        }
    }

    let spriteName = hasImage ? "Front Default" : "";

    return (
        <div className="backgroundImagePanelBorder">
            <div className="backgroundImagePanel">
                <div className="leftLight imagePanelSmallLight"></div>
                <div className="rightLight imagePanelSmallLight"></div>
                <div className="spritePanel">
                    {spriteName}
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
