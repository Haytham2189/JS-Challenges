//Word Counter  Write a function that takes a sentence and returns how many words are in it. wordCount("Hello my name is John") → 5//
function wordCount(sentence) {

  let words = sentence.split(" ")

  return words.length
}

console.log(wordCount("Hello my name is John"))