/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const temp = document.getElementById("tpl-hero");
  const target = document.getElementById("target");
  // your code here
  document.getElementById("run").addEventListener("click", async () => {
    try {
      let heroId = document.getElementById("hero-id").value;

      if (isNaN(heroId) || !heroId) {
        alert("Please enter a valid hero id.");
        return;
      }

      const response = await fetch("http://localhost:3000/heroes");
      const heroes = await response.json();

      let hero = heroes.find((hero) => hero.id == heroId);
      if (!hero) {
        alert("This id does not exist.");
        return;
      }

      let tempClone = temp.content.cloneNode(true);

      tempClone.querySelector(".name").innerText = hero.name;
      tempClone.querySelector(".alter-ego").innerText = hero.alterEgo;
      tempClone.querySelector(".powers").innerText = hero.abilities.join(", ");
      target.firstElementChild
        ? target.replaceChild(tempClone, target.firstElementChild)
        : target.appendChild(tempClone);
    } catch (error) {
      console.error(error);
    }
  });
})();
