const button = document.getElementById("btn")
const p = document.getElementById("text")

let size = 16

button.addEventListener("click", function () {

  size = size + 2

  p.style.fontSize = size + "px"

})