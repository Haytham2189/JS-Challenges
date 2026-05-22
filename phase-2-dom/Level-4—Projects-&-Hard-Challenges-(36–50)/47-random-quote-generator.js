const quote = document.getElementById("quote")

const button = document.getElementById("btn")

const quotes = [

  "Believe in yourself.",

  "Never stop learning.",

  "Dream big and work hard.",

  "Stay positive.",

  "Success takes time.",

  "Small steps every day.",

  "Consistency beats motivation.",

  "Practice makes progress.",

  "Failure is part of success.",

  "Discipline creates freedom."

]

button.addEventListener("click", function () {

  const randomIndex = Math.floor(Math.random() * quotes.length)

  quote.textContent = quotes[randomIndex]

})