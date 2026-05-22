const items = document.querySelectorAll("li")

const trash = document.getElementById("trash")

let draggedItem = null

for (let i = 0; i < items.length; i++) {

  items[i].addEventListener("dragstart", function () {

    draggedItem = items[i]

  })

}

trash.addEventListener("dragover", function (event) {

  event.preventDefault()

})

trash.addEventListener("drop", function () {

  draggedItem.remove()

})