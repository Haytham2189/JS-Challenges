const game = document.getElementById("game")

const emojis = [

  "🍎", "🍎",

  "🍌", "🍌",

  "🍇", "🍇",

  "🍒", "🍒",

  "🍉", "🍉",

  "🍍", "🍍",

  "🥝", "🥝",

  "🍑", "🍑"

]

emojis.sort(function () {

  return Math.random() - 0.5

})

let firstCard = null

let secondCard = null

let lockBoard = false

let matches = 0

for (let i = 0; i < emojis.length; i++) {

  const card = document.createElement("div")

  card.classList.add("card")

  card.textContent = emojis[i]

  game.appendChild(card)

  card.addEventListener("click", function () {

    if (

      lockBoard ||

      card === firstCard ||

      card.classList.contains("matched")

    ) {

      return

    }

    card.classList.add("flipped")

    if (firstCard === null) {

      firstCard = card

    } else {

      secondCard = card

      lockBoard = true

      if (firstCard.textContent === secondCard.textContent) {

        firstCard.classList.add("matched")

        secondCard.classList.add("matched")

        matches++

        resetTurn()

        if (matches === 8) {

          setTimeout(function () {

            alert("You Win 🎉")

          }, 300)

        }

      } else {

        setTimeout(function () {

          firstCard.classList.remove("flipped")

          secondCard.classList.remove("flipped")

          resetTurn()

        }, 1000)

      }

    }

  })

}

function resetTurn() {

  firstCard = null

  secondCard = null

  lockBoard = false

}