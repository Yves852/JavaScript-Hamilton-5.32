/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {    
    window.onload = function tableCreate() {
        let target = document.getElementById('target');
        let tbl = document.createElement('table');
        tbl.setAttribute('border', '1');
        let tbdy = document.createElement('tbody');
        for (let i = 0; i < 1; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < 10; j++) {
                if (i == 1 && j == 10) {
                    break
                } else {
                    let td = document.createElement('td');
                    td.appendChild(document.createTextNode(j+1));
                    tr.appendChild(td);
                }
            }
            tbdy.appendChild(tr);
        }
        tbl.appendChild(tbdy);
        target.appendChild(tbl)
    }
})();
