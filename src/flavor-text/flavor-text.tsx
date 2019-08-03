import React, { Component } from 'react';
import './flavor-text.css';
import FlavorText from '../interfaces/flavorText';

type FlavorTextState = {
    gameName: string;
    flavorText: string;
    currentIndex: number;
}

type FlavorTextProps = {
    flavorTexts: Array<FlavorText>;
}

class FlavorTextDisplay extends Component<FlavorTextProps, FlavorTextState> {
    state: FlavorTextState = {
        gameName: "Unknown",
        flavorText: "No information available.",
        currentIndex: -1,
    };

    static getDerivedStateFromProps(props: FlavorTextProps, current_state: FlavorTextState) {
        if (props.flavorTexts.length === 0) {
            return {
                gameName: "Unknown",
                flavorText: "No information available.",
                currentIndex: -1
            };
        }else if(current_state.currentIndex === -1){ 
            return {
                gameName: props.flavorTexts[0].version.name,
                flavorText: props.flavorTexts[0].flavor_text,
                currentIndex: 0
            };
        }
        return null;
    }
    
    nextText = () =>{
        let nextIndex = this.state.currentIndex + 1;

        if(nextIndex === this.props.flavorTexts.length){
            nextIndex = 0;
        }

        let nextFlavorText = this.props.flavorTexts[nextIndex];

        if(nextFlavorText === null || nextFlavorText === undefined){
            return;
        }
        
        this.setState({
            gameName: nextFlavorText.version.name,
            flavorText: nextFlavorText.flavor_text,
            currentIndex: nextIndex
        });
    }

    render() {
        return (
            <div className="flavorTextArea" onClick={this.nextText}>
                <div className="gameText">
                    Game: {this.state.gameName}
                </div>
                <br />
                <div>
                    {this.state.flavorText}
                </div>
            </div>
        );
    }
}

export default FlavorTextDisplay;