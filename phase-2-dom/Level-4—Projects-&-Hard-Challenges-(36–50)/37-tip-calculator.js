const billInput = document.getElementById("bill")

const tipInput = document.getElementById("tip")

const button = document.getElementById("btn")

const tipAmount = document.getElementById("tipAmount")

const total = document.getElementById("total")

button.addEventListener("click", function () {

  const bill = Number(billInput.value)

  const tipPercent = Number(tipInput.value)

  const tip = bill * (tipPercent / 100)

  const finalTotal = bill + tip

  tipAmount.textContent = "Tip: " + tip

  total.textContent = "Total: " + finalTotal

})