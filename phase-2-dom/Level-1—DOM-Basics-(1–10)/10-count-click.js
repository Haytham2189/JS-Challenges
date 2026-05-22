const button = document.getElementById("btn")
const counter = document.getElementById("counter")

let clicks = 0

button.addEventListener("click", function () {

  clicks++

  counter.textContent = "You clicked " + clicks + " times"

})