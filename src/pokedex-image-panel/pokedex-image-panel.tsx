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
}

class PokedexImagePanel extends Component<PokedexImagePanelProp, PokedexImagePanelState>{
    state: PokedexImagePanelState ={
        currentIndex: null
    };
    
    changeIndex = () =>{
        let currIndex = this.state.currentIndex;
        if(currIndex === null){
            return;
        }
        console.log()
    }

    static getDerivedStateFromProps(props: PokedexImagePanelProp, current_state: PokedexImagePanelState) : PokedexImagePanelState | null {
        if (props.spriteUrl === null) {
            return {
                currentIndex: null
            };
        }else if(current_state.currentIndex === null){
            console.log("initialize state");
            return {
                currentIndex: spriteList[0]
            };
        }
        return null;
    };

    render() {
        let imgArea = (<Fragment>{this.props.errorText}</Fragment>);
        let hasImage = false;

        let tempSpriteUrl: SpriteUrl = this.props.spriteUrl == null ? {} as SpriteUrl : this.props.spriteUrl;
        if (tempSpriteUrl !== null || tempSpriteUrl !== undefined) {
            let currentUrl = tempSpriteUrl["front_default"];
            if (currentUrl != null) {
                imgArea = (<img src={currentUrl} alt="pokemon sprite" width="90%" />);
                hasImage = true;
            }
        }

        let spriteName = hasImage ? "Front Default" : "";

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
