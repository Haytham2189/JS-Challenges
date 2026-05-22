const nameInput = document.getElementById("name")

const amountInput = document.getElementById("amount")

const addBtn = document.getElementById("addBtn")

const list = document.getElementById("list")

const total = document.getElementById("total")

let totalAmount = 0

addBtn.addEventListener("click", function () {

  const name = nameInput.value

  const amount = Number(amountInput.value)

  const li = document.createElement("li")

  li.textContent = name + " - $" + amount + " "

  const deleteBtn = document.createElement("button")

  deleteBtn.textContent = "Delete"

  deleteBtn.addEventListener("click", function () {

    totalAmount = totalAmount - amount

    total.textContent = "Total: $" + totalAmount

    li.remove()

  })

  li.appendChild(deleteBtn)

  list.appendChild(li)

  totalAmount = totalAmount + amount

  total.textContent = "Total: $" + totalAmount

  nameInput.value = ""

  amountInput.value = ""

})