/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello(name) {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
        static greeting ='hello'
    }

    class Cat extends Animal{
        constructor(name){
            super()
            this.name = name}
        }
        
    class Dog extends Animal{
        constructor(name){
            super()
            this.name = name}
        }


document.getElementById('run').addEventListener('click',function(){
    
    let dog = new Dog ("Dogo");
    let cat = new Cat ("Dark Lord Slayer Of  A Thousand Suns");
    console.log(dog.sayHello());
    console.log(cat.sayHello());


})
})();
