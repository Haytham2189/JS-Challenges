//Chunk Array  Write a function that splits an array into groups of N. chunk([1,2,3,4,5,6], 2) → [[1,2],[3,4],[5,6]]//
function chunk(array, size) {

  let result = []

  for (let i = 0; i < array.length; i += size) {

    let group = []

    for (let j = i; j < i + size && j < array.length; j++) {
      group.push(array[j])
    }

    result.push(group)
  }

  return result
}
