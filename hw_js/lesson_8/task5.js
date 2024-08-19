`use strict`

let grades = [2, 5, 5, 5, 4, 3, 2, 4, 5]

let numberOfTwos = 0
let goodMarks = 0
let belowAverage = 0
let total = 0

for (let i = 0; i < grades.length; i++) {
  let grade = grades[i]
  total = total + grade
  if (grade === 2)
    numberOfTwos++

  else if (grade >= 4)
    goodMarks++
}

let averageResult = total / grades.length

for (let i = 0; i < grades.length; i++) {
  if (grades[i] < averageResult) {
    belowAverage++
  }
}

document.write(`<p>Number of twos ${numberOfTwos}</p>`)
document.write(`<p>Good marks ${goodMarks}</p>`)
document.write(`<p>Below than average ${belowAverage}</p>`)





