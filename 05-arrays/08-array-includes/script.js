/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    // your code here    
    document.getElementById("run").addEventListener(

            "click",
            () => (checkApple(fruits), false),
        );
        
        function checkApple(fruits){
        
              if(fruits.indexOf('apple') !== -1) 
			   { 
			   	console.log("there is an apple in the array");
			   }	
        }

        // indexOf will check if we have an apple in the array and its position.
        // Here the apple position = 0. It's a strict inequality with -1. So "apple" exists.
        // The code will display the sentence in the console.

    // Rem : The code is easier with the "false and true" method.

})();
