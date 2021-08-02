/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var questions = () => {

        const Age = prompt("Please enter your age");
        const Gender = prompt("Please enter your age (male or female) ?");
        const Adress = prompt("In which town do you live in ? ");
        const Rez = confirm('Do you confirm those informations     Age = '+ Age +' Gender= ' + Gender + 'Adresse =' + Adress);

        if (Rez == true ) {
            alert("well bravo");
        }
        else {
            questions () 
        }
    }
    questions() 

})();
