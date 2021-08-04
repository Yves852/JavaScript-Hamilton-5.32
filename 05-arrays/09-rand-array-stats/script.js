/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {
    var arr = []
    for (let i=1; i <= 10 ; i++ ){
        let id = `n-${i}`
        console.log(id)
        document.getElementById(id).innerHTML = Math.floor(Math.random()*100)
        arr.push(parseInt(document.getElementById(id).innerHTML))
        console.log(arr)
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    document.getElementById("max").innerHTML = Math.max(...arr)
    document.getElementById("min").innerHTML = Math.min(...arr)
    document.getElementById("sum").innerHTML = arr.reduce(reducer)
    document.getElementById("average").innerHTML = arr.reduce(reducer)/arr.length
    



})();