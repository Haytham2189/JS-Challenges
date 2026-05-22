//Count Occurrences Write a function that counts how many times a value appears in an array. countOccurrences([1, 2, 2, 3], 2) → 2//
function countOccurrences(numbers, value) {

  let count = 0

  for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] === value) {
      count++
    }

  }

  return count
}

console.log(countOccurrences([1, 2, 2, 3], 2))