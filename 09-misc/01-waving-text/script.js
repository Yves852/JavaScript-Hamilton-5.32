/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let x = document.getElementById("target").innerHTML
    let y = x.split('')
    let letter = []
    let size = [1,2,3,4,5,4,3,2]
    let k = 0
    for(i=0;i<y.length;i++){
        letter.push(`<span id='letter-${i}' style = "font-size:${16*size[k]+'px'}">${y[i]}</span>`)
        k+=1
        if (k>size.length) {
            k=0
        }
    }
    let z = letter.join('')
    document.getElementById("target").innerHTML = z
    console.log(letter)
    // checkout replace to put span around letters and querryselectorall to select every similar object
})();
