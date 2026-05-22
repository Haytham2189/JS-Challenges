const input = document.getElementById("input")
const text = document.getElementById("text")

input.addEventListener("input", function () {

  text.textContent = input.value

})