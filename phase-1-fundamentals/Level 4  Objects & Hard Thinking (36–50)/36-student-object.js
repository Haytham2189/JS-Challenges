//Student Object  Create a student object with name, age, grades (array). Write a function that prints the average grade. averageGrade(student) → 85//
const student = {
  name: "Haytham",
  age: 28,
  grades: [80, 90, 70]
}

function averageGrade(student) {

  let sum = 0

  for (let i = 0; i < student.grades.length; i++) {
    sum = sum + student.grades[i]
  }

  return sum / student.grades.length
}

console.log(averageGrade(student))