//Count Words Frequency  Write a function that takes a sentence and returns how many times each word appears. wordFrequency("hi hi hello") → { hi: 2, hello: 1 }//
function wordFrequency(sentence) {

  let words = sentence.split(" ")
  let frequency = {}

  for (let i = 0; i < words.length; i++) {

    if (frequency[words[i]]) {
      frequency[words[i]]++
    } else {
      frequency[words[i]] = 1
    }

  }

  return frequency
}

console.log(wordFrequency("hi hi hello"))