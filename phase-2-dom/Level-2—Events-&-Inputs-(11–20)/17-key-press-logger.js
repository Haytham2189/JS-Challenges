const input = document.getElementById("input")
const message = document.getElementById("message")

input.addEventListener("keydown", function (event) {

  message.textContent = "You pressed: " + event.key

})