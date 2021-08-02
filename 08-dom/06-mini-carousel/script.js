

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    var counter = 0; 

    document.querySelector("button").addEventListener("click", function() {

        document.querySelector("img").src= gallery[counter];
        counter++;
        if (counter >= gallery.length) {
            counter=0;
        }

          });
})();
