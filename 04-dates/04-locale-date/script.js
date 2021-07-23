/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let monthLetter;
    let day = d.getDay();
    let dayLetter;
    let hour = d.getHours();
    let minute = d.getMinutes();
    switch (month){
        case 0 :
            monthLetter = 'january'
            switch (day){
                case 0 :
                    dayLetter = 'sunday';
                    break;
                case 1 :
                    dayLetter = 'monday';
                    break;
                case 2 :
                    dayLetter = 'tuesday';
                    break;
                case 3 :
                    dayLetter = 'wednesday';
                    break;
                case 4 :
                    dayLetter = 'thursday';
                    break;
                case 5 :
                    dayLetter = 'friday';
                    break;
                case 6 :
                    dayLetter = 'saturday';
                    break;
            } break;
        case 1 :
            monthLetter = 'february'
            switch (day){
                case 0 :
                    dayLetter = 'sunday';
                    break;
                case 1 :
                    dayLetter = 'monday';
                    break;
                case 2 :
                    dayLetter = 'tuesday';
                    break;
                case 3 :
                    dayLetter = 'wednesday';
                    break;
                case 4 :
                    dayLetter = 'thursday';
                    break;
                case 5 :
                    dayLetter = 'friday';
                    break;
                case 6 :
                    dayLetter = 'saturday';
                    break;
            } break;
        case 2 :
        monthLetter = 'march'
        switch (day){
            case 0 :
                dayLetter = 'sunday';
                break;
            case 1 :
                dayLetter = 'monday';
                break;
            case 2 :
                dayLetter = 'tuesday';
                break;
            case 3 :
                dayLetter = 'wednesday';
                break;
            case 4 :
                dayLetter = 'thursday';
                break;
            case 5 :
                dayLetter = 'friday';
                break;
            case 6 :
                dayLetter = 'saturday';
                break;
            } break;
        case 3 :
            monthLetter = 'april'
            switch (day){
                case 0 :
                    dayLetter = 'sunday';
                    break;
                case 1 :
                    dayLetter = 'monday';
                    break;
                case 2 :
                    dayLetter = 'tuesday';
                    break;
                case 3 :
                    dayLetter = 'wednesday';
                    break;
                case 4 :
                    dayLetter = 'thursday';
                    break;
                case 5 :
                    dayLetter = 'friday';
                    break;
                case 6 :
                    dayLetter = 'saturday';
                    break;
            } break;
        case 4 :
            monthLetter = 'may'
            switch (day){
                case 0 :
                    dayLetter = 'sunday';
                    break;
                case 1 :
                    dayLetter = 'monday';
                    break;
                case 2 :
                    dayLetter = 'tuesday';
                    break;
                case 3 :
                    dayLetter = 'wednesday';
                    break;
                case 4 :
                    dayLetter = 'thursday';
                    break;
                case 5 :
                    dayLetter = 'friday';
                    break;
                case 6 :
                    dayLetter = 'saturday';
                    break;
            } break;
        case 5 :
            monthLetter = 'june'
            switch (day){
                case 0 :
                    dayLetter = 'sunday';
                    break;
                case 1 :
                    dayLetter = 'monday';
                    break;
                case 2 :
                    dayLetter = 'tuesday';
                    break;
                case 3 :
                    dayLetter = 'wednesday';
                    break;
                case 4 :
                    dayLetter = 'thursday';
                    break;
                case 5 :
                    dayLetter = 'friday';
                    break;
                case 6 :
                    dayLetter = 'saturday';
                    break;
            } break;
        case 6 :
            monthLetter = 'july'
            switch (day){
                case 0 :
                    dayLetter = 'sunday';
                    break;
                case 1 :
                    dayLetter = 'monday';
                    break;
                case 2 :
                    dayLetter = 'tuesday';
                    break;
                case 3 :
                    dayLetter = 'wednesday';
                    break;
                case 4 :
                    dayLetter = 'thursday';
                    break;
                case 5 :
                    dayLetter = 'friday';
                    break;
                case 6 :
                    dayLetter = 'saturday';
                    break;
            } break;
        case 7 :
        monthLetter = 'august'
        switch (day){
            case 0 :
                dayLetter = 'sunday';
                break;
            case 1 :
                dayLetter = 'monday';
                break;
            case 2 :
                dayLetter = 'tuesday';
                break;
            case 3 :
                dayLetter = 'wednesday';
                break;
            case 4 :
                dayLetter = 'thursday';
                break;
            case 5 :
                dayLetter = 'friday';
                break;
            case 6 :
                dayLetter = 'saturday';
                break;
            } break;
        case 8 :
        monthLetter = 'september'
        switch (day){
            case 0 :
                dayLetter = 'sunday';
                break;
            case 1 :
                dayLetter = 'monday';
                break;
            case 2 :
                dayLetter = 'tuesday';
                break;
            case 3 :
                dayLetter = 'wednesday';
                break;
            case 4 :
                dayLetter = 'thursday';
                break;
            case 5 :
                dayLetter = 'friday';
                break;
            case 6 :
                dayLetter = 'saturday';
                break;
            } break;
        case 9 :
        monthLetter = 'october'
        switch (day){
            case 0 :
                dayLetter = 'sunday';
                break;
            case 1 :
                dayLetter = 'monday';
                break;
            case 2 :
                dayLetter = 'tuesday';
                break;
            case 3 :
                dayLetter = 'wednesday';
                break;
            case 4 :
                dayLetter = 'thursday';
                break;
            case 5 :
                dayLetter = 'friday';
                break;
            case 6 :
                dayLetter = 'saturday';
                break;
            } break;
        case 10 :
        monthLetter = 'november'
        switch (day){
            case 0 :
                dayLetter = 'sunday';
                break;
            case 1 :
                dayLetter = 'monday';
                break;
            case 2 :
                dayLetter = 'tuesday';
                break;
            case 3 :
                dayLetter = 'wednesday';
                break;
            case 4 :
                dayLetter = 'thursday';
                break;
            case 5 :
                dayLetter = 'friday';
                break;
            case 6 :
                dayLetter = 'saturday';
                break;
            } break;
        case 11 :
        monthLetter = 'december'
        switch (day){
            case 0 :
                dayLetter = 'sunday';
                break;
            case 1 :
                dayLetter = 'monday';
                break;
            case 2 :
                dayLetter = 'tuesday';
                break;
            case 3 :
                dayLetter = 'wednesday';
                break;
            case 4 :
                dayLetter = 'thursday';
                break;
            case 5 :
                dayLetter = 'friday';
                break;
            case 6 :
                dayLetter = 'saturday';
                break;
            } break;
        default :
            monthLetter = 'weird stuff happening';
            dayLetter = 'I repeat, ERROR ERROR ERROR'
            break;
    }

    document.write(`${dayLetter} ${day} ${monthLetter} ${year} ${hour}h${minute}`)
})();