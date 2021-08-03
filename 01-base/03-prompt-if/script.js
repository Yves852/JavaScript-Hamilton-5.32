/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  let test = window.prompt("Do you want some cake ?");

  if(test.toUpperCase() === "YES"){
          alert ("Congraticulation");
      }
  
  if(test.toUpperCase() === "NO"){
          alert ("More cake for me then :p !");
      }

  // var = Portée globale.
  // let = Portée limitée à celle du bloc courant.
  // const = Portée -> celle du bloc comme let.

})();