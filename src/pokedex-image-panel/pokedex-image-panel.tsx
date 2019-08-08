import React, { Fragment, useState } from 'react';
import './pokedex-image-panel.css';
import SpriteUrl from '../interfaces/spriteUrls';

interface Sprite {
    name: string;
    index: string;
}

const spriteList: Array<Sprite> = [
    { name: "Front Male", index: "front_default" },
    { name: "Back Male", index: "back_default" },
    { name: "Front Female", index: "front_female" },
    { name: "Back Female", index: "back_female" },
    { name: "Front Shiny Male", index: "front_shiny" },
    { name: "Back Shiny Male", index: "back_shiny" },
    { name: "Front Shiny Female", index: "front_shiny_female" },
    { name: "Back Shiny Female", index: "back_shiny_female" }
];

type PokedexImagePanelProp = {
    spriteUrl: SpriteUrl | null;
    errorText: string | null;
}

const PokedexImagePanel: React.FC<PokedexImagePanelProp> = (props) => {
    const [currentIndex, setCurrentIndex] = useState<Sprite | null>(null);
    const [currentSpriteUrl, setCurrentSpriteUrl] = useState<SpriteUrl | null>(null);

    const changeIndex = () => {
        let currIndex = currentIndex;
        if (currIndex === null) {
            return;
        }

        let spriteIndex = currentIndex;
        if (spriteIndex === null) {
            console.log("sprite index is null")
            return;
        }

        let spriteObj = props.spriteUrl;
        if (spriteObj === null || spriteObj === undefined) {
            return;
        }

        let index = spriteList.indexOf(spriteIndex);
        let count = 0;
        while (count < spriteList.length) {
            index++;
            count++;

            if (index >= spriteList.length) {
                index = 0;
            }
            let spriteIndex = spriteList[index];

            if (spriteObj.hasOwnProperty(spriteIndex.index) && spriteObj[spriteIndex.index] !== null) {
                break;
            }
        }
        setCurrentIndex(spriteList[index]);
    };

    const renderImage = () => {
        let spriteObj = props.spriteUrl;
        if (spriteObj === null || spriteObj === undefined) {
            return (<Fragment>{props.errorText}</Fragment>);
        }

        let currentSpriteIndex = currentIndex;
        if (currentSpriteIndex === null) {
            return;
        }
        let currentUrl: string = "";

        if (spriteObj.hasOwnProperty(currentSpriteIndex.index)) {
            currentUrl = spriteObj[currentSpriteIndex.index] as string;
        }
        return (<Fragment><img src={currentUrl} alt="pokemon sprite" width="90%" />
            <div className="spriteBtn"></div></Fragment>);
    };

    if (props.spriteUrl === null && currentSpriteUrl !== null) {
        setCurrentIndex(null);
        setCurrentSpriteUrl(null);
    } else if (props.spriteUrl !== null && (currentIndex === null || currentSpriteUrl !== props.spriteUrl)) {
        setCurrentIndex(spriteList[0]);
        setCurrentSpriteUrl(props.spriteUrl);
    }

    let imgArea = renderImage();

    let spriteName = currentIndex === null ? "" : currentIndex.name;

    return (
        <div className="backgroundImagePanelBorder">
            <div className="backgroundImagePanel" onClick={changeIndex} >
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
