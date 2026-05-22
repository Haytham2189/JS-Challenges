const button = document.getElementById("btn")

const list = document.getElementById("list")

button.addEventListener("click", function () {

  const items = Array.from(list.children)

  items.sort(function (a, b) {

    return a.textContent.localeCompare(b.textContent)

  })

  list.innerHTML = ""

  for (let i = 0; i < items.length; i++) {

    list.appendChild(items[i])

  }

})