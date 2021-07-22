/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const target = document.getElementById("target");
    const numRows = 10;
    const numColumn = 10;
    
    let table = document.createElement("table");
    target.appendChild(table);

    for(let i=0;i<numRows;i++){
        let row = document.createElement("tr")
        table.appendChild(row)

        for(let y=0;y<numColumn;y++){
            let column = document.createElement("td")
            row.appendChild(column)
            column.innerHTML = (i+1)*(y+1);

        }

    }

})();
