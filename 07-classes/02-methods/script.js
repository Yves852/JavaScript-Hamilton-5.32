

(function() {
    document.getElementById("run").addEventListener("click", function() {
 
        class Human {
            constructor(firstname, name) {
                this.firstname = firstname;
                this.name = name;                
                }
                
            greetings() {
                    return'Hello' + " "+ this.firstname + " " + this.name + "!" ;
                };   
            }

            const deadbody = new Human('John', 'Doe');
            var Hi = deadbody.greetings();
            console.log(Hi);

        

});

})();
