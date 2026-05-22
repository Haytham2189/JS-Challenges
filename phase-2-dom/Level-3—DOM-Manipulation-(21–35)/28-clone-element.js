const button = document.getElementById("btn")

const card = document.querySelector(".card")

button.addEventListener("click", function () {

  const clonedCard = card.cloneNode(true)

  document.body.appendChild(clonedCard)

})