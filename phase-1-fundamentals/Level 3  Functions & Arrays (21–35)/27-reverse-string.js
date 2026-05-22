//Reverse a String  Write a function that reverses a string without using .reverse(). reverseString("hello") → "olleh"//
function reverseString(text) {

  let reversed = ""

  for (let i = text.length - 1; i >= 0; i--) {
    reversed = reversed + text[i]
  }

  return reversed
}

console.log(reverseString("hello"))