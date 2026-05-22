const input = document.getElementById("input")
const addBtn = document.getElementById("addBtn")
const list = document.getElementById("list")

addBtn.addEventListener("click", function () {

  const li = document.createElement("li")

  li.textContent = input.value + " "

  const doneBtn = document.createElement("button")

  doneBtn.textContent = "Done"

  doneBtn.addEventListener("click", function () {

    li.classList.toggle("done")

  })

  const deleteBtn = document.createElement("button")

  deleteBtn.textContent = "Delete"

  deleteBtn.addEventListener("click", function () {

    li.remove()

  })

  li.appendChild(doneBtn)

  li.appendChild(deleteBtn)

  list.appendChild(li)

  input.value = ""

})