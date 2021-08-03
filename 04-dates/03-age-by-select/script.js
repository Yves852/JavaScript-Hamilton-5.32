/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
        let now = new Date();
        let bDay = document.getElementById("dob-day").value;
        let bMonth = document.getElementById("dob-month").value - 1; /* Start at 0 for Date month */
        let bYear = document.getElementById("dob-year").value;
        let birthday = new Date(Date.UTC(bYear, bMonth, bDay));
        let age = now.getFullYear() - birthday.getFullYear();
        let ageMonthDelta = now.getMonth() - birthday.getMonth();
        /* Check month and day difference to get age for the whole date and not by the year difference only */
        if (ageMonthDelta < 0 || (ageMonthDelta === 0 && now.getDate() < birthday.getDate())) age--;
        console.log(`${bDay} ${bMonth} ${bYear} : ${birthday}`);
        alert(`You are ${age} years old`);
    })

})();