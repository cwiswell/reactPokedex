import React from 'react';
import './pokedex-main-panel.css';

// replace the src with data from api

const PokedexMainPanel: React.FC = () => {
    return (
        <div className="mainPanel">
            <div className="backgroundImagePanel">
                <div className="spritePanel">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="sprite image" width="100%"/>
                </div>
            </div>
        </div>
    )
}

export default PokedexMainPanel;
