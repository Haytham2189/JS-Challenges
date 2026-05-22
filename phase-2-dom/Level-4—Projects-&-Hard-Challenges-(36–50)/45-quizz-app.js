const button = document.getElementById("submitBtn")

const result = document.getElementById("result")

button.addEventListener("click", function () {

  let score = 0

  const answers = {
    q1: "a",
    q2: "a",
    q3: "a",
    q4: "a",
    q5: "a"
  }

  for (let key in answers) {

    const selected = document.querySelector(

      'input[name="' + key + '"]:checked'

    )

    if (selected && selected.value === answers[key]) {

      score++

    }

  }

  result.textContent = "You scored " + score + "/5"

})