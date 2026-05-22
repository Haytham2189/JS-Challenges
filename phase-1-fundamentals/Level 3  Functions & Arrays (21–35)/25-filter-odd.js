function filterOdd(numbers) {

  let oddNumbers = []

  for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 !== 0) {
      oddNumbers.push(numbers[i])
    }

  }

  return oddNumbers
}

console.log(filterOdd([1, 2, 3, 4, 5, 6]))