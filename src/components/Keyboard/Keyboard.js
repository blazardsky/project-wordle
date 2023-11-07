import React from 'react';

import { KEYBOARD_LETTERS, LETTERS } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Keyboard({guessHistory, answer, myRef, callback}) {

  
  const letters = LETTERS.reduce((accumulator, value) => {
    return {...accumulator, [value]: ''};
  }, {});
  
  guessHistory.map( _ => (
    checkGuess(_.guess || '', answer).map(({letter, status}) => (
      letters[letter] = status
    ))
  ))

  function handleClick(e,k) {
    e.preventDefault();
    myRef.current.focus()
    if (myRef.current.value.length < 5) {
      myRef.current.value = myRef.current.value + k;
      callback(myRef.current.value) //setGuess(value.toUppercase())
    }
  }

  // function handleDelete(e) {
  //   e.preventDefault()
  //   const len = myRef.current.value.length;
  //   if (len >= 1) {
  //     myRef.current.value = myRef.current.value.slice(0,len-1);
  //   }
  // }

  return (
    <div className='keyboard-wrapper'>
      {KEYBOARD_LETTERS.map(row => (
        <div key={row} className='keyboard-row'>
          {
            row.split('').map(k => (
              <button 
                className={`keyboard-button ${letters[k]}`} 
                key={k}
                onClick={(e)=>handleClick(e,k)}
              >
                {k}
              </button>
            ))
          }
        </div>
      ))}
      {/* <div className='keyboard-row'>
        <button className='keyboard-button' role="delete" title="delete" onClick={handleDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-delete"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line></svg>
        </button>
        <button className='keyboard-button' type="submit" title="submit">
          <strong>ENTER</strong>
        </button>
      </div> */}
    </div>
  );
}

export default Keyboard;
