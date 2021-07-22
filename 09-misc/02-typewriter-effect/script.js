/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = document.getElementById("target")
    target.innerHTML = target.textContent.replace(/\S/g, "<span class='letters'>$&</span>")
    let element = document.querySelectorAll(".letters")
    
    element.forEach(el => el.style.opacity ='0')


    for(let i=0; i<element.length;i++){
        setTimeout(function(){
            element[i].style.opacity = '1'
        } , 150 * i)

    }

})();
