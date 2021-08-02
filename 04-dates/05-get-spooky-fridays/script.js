/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {
    document.getElementById("run").addEventListener("click", function() {
      var year =  document.getElementById("year").value;
      console.log(year);
      for (var month=0; month<12;month++)
      {
          var date= new Date(year,month,13); //get the 13th of the month//
          if(date.getDay()==5) //get fridays//
          {
              console.log(date);
              console.log (date.toLocaleString('eng', {month: 'long'})); //traduire le chiffre du mois en nom
              document.write(date.toLocaleString('eng', {month: 'long'})+"<br>"); //afficher les uns en dessous des autres
          }
      }

     
    });
    

})();
