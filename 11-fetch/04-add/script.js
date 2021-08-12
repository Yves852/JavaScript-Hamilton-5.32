/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", async () => {
    let inputs = Array.from(document.querySelectorAll("input"));

    let values = inputs.map(({ value }) => {
      return value.trim();
    });

    if (values.some((value) => value === "")) {
      alert("Please fill in all fields");
      return;
    }

    let [name, alterEgo, abilities] = values;
    let id = null;

    abilities = abilities.split(" ");

    console.log(
      `Our new hero is ${name} aka. ${alterEgo} - with the powers of ${abilities.join(
        ", "
      )}`
    );

    const postData = await fetch("http://localhost:3000/heroes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, alterEgo, abilities }),
    });
    console.log(postData);
    console.log(postData.json());
  });
})();
