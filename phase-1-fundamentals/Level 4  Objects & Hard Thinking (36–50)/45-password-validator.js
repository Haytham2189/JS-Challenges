//Password Validator  Write a function that checks if a password is valid. Rules: min 8 chars, has a number, has a capital letter. isValidPassword("Hello123") → true//
function isValidPassword(password) {

  let hasNumber = false
  let hasCapital = false

  if (password.length < 8) {
    return false
  }

  for (let i = 0; i < password.length; i++) {

    if (password[i] >= "0" && password[i] <= "9") {
      hasNumber = true
    }

    if (password[i] >= "A" && password[i] <= "Z") {
      hasCapital = true
    }

  }

  return hasNumber && hasCapital
}

console.log(isValidPassword("Hello123"))