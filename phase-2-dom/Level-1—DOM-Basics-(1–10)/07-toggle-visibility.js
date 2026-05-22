//Toggle Visibility — Add a button that toggles a div between hidden and visible. div.style.display → "none" / "block"//
const button = document.getElementById("btn")
const div = document.getElementById("box")

button.addEventListener("click", function () {

  if (div.style.display === "none") {

    div.style.display = "block"

  } else {

    div.style.display = "none"

  }

})