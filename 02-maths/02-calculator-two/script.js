/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        var nb1 = parseFloat(document.getElementById("op-one").value);
        var nb2 = parseFloat(document.getElementById("op-two").value);
        switch (operation) {
            case "addition" :
                alert(nb1+nb2);
                break;
            case "substraction" :
                alert(nb1-nb2);
                break;
            case "multiplication" :
                alert(nb1*nb2);
                break;
            case "division" :
                alert(nb1/nb2);
                break;
            default :
                alert("error")
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
