/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class person{
        constructor(firstname,lastname){
            this.firstname=firstname;
            this.lastname=lastname;
        }

        get fullname(){
            return `${this.firstname} ${this.lastname}`;
        }

        set fullname(name){
            let names=name.split(" "); /* we divide the full name with the white space as separator */
            this.firstname=names[0];        
            this.lastname=names[1];
        }
        
        /* solution found on https://stackoverflow.com/questions/812961/getters-setters-for-dummies */

    }

    document.getElementById("run").addEventListener("click",function(){
        const person_1=new person("Yassine","Layachi");
        console.log(person_1.fullname);
        console.log(person_1.firstname);
        console.log(person_1.lastname);

        person_1.fullname="Bill Gates";
        console.log(person_1.fullname);
        console.log(person_1.firstname);
        console.log(person_1.lastname);
       
    })
})();
