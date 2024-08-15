`use strict`

function sumOfNumbers(a, b, c, d) {
  return a + b + c + d
}
function multiplyNumbers(a, b, c, d) {
  return a * b * c * d
}
function averageNumber(a, b, c, d) {
  return (a + b + c + d) / 4
}
function minNumber(a, b, c, d) {
  return Math.min(a, b, c, d)
}

let sumResult = sumOfNumbers(10, 20, 30, 40)
document.write(`<p>Sum of numbers = ${sumResult}</p>`)

let multiplyResult = multiplyNumbers(10, 20, 30, 40)
document.write(`<p>Multiply numbers = ${multiplyResult}</p>`)

let averageResult = averageNumber(10, 20, 30, 40)
document.write(`<p>Average number = ${averageResult}</p>`)

let minResult = minNumber(10, 20, 30, 40)
document.write(`<p>Min number = ${minResult}</p>`)