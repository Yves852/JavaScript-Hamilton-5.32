/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    const button_Run = document.getElementById("run");
    const createObject =()=>{
        var pairs = new Array();
        for (i=0;i<keys.length;i++){
            pairs[i]=new Array(keys[i],values[i]);
        };
        const object = Object.fromEntries(pairs);
        console.log(object);
    };
    button_Run.addEventListener("click",createObject);
})();
