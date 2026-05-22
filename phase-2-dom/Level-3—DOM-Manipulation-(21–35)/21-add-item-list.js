const input = document.getElementById("input")
const button = document.getElementById("btn")
const list = document.getElementById("list")

button.addEventListener("click", function () {

  const li = document.createElement("li")

  li.textContent = input.value

  list.appendChild(li)

})