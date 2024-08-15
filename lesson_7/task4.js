`use strict`

function getEvenNum(num1, num2, num3) {
  let evenNumber = 0
  if (num1 % 2 === 0)
    evenNumber++
  if (num2 % 2 === 0)
    evenNumber++
  if (num3 % 2 === 0)
    evenNumber++
  return evenNumber
}

function getPositiveNum(num1, num2, num3) {
  let positiveNumber = 0
  if (num1 > 0)
    positiveNumber++
  if (num2 > 0)
    positiveNumber++
  if (num3 > 0)
    positiveNumber++
  return positiveNumber
}


function getMoreThanHundredNum(num1, num2, num3) {
  let moreThanHundredNumber = 0
  if (num1 > 100)
    moreThanHundredNumber++
  if (num2 > 100)
    moreThanHundredNumber++
  if (num3 > 100)
    moreThanHundredNumber++
  return moreThanHundredNumber

}



let num1 = parseFloat(prompt(`Enter first number `))
let num2 = parseFloat(prompt(`Enter second number `))
let num3 = parseFloat(prompt(`Enter third number `))

document.write(`<p>Numbers- ${num1},${num2},${num3}</p><hr>`)

document.write(`<p>Even numbers = ${getEvenNum(num1, num2, num3)}</p>`)
document.write(`<p>Positive numbers = ${getPositiveNum(num1, num2, num3)}</p>`)
document.write(`<p>More than a hundred numbers = ${getMoreThanHundredNum(num1, num2, num3)}</p>`)
