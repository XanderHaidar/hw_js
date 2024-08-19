`use strict`

function getAverageStudentGrade(grades) {
  let sumOfGrades = 0
  for (let i = 0; i < grades.length; i++) {
    sumOfGrades += grades[i]
  }
  return sumOfGrades / grades.length
}

function getCategoryOfStudent(grades) {
  let badGrade = 0
  let satisfayGrade = 0

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] === 2) {
      badGrade++
    }

    else if (grades[i] === 3) {
      satisfayGrade++
    }
  }

  let category = ``

  if (badGrade > 0) {
    category = `двійочник`
  }

  else if (satisfayGrade > 0) {
    category = `трійочник`
  }

  else if (getAverageStudentGrade(grades) === 5) {
    category = `відмінник`
  }

  else { category = `хорошист` }

  return category
}


let numberOfSubject = parseInt(prompt(`Enter the number of subjects`))
let grades = []

for (let i = 0; i < numberOfSubject; i++) {
  let studentGrades = parseInt(prompt(`Enter the grade of number ${i + 1} subject`))
  grades.push(studentGrades)
}

const averageResult = getAverageStudentGrade(grades)
const categoryResult = getCategoryOfStudent(grades)

document.write(`<p>Average grade = ${averageResult}</p>`)
document.write(`<p>Category : ${categoryResult}</p>`)


