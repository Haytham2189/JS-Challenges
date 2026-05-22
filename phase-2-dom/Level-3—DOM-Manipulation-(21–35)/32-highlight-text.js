const text = document.getElementById("text")

const input = document.getElementById("input")

const button = document.getElementById("btn")

button.addEventListener("click", function () {

  const search = input.value

  const originalText = text.textContent

  const highlightedText = originalText.replaceAll(

    search,

    '<span class="highlight">' + search + '</span>'

  )

  text.innerHTML = highlightedText

})