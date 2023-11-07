import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

/**
 * 
 * @param {Array<object>} history 
 * @returns {<HTMLElement>}
 */

function GuessHistory({guessHistory, answer}) {


  return (
    <div className="guess-results">
    {
      range(NUM_OF_GUESSES_ALLOWED).map((_, index) => {
        const guess = guessHistory[index]?.guess || '';
        const id = guessHistory[index]?.id || Math.random(); 
        
        const checkClasses = checkGuess(guess, answer) || [];

        const guessLetters = guess.split('')

        return (
        <p className="guess" key={`guess-${id}`}>
          {range(5).map(i => (
            <span className={`cell ${checkClasses[i]?.status || ''} ${guessLetters[i] && 'blink-animation'}`} 
            style={{'--animation-delay': i*100+'ms'}}
            key={`${id}-${i}`}>
              {guessLetters[i] || ''}
            </span>
          ))}
        </p>
      )}
    )}
    </div>
  );
}

export default GuessHistory;