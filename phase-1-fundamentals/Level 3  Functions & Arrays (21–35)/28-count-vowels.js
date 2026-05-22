function countVowels(text) {

  let count = 0
  let vowels = "aeiou"

  for (let i = 0; i < text.length; i++) {

    if (vowels.includes(text[i])) {
      count++
    }

  }

  return count
}

console.log(countVowels("javascript"))