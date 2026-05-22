const tabs = document.querySelectorAll(".tab")

const contents = document.querySelectorAll(".content")

for (let i = 0; i < tabs.length; i++) {

  tabs[i].addEventListener("click", function () {

    for (let j = 0; j < tabs.length; j++) {

      tabs[j].classList.remove("active")

      contents[j].classList.remove("active")

    }

    tabs[i].classList.add("active")

    contents[i].classList.add("active")

  })

}