const titles = document.querySelectorAll(".title")

const contents = document.querySelectorAll(".content")

for (let i = 0; i < titles.length; i++) {

  titles[i].addEventListener("click", function () {

    for (let j = 0; j < contents.length; j++) {

      contents[j].classList.remove("active")

    }

    contents[i].classList.add("active")

  })

}