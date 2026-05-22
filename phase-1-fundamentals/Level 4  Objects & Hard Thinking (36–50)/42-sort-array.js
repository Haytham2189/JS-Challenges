//Sort Array  Write a function that sorts an array of numbers from smallest to biggest without using .sort(). sortArray([3, 1, 4, 2]) → [1, 2, 3, 4]//
function sortArray(numbers) {

  for (let i = 0; i < numbers.length; i++) {

    for (let j = i + 1; j < numbers.length; j++) {

      if (numbers[i] > numbers[j]) {

        let temp = numbers[i]
        numbers[i] = numbers[j]
        numbers[j] = temp

      }

    }

  }

  return numbers
}

console.log(sortArray([3, 1, 4, 2]))