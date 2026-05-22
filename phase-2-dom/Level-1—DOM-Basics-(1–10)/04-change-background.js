//Change Background — Add a button that changes the page background color to blue when clicked. document.body.style.backgroundColor → "blue"//
const button = document.getElementById("btn")

button.addEventListener("click", function () {

  document.body.style.backgroundColor = "blue"

})