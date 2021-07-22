/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let result = []
    for (i=0; i<=100;i++){
        switch (true){
            case i % 3 == 0 && i % 5 == 0 :
            result[i] = "fizzbuzz"
            break;
            case i % 3 == 0 :
            result[i] = "fizz"
            break;
            case i % 5 == 0:
            result[i] = "buzz"
            break;
            default :
            result[i] = i
        }
    }
    console.log(result)
})();
//for (i=0;i<=100;i++){
  //  if (i % 3 == 0 && i % 5 == 0){
    //result[i] = "fizzbuzz"
 //   } else if (i % 5 == 0){
  //  result[i] = "buzz"
 //   } else if (i % 3 == 0){
 //       result[i] = "fizz"
 //   } else {
 //   result[i] = i
 //   }
//}
