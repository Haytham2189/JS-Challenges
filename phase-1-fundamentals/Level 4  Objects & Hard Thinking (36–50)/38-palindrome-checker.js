//Palindrome Checker  Write a function that checks if a word is a palindrome. isPalindrome("racecar") → true//
function isPalindrome(word) {

  let reversed = ""

  for (let i = word.length - 1; i >= 0; i--) {
    reversed = reversed + word[i]
  }

  return reversed === word
}

console.log(isPalindrome("racecar"))