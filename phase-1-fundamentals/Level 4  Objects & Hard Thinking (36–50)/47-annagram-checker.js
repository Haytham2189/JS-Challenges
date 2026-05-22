//Anagram Checker  Write a function that checks if two words are anagrams of each other. isAnagram("listen", "silent") → true//
function isAnagram(word1, word2) {

  if (word1.length !== word2.length) {
    return false
  }

  let sorted1 = word1.split("").sort().join("")
  let sorted2 = word2.split("").sort().join("")

  return sorted1 === sorted2
}

console.log(isAnagram("listen", "silent"))