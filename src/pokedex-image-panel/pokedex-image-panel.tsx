import React, { Fragment, Component } from 'react';
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

type PokedexImagePanelState = {
    currentIndex: Sprite | null;
    currentSpriteUrl: SpriteUrl | null;
}

class PokedexImagePanel extends Component<PokedexImagePanelProp, PokedexImagePanelState>{
    state: PokedexImagePanelState = {
        currentIndex: null,
        currentSpriteUrl: null
    };

    changeIndex = () => {
        let currIndex = this.state.currentIndex;
        if (currIndex === null) {
            return;
        }

        let spriteIndex = this.state.currentIndex;
        if (spriteIndex === null) {
            console.log("sprite index is null")
            return;
        }
        
        let spriteObj = this.props.spriteUrl;
        if(spriteObj === null || spriteObj === undefined){
            return;
        }

        let index = spriteList.indexOf(spriteIndex);
        let count = 0;
        while (count < spriteList.length) {
            index++;
            count++;

            if(index >= spriteList.length){
                index = 0;
            }
            let spriteIndex = spriteList[index];

            if (spriteObj.hasOwnProperty(spriteIndex.index) && spriteObj[spriteIndex.index] !== null) {
                break;
            }
        }
        this.setState({currentIndex: spriteList[index]});
    }

    static getDerivedStateFromProps(props: PokedexImagePanelProp, current_state: PokedexImagePanelState): PokedexImagePanelState | null {
        if (props.spriteUrl === null) {
            return {
                currentIndex: null,
                currentSpriteUrl: null
            };
        } else if (current_state.currentIndex === null || current_state.currentSpriteUrl !== props.spriteUrl) {
            return {
                currentIndex: spriteList[0],
                currentSpriteUrl: props.spriteUrl
            };
        }
        return null;
    };

    renderImage = () => {
        let spriteObj = this.props.spriteUrl;
        if (spriteObj === null || spriteObj === undefined) {
            return (<Fragment>{this.props.errorText}</Fragment>);
        }

        let currentSpriteIndex = this.state.currentIndex;
        if (currentSpriteIndex === null) {
            return;
        }
        let currentUrl: string = "";

        if (spriteObj.hasOwnProperty(currentSpriteIndex.index)) {
            currentUrl = spriteObj[currentSpriteIndex.index] as string;
        }
        return (<img src={currentUrl} alt="pokemon sprite" width="90%" />)
    }

    render() {
        let imgArea = this.renderImage();

        let spriteName = this.state.currentIndex === null ? "" : this.state.currentIndex.name;

        return (
            <div className="backgroundImagePanelBorder">
                <div className="backgroundImagePanel" onClick={this.changeIndex} >
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
}

export default PokedexImagePanel;
