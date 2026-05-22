//Fibonacci  Write a function that returns the first N numbers of the Fibonacci sequence. fibonacci(6) → [0, 1, 1, 2, 3, 5]//
function fibonacci(n) {

  let sequence = [0, 1]

  for (let i = 2; i < n; i++) {

    let nextNumber = sequence[i - 1] + sequence[i - 2]

    sequence.push(nextNumber)
  }

  return sequence
}

console.log(fibonacci(10))