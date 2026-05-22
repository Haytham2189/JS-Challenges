const input = document.getElementById("input")
const button = document.getElementById("btn")
const message = document.getElementById("message")

button.addEventListener("click", function () {

  navigator.clipboard.writeText(input.value)

  message.textContent = "Copied!"

})