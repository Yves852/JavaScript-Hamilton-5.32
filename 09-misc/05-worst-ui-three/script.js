let p1 = document.getElementById('part-one');
let p2 = document.getElementById('part-two');
let p3 = document.getElementById('part-three');
let p4 = document.getElementById('part-four');
let b1 = document.getElementById ('fix-part-one');
let b2 = document.getElementById ('fix-part-two');
let b3 = document.getElementById ('fix-part-three');
let b4 = document.getElementById ('fix-part-four');
b1.innerHTML = "Bip"; // my fancy part
b2.innerHTML = "Bip";
b3.innerHTML = "Bip";
b4.innerHTML = "Bip";

// array with 4 initial values/ parts of the phone number and their booleans (booleans =true/false)
let DringDring=[{allo:'460',wazaa:true},{allo:'00',wazaa:true},{allo:'00',wazaa:true},{allo:'00',wazaa:true}];


function animate(obj,index){
    //declare function to animate one of the objects = counters and place it on the phone number with the use of the index
    const step = () => {
        obj.value =parseInt(Math.random()*((parseInt(obj.dataset.max))-(parseInt(obj.dataset.min)))+(parseInt(obj.dataset.min))); 
        // pick a random number between the min and max values
        if(DringDring[index].wazaa){ // si wazaa de l'index 'untel' (0,1,2 ou 3) = true =>
            window.requestAnimationFrame(step); //on relance la boucle (loop)
            }
        else { // sinon on modifie la valeur de allo de ce meme index 'untel'
            DringDring[index].allo =obj.value; // on lui donne la valeur de la case aléatoire à ce moment précis
            if(DringDring[index].allo<10){ //si elle est plus petite que 10 ...
            DringDring[index].allo='0'+DringDring[index].allo;  // ...=> on lui ajoute un zéro
            }
        ajustNum(); // on reforme le numéro de téléphone
        }
    };
    if(DringDring[index].wazaa){
        window.requestAnimationFrame(step); //si wazaa = true => initiation de la loop
        }
}

function pickup(obj,index){
    DringDring[index].wazaa= !DringDring[index].wazaa; // ça, ça retourne '=false' parce que ça va inverser notre true de base (quand on click du coup)
    if (DringDring[index].wazaa) { // si =true =>...
        animate (obj,index); //... on relance le compteur (quand on click du coup)
    }
}

function ajustNum(){ // on display le numéro qu'on a reformé en entier avec tous les morceaux de numéro dans la target
document.getElementById('target').innerText ="0"+DringDring[0].allo+DringDring[1].allo+DringDring[2].allo+DringDring[3].allo;
}

b1.addEventListener("click", function() {
  pickup(p1,0); // du coup pickup fait son affaire quand on click sur le button
  b1.innerHTML = "click again"; // so they know...
});

b2.addEventListener("click", function() {
  pickup(p2,1); // idem
  b2.innerHTML = "click again";
});

b3.addEventListener("click", function() {
  pickup(p3,2);  //pour chaque
  b3.innerHTML = "click again";
});

b4.addEventListener("click", function() {
  pickup(p4,3); //bouton
  b4.innerHTML = "click again";
});

animate (p1,0); // ici la magie commence...
animate (p2,1); // (il faut bien lui dire de démarrer son défilement quelque part)
animate (p3,2); // (pour qu'il soit en train de défiler dès que la page est chargée)
animate (p4,3); // (et pour chaque morceau de numéro)

