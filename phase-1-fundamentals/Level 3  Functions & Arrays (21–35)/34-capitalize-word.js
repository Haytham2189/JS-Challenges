//Capitalize Words  Write a function that capitalizes the first letter of every word in a sentence. capitalize("hello world") → "Hello World"//
function capitalize(text) {

  let words = text.split(" ")
  let result = []

  for (let i = 0; i < words.length; i++) {

    let firstLetter = words[i][0].toUpperCase()
    let rest = words[i].slice(1)

    result.push(firstLetter + rest)
  }

  return result.join(" ")
}

console.log(capitalize("hello world"))