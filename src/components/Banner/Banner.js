import React from 'react';

function Banner({status, guessNum, answer}) {

  switch(status) {
    case 'win':
      return (
        <div className="happy banner slideup-animation">
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{
              guessNum === 1
              ? '1 guess'
              : `${guessNum} guesses`
            }</strong>.
          </p>
        </div>
      );
    case 'lose':
      return (
        <div className="sad banner slideup-animation">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      )
    default:
      return <></>;
  }
  
}

export default Banner;
