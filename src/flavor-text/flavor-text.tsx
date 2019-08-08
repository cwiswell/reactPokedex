import React, { useState } from 'react';
import './flavor-text.css';
import FlavorText from '../interfaces/flavorText';

type FlavorTextProps = {
    flavorTexts: Array<FlavorText>;
}

const FlavorTextDisplay: React.FC<FlavorTextProps> = (props) => {
    const [gameName, setGameName] = useState<string>("Unknown");
    const [flavorText, setFlavorText] = useState<string>("No information available.");
    const [currentIndex, setCurrentIndex] = useState<number>(-1);

    if (props.flavorTexts.length === 0 && currentIndex !== -1) {
        setGameName("Unknown");
        setFlavorText("No information available.");
        setCurrentIndex(-1);
    } else if (props.flavorTexts.length > 0 && (currentIndex === -1 || !props.flavorTexts.some(item => item.flavor_text === flavorText))) {

        setGameName(props.flavorTexts[0].version.name);
        setFlavorText(props.flavorTexts[0].flavor_text);
        setCurrentIndex(0);
    }

    const nextText = () => {
        let nextIndex = currentIndex + 1;

        if (nextIndex === props.flavorTexts.length) {
            nextIndex = 0;
        }

        let nextFlavorText = props.flavorTexts[nextIndex];

        if (nextFlavorText === null || nextFlavorText === undefined) {
            return;
        }
        
        setGameName(nextFlavorText.version.name);
        setFlavorText(nextFlavorText.flavor_text);
        setCurrentIndex(nextIndex);
    };

    const speakText = () => {
        let msg = new SpeechSynthesisUtterance(flavorText);
        window.speechSynthesis.speak(msg);
    }

    return (
        <div className="flavorTextArea">            
            <div className="flavorTextButton" onClick={nextText}></div>
            <div className="textToAudio" onClick={speakText}>Text-to-Audio</div>
            <div className="gameText">
                Game: {gameName}
            </div>
            <br />
            <div>
                {flavorText}
            </div>
        </div>
    );

}

export default FlavorTextDisplay;