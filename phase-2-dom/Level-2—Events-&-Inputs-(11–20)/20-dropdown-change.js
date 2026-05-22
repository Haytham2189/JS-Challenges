const select = document.getElementById("select")
const message = document.getElementById("message")

select.addEventListener("change", function () {

  message.textContent = select.value + " selected"

})