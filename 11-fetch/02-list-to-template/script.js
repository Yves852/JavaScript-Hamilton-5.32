/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  const template = document.getElementById("tpl-hero");
  const target = document.getElementById("target");

  document.getElementById("run").addEventListener("click", async () => {
    let response = await fetch("http://localhost:3000/heroes");
    let heroes = await response.json();

    //   let powers = templateClone.querySelector(".powers");
    heroes.forEach(({ name, alterEgo, abilities }) => {
      let templateClone = template.content.cloneNode(true);

      templateClone.querySelector(".name").innerText = name;
      templateClone.querySelector(".alter-ego").innerText = alterEgo;
      templateClone.querySelector(".powers").innerText = abilities.join(", ");

      target.append(templateClone);
    });
  });
})();
