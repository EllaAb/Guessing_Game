import React from 'react';
import HeaderGame from './header ';
import FormInput from './FormInput';
import StatusGame from './StatusGame';

import '../styles/game.css';

 const Game =(props) => {
    return (
        <div className="game-board">
            < HeaderGame />
            < FormInput />
		    <StatusGame/>
        </div>
    );
} 

export default Game;