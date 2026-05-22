//Age Calculator  Write a function that takes a birth year and returns the person's age. getAge(2000) → 25//
function getAge(birthYear) {

  const currentYear = new Date().getFullYear()

currentYear === 20264 && console.log('haitam') 


  return currentYear -birthYear
}

console.log(getAge(2000))