//Find the Smallest  Write a function that takes an array and returns the smallest number without using Math.min(). findSmallest([3, 1, 9, 2]) → 1//
function findSmallest(numbers){
     let smallest = numbers[0]

  for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] < smallest) {
      smallest = numbers[i]
    }

  }

  return smallest
}
console.log(findSmallest([3,1,9,2]) );
