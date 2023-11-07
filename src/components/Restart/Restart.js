import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';


function Restart({setGuess, setGuessHistory, setAnswer}) {
  
  const handleClick = (e) => {
    setGuessHistory([]);
    setGuess('');
    setAnswer(sample(WORDS))
  }

  return <button id='restart-button' onClick={handleClick}>RESTART GAME</button>;
}

export default Restart;
