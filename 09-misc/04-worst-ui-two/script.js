/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

})();






let value1 = document.getElementById("part-one").getAttribute("data-min")
let value2 = document.getElementById("part-two").getAttribute("data-min")
let value3 = document.getElementById("part-three").getAttribute("data-min")
let value4 = document.getElementById("part-four").getAttribute("data-min")

document.getElementById("part-one").addEventListener("click",function(){
let min1 = Number(document.getElementById("part-one").getAttribute("data-min"))
let max1 = Number(document.getElementById("part-one").getAttribute("data-max"))

value1++
if (value1 <10){

    value1 = `0${value1}`
    document.getElementById("part-one").innerHTML= `0${value1}`
    
}

 if (value1 === max1+1){
     value1=min1 
              
  }
 else {
 console.log(value1)
 }
 document.getElementById("part-one").innerHTML= `${value1}`
 document.getElementById("target").innerHTML=`+${value1}${value2}${value3}${value4}`
 })







document.getElementById("part-two").addEventListener("click",function(){
    let max2 = Number(document.getElementById("part-two").getAttribute("data-max"))
     let min2 = Number(document.getElementById("part-two").getAttribute("data-min"))
    value2++
    if (value2 <10){
        value2 = `0${value2}`
        
        
    }
    else{
        document.getElementById("part-two").innerHTML= `${value2}`
    }
     if (value2 === max2){
         value2=min2 
                  
      }
     else {
     console.log(value2)
     }
     document.getElementById("part-two").innerHTML= `${value2}`
     document.getElementById("target").innerHTML=`+${value1}${value2}${value3}${value4}`
     })
 






document.getElementById("part-three").addEventListener("click",function(){
 let min3 = Number(document.getElementById("part-three").getAttribute("data-min"))
 let max3 = Number(document.getElementById("part-three").getAttribute("data-max"))
console.log(value3)
value3++
if (value3 <10){
    value3 = `0${value3}`
    
}
else{
    document.getElementById("part-three").innerHTML= `${value3}`
    
}
 if (value3 === max3){
     value3=min3
              
  }
 else {
 console.log(value3)
 
 }
 document.getElementById("part-three").innerHTML= `${value3}`
 document.getElementById("target").innerHTML=`+${value1}${value2}${value3}${value4}`
 })


document.getElementById("part-four").addEventListener("click",function(){
    let min4 = Number(document.getElementById("part-four").getAttribute("data-min"))
    let max4 = Number(document.getElementById("part-four").getAttribute("data-max"))
value4++
if (value4 <10){
    value4 = `0${value4}`
    document.getElementById("target").innerHTML=`+${value1}${value2}${value3}0${value4}`
    
}
else{
    document.getElementById("part-four").innerHTML= `${value4}`
    
}
 if (value4 === max4){
     value4=min4
              
  }
 else {
 console.log(value4)
 
 }
 document.getElementById("part-four").innerHTML= `${value4}`
 document.getElementById("target").innerHTML=`+${value1}${value2}${value3}${value4}`
 })











