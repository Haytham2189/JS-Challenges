//Find the Biggest  Write a function that takes an array and returns the largest number without using Math.max(). findBiggest([3, 1, 9, 2]) → 9//
function findBiggest(numbers) {

  let biggest = numbers[0]

  for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > biggest) {
      biggest = numbers[i]
    }

  }

  return biggest
}

console.log(findBiggest([3, 1, 9, 2]))