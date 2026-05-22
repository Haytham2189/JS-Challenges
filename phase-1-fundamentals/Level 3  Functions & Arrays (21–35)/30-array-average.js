//Array Average  Write a function that takes an array of numbers and returns the average. average([10, 20, 30]) → 20//
function average(numbers) {

  let sum = 0

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
  }

  return sum / numbers.length
}

console.log(average([10, 20, 30]))