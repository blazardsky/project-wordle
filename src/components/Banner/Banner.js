import React from 'react';


/**
 * COMMENT AFTER THE SOLUTION VIDEO:
 * For me: this should be separated in 2 sub components WinBanner / LostBanner with a generic "Banner" wrapper.
 * For Josh: I tought it was "overengineering" but it is actually better. Thanks for your explaination. I'll leave this as it is tho 
 */

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
