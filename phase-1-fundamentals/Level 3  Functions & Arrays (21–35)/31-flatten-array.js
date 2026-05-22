//Flatten Array  Write a function that takes a nested array and returns a flat one. flatten([1, [2, 3], [4, 5]]) → [1, 2, 3, 4, 5]//
function flatten(array) {

  let flatArray = []

  for (let i = 0; i < array.length; i++) {

    if (Array.isArray(array[i])) {

      for (let j = 0; j < array[i].length; j++) {
        flatArray.push(array[i][j])
      }

    } else {
      flatArray.push(array[i])
    }

  }

  return flatArray
}

console.log(flatten([1, [2, 3], [4, 5]]))