const textarea = document.getElementById("textarea")

const count = document.getElementById("count")

textarea.addEventListener("input", function () {

  const text = textarea.value.trim()

  if (text === "") {

    count.textContent = "Word count: 0"

    return

  }

  const words = text.split(" ")

  count.textContent = "Word count: " + words.length

})