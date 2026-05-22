const openBtn = document.getElementById("openBtn")

const closeBtn = document.getElementById("closeBtn")

const modal = document.getElementById("modal")

openBtn.addEventListener("click", function () {

  modal.style.display = "flex"

})

closeBtn.addEventListener("click", function () {

  modal.style.display = "none"

})