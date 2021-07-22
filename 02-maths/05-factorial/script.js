/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        function factorial(n){
            if (n==0){
                return 1;
            }
            else{
                return n*factorial(n-1);
            }
        };
        number=parseInt(document.getElementById("number").value);
        result=factorial(number);
        alert(`The factorial of ${number} is ${result}`);


    });

})();
