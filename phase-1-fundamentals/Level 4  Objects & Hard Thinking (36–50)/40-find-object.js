//Find Object by Name  Write a function that takes an array of objects and a name, and returns the matching object. findByName(users, "John") → { name: "John", age: 25 }//
const users = [
  {
    name: "John",
    age: 25
  },
  {
    name: "Sarah",
    age: 30
  },
  {
    name: "Mike",
    age: 22
  }
]

function findByName(users, name) {

  for (let i = 0; i < users.length; i++) {

    if (users[i].name === name) {
      return users[i]
    }

  }

  return null
}

console.log(findByName(users, "John"))