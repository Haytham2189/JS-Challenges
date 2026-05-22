const textarea = document.getElementById("textarea")
const counter = document.getElementById("counter")

textarea.addEventListener("input", function () {

  let length = textarea.value.length

  counter.textContent = "You typed " + length + " characters"

})