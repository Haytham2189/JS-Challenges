const input = document.getElementById("input")
const addBtn = document.getElementById("addBtn")
const list = document.getElementById("list")

addBtn.addEventListener("click", function () {

  const li = document.createElement("li")

  li.textContent = input.value + " "

  const deleteBtn = document.createElement("button")

  deleteBtn.textContent = "X"

  deleteBtn.addEventListener("click", function () {

    li.remove()

  })

  li.appendChild(deleteBtn)

  list.appendChild(li)

})