//Sum 1 to N  Write a function that takes a number and returns the sum of all numbers from 1 to N. sumTo(5) → 15//
const n=5
function sumTo(n) {

  let sum = 0

  for (let i = 1; i <= n; i++) {
    sum = sum + i
  }

  return sum
}
console.log(sumTo(n))