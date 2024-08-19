`use strict`

let carNumbers = [`AX8248IT`, `AX3801CI`, `VI2335EA`, `KA7777AK`, `S12S`, `111A`]

function getStartWithLetterA(carNumbers) {
  let count = 0
  for (let i = 0; i < carNumbers.length; i++) {
    if (carNumbers[i][0] === `A`)
      count++
  }
  return count
}


function getSameFirstLastLetter(carNumbers) {
  let count = 0
  for (let i = 0; i < carNumbers.length; i++) {
    let number = carNumbers[i]
    if (number[0] === number[number.length - 1])
      count++
  }
  return count
}


function getMoreThanFive(carNumbers) {
  let count = 0
  for (let i = 0; i < carNumbers.length; i++) {
    if (carNumbers[i].length > 5)
      count++
  }
  return count
}

let numbersStartingWithA = getStartWithLetterA(carNumbers)
let numbersFirstLastSameLetter = getSameFirstLastLetter(carNumbers)
let numbersMoreThanFiveSimbols = getMoreThanFive(carNumbers)

document.write(`<p>The amount of car numbers starting with letter A is ${numbersStartingWithA}</p>`)
document.write(`<p>The amount of car numbers that start and end with the same letter is ${numbersFirstLastSameLetter}</p>`)
document.write(`<p>The amount of car numbers with more than five simbols is ${numbersMoreThanFiveSimbols}</p>`)