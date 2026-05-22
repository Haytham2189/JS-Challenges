//Remove Duplicates  Write a function that returns an array with no duplicates. removeDuplicates([1, 2, 2, 3, 3]) → [1, 2, 3]//
function removeDuplicates(numbers) {

  let uniqueNumbers = []

  for (let i = 0; i < numbers.length; i++) {

    if (!uniqueNumbers.includes(numbers[i])) {
      uniqueNumbers.push(numbers[i])
    }

  }

  return uniqueNumbers
}

console.log(removeDuplicates([1, 2, 2, 3, 3]))