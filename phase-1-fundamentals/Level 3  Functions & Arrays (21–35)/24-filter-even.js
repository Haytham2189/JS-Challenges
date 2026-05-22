//Filter Even Numbers  Write a function that returns only even numbers from an array. filterEven([1, 2, 3, 4, 5, 6]) → [2, 4, 6]//
function filterEven(numbers) {

  let evenNumbers = []

  for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i])
    }

  }

  return evenNumbers
}

console.log(filterEven([1, 2, 3, 4, 5, 6]))