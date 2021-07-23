/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function () {
        
    let pass1 = document.getElementById("pass-one");
    let pass2 = document.getElementById("pass-two");

    if(pass1.value === pass2.value) {
      Alert("Yes");
    } 
    else {
        pass1.style.borderColor = "red";
        pass2.style.borderColor = "red";
    };
    })

})();

