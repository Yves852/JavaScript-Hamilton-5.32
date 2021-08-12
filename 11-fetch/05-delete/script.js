/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", async () => {
    try {
      let id = document.getElementById("hero-id").value;
      console.log(id);
      if (!id || isNaN(id)) {
        throw new Error("Please give a valid id.");
      }

      let response = await fetch(`http://localhost:3000/heroes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("No hero with that ID");
      }
    } catch (err) {
      alert(err);
    }
  });
})();
