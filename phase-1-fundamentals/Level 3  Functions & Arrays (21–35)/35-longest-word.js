//Longest Word  Write a function that takes a sentence and returns the longest word. longestWord("I love JavaScript") → "JavaScript"//
function longestWord(sentence) {

  let words = sentence.split(" ")
  let longest = words[0]

  for (let i = 0; i < words.length; i++) {

    if (words[i].length > longest.length) {
      longest = words[i]
    }

  }

  return longest
}

console.log(longestWord("I love JavaScript"))