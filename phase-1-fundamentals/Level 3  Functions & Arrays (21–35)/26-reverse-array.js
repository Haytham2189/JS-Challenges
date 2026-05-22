//Reverse an Array  Write a function that reverses an array without using .reverse(). reverseArray([1, 2, 3]) → [3, 2, 1]//
function reverseArray(numbers) {

  let reversed = []

  for (let i = numbers.length - 1; i >= 0; i--) {
    reversed.push(numbers[i])
  }

  return reversed
}

console.log(reverseArray([1, 2, 3]))