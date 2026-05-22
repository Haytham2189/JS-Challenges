//Sum of Array  Write a function that takes an array of numbers and returns the total sum. sumArray([1, 2, 3, 4]) → 10//
const numbers=[1,2,3,4]
function sumArray(numbers) {

  let sum = 0

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
  }

  return sum
}

console.log(sumArray([1, 2, 3, 4]))