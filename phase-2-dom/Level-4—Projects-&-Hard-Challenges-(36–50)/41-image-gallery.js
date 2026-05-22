const bigImage = document.getElementById("bigImage")

const thumbnails = document.querySelectorAll(".thumb")

for (let i = 0; i < thumbnails.length; i++) {

  thumbnails[i].addEventListener("click", function () {

    bigImage.src = thumbnails[i].src

  })

}