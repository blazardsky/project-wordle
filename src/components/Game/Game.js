import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import Input from '../Input/Input';
import GuessHistory from '../GuessHistory/GuessHistory';
import Banner from '../Banner/Banner';
import Restart from '../Restart/Restart';


function Game() {

  const [guessHistory, setGuessHistory] = React.useState([]);
  const [answer, setAnswer] = React.useState( () => sample(WORDS) );
  console.log(answer);
  const [guess, setGuess] = React.useState('');

  const guessNum = guessHistory.length;

  const lastGuess = guessHistory[guessNum-1]?.guess; //otherwise the check is done before the user hits enter and the last guess is not shown in the table

  const gameEnded = (lastGuess === answer) || (guessNum >= NUM_OF_GUESSES_ALLOWED);
  const status = (lastGuess === answer) && (guessNum <= NUM_OF_GUESSES_ALLOWED) 
  ? 'win' : 'lose'

  return (
    <>
      <GuessHistory 
        guessHistory={guessHistory} 
        answer={answer}
      />
      {gameEnded && (
        <Restart 
          setAnswer={setAnswer} 
          setGuessHistory={setGuessHistory} 
          setGuess={setGuess} 
        />
      )}
      <Input 
        setGuessHistory={setGuessHistory} 
        guessHistory={guessHistory}
        gameEnded={gameEnded}
        answer={answer} 
        setGuess={setGuess}
        guess={guess}
      />
      {gameEnded && <Banner 
          status={status}
          answer={answer} 
          guessNum={guessNum}
        />
      }
    </>
  );
}

export default Game;
