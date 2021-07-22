/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let winNumber = Math.floor(Math.random() * 100);    // Game pick a number between 1 (included) and 100 (excluded)
    let guessNumber = 0;                                // The guess from player
    let tryNumber = 0;                                  // Number of tried guesses
    do {
        tryNumber++;
        guessNumber = prompt("Guess the number between 1 and 100");
        if( isNaN( guessNumber ) ){ alert(`${guessNumber} is not a number :(`); }
        else {
            if( guessNumber > winNumber ){ alert(`The number is lower than ${guessNumber}`); }
            if( guessNumber < winNumber ){ alert(`The number is higher than ${guessNumber}`); }
        }
    } while( guessNumber != winNumber );
    alert(`Congrats! The number is ${winNumber}! You needed ${tryNumber} guesses`);
})();
