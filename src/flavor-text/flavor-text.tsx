import React, { Component } from 'react';
import './flavor-text.css';
import FlavorText from '../interfaces/flavorText';

type FlavorTextState = {
    gameName: string;
    flavorText: string;
}

type FlavorTextProps = {
    flavorTexts: Array<FlavorText> | null;
}

class FlavorTextDisplay extends Component<FlavorTextProps, FlavorTextState> {
    state: FlavorTextState = {
        gameName: "Unknown",
        flavorText: "No information available."
    };

    static getDerivedStateFromProps(props: FlavorTextProps, current_state: FlavorTextState) {
        if(props.flavorTexts === null || props.flavorTexts === undefined || props.flavorTexts.length === 0){
            return  {
                gameName: "Unknown",
                flavorText: "No information available."
            };
        }
        return null
      }

    render() {
        let flavorText = "";
        let gameName = "";
        if (this.props.flavorTexts === null || this.props.flavorTexts === undefined || this.props.flavorTexts.length === 0) {
            flavorText = "No information available.";
            gameName = "Unknown";
        } else {
            flavorText = this.props.flavorTexts[0].flavor_text;
            gameName = this.props.flavorTexts[0].version.name;
        }

        return (
            <div className="flavorTextArea">
                <div>
                    {gameName}
                </div>
                <div>
                    {flavorText}
                </div>
            </div>
        );
    }
}

export default FlavorTextDisplay;