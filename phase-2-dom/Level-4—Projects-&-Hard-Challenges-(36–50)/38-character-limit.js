const textarea = document.getElementById("textarea")

const counter = document.getElementById("counter")

const maxCharacters = 150

textarea.addEventListener("input", function () {

  const remaining = maxCharacters - textarea.value.length

  counter.textContent = remaining + " characters remaining"

  if (remaining < 20) {

    counter.classList.add("warning")

  } else {

    counter.classList.remove("warning")

  }

})