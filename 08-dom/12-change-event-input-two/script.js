/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var password = document.getElementById("pass-one");
    var flag = false
    var required = /^[A-Za-z]{8,}[0-9]{2,}$/
    password.onkeyup = password.onkeypress = function() {
        document.getElementById("validity").innerHTML = this.value
        verif()
    }
    function verif() {
    if (password.value.match(required)) {
        flag = true
    }
    else {
        flag = false
    }
    if (flag == true) {
        document.getElementById("validity").innerHTML = "OK"
    }
    else {
        document.getElementById("validity").innerHTML = " Not ok, try again"
    }
    }
})();
