//Shopping Cart  Create an array of objects with name and price. Write a function that returns the total price. totalPrice(cart) → 85//
const cart = [
  {
    name: "Laptop",
    price: 50
  },
  {
    name: "Mouse",
    price: 15
  },
  {
    name: "Keyboard",
    price: 20
  }
]

function totalPrice(cart) {

  let total = 0

  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price
  }

  return total
}

console.log(totalPrice(cart))