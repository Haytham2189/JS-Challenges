const button = document.getElementById("btn")

const progress = document.getElementById("progress")

let width = 0

button.addEventListener("click", function () {

  if (width < 100) {

    width = width + 10

    progress.style.width = width + "%"

  }

})