const weightInput = document.getElementById("weight")

const heightInput = document.getElementById("height")

const button = document.getElementById("btn")

const result = document.getElementById("result")

button.addEventListener("click", function () {

  const weight = Number(weightInput.value)

  const height = Number(heightInput.value)

  const bmi = weight / (height * height)

  let category = ""

  if (bmi < 18.5) {

    category = "Underweight ⚠️"

  } else if (bmi >= 18.5 && bmi < 25) {

    category = "Normal ✅"

  } else if (bmi >= 25 && bmi < 30) {

    category = "Overweight ⚠️"

  } else {

    category = "Obese ❌"

  }

  result.textContent =

    "BMI: " + bmi.toFixed(1) + " → " + category

})