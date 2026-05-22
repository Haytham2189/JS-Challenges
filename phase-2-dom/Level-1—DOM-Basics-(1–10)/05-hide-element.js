//Hide Element — Add a button that hides a div when clicked. div.style.display → "none"//
const button = document.getElementById("btn")
const div = document.getElementById("box")

button.addEventListener("click", function () {

  div.style.display = "none"

})