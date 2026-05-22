const search = document.getElementById("search")

const listItems = document.querySelectorAll("li")

search.addEventListener("input", function () {

  const value = search.value.toLowerCase()

  for (let i = 0; i < listItems.length; i++) {

    const text = listItems[i].textContent.toLowerCase()

    if (text.includes(value)) {

      listItems[i].style.display = "list-item"

    } else {

      listItems[i].style.display = "none"

    }

  }

})