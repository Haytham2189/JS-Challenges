const password = document.getElementById("password")

const strength = document.getElementById("strength")

password.addEventListener("input", function () {

  const value = password.value

  let hasNumber = false

  let hasCapital = false

  for (let i = 0; i < value.length; i++) {

    if (value[i] >= "0" && value[i] <= "9") {
      hasNumber = true
    }

    if (value[i] >= "A" && value[i] <= "Z") {
      hasCapital = true
    }

  }

  strength.className = ""

  if (value.length < 6) {

    strength.textContent = "Weak ❌"

    strength.classList.add("weak")

  } else if (value.length >= 6 && (hasNumber || hasCapital)) {

    strength.textContent = "Medium ⚠️"

    strength.classList.add("medium")

  }

  if (value.length >= 8 && hasNumber && hasCapital) {

    strength.textContent = "Strong ✅"

    strength.classList.add("strong")

  }

})