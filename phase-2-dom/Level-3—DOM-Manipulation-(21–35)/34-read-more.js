const button = document.getElementById("btn")

const moreText = document.getElementById("more")

button.addEventListener("click", function () {

  if (moreText.classList.contains("hidden")) {

    moreText.classList.remove("hidden")

    button.textContent = "Read Less"

  } else {

    moreText.classList.add("hidden")

    button.textContent = "Read More"

  }

})