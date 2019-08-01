import React, { Component } from 'react';
import './flavor-text.css';
import FlavorText from '../interfaces/flavorText';

type FlavorTextState = {
}

type FlavorTextProps = {
    flavorTexts: Array<FlavorText> | null;
}

class FlavorTextDisplay extends Component<FlavorTextProps, FlavorTextState> {
    state: FlavorTextState = {
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