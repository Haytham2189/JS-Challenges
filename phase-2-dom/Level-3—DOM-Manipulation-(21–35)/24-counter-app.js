const counter = document.getElementById("counter")

const minusBtn = document.getElementById("minusBtn")

const plusBtn = document.getElementById("plusBtn")

let count = 0

plusBtn.addEventListener("click", function () {

  count++

  counter.textContent = count

  if (count < 0) {
    counter.style.color = "red"
  } else {
    counter.style.color = "black"
  }

})

minusBtn.addEventListener("click", function () {

  count--

  counter.textContent = count

  if (count < 0) {
    counter.style.color = "red"
  } else {
    counter.style.color = "black"
  }

})