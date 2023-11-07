import React from 'react';
import Keyboard from '../Keyboard/Keyboard';

import {PATTERN} from '../../constants';

function Input({guessHistory, setGuessHistory, gameEnded, answer, guess, setGuess}) {

  const inputRef = React.useRef(null);

  function handleChange(value) {
    const accepted = value.replace(PATTERN, "")
    setGuess(accepted.toUpperCase())
  }

  return (
    <>
      <form 
        className="guess-input-wrapper"
        onSubmit={event => {
          event.preventDefault();
          if (guess.length != 5) {
            window.alert('Must be 5 letters')
            return
          }
          setGuessHistory([...guessHistory, {
            guess: guess,
            id: crypto.randomUUID()
          }])
          setGuess('');
          }
        }
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input 
          id="guess-input"
          type="text"
          role="submit"
          maxLength={5}
          minLength={5}
          value={guess}
          ref={inputRef}
          autoFocus={true}
          disabled={gameEnded}
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
      <Keyboard 
        guessHistory={guessHistory} 
        answer={answer} 
        myRef={inputRef}
        callback={handleChange}
      />
    </>
  );
}

export default Input;
