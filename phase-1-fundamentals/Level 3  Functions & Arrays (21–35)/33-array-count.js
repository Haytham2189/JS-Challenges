//Array Contains  Write a function that checks if a value exists in an array without using .includes(). contains([1, 2, 3], 2) → true//
function contains(numbers, value) {

  for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] === value) {
      return true
    }

  }

  return false
}

console.log(contains([1, 2, 3], 2))