
// Select the button and paragraph
let button = document.getElementById("factBtn");
let fact = document.getElementById("fact");

// Add event listener to button
button.addEventListener("click", function() {

  // BONUS: Show loading message
  fact.innerText = "Loading cat fact...";
  button.disabled = true;

  // Make Axios API request
  axios.get("https://catfact.ninja/fact")

  .then(function(response) {
    // Display the cat fact
    fact.innerText = response.data.fact;
  })

  .catch(function(error) {
    // Display error message
    fact.innerText = "Error loading cat fact!";
    console.log(error);
  })

  .finally(function() {
    button.disabled = false;
  });

});
