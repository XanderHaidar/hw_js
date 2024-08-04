`use strict`
// Step_0-Designation of values:
// minNumber
// maxNumber
// userNumber
// randomNumber
// Step_1-Entering values
let minNumber = 1
let maxNumber = 5
let userNumber = parseInt(prompt(`Try to guess the number from 1 to 5`))
// Step_2-Calculation
// +1 щоб не генерувався 0
// включно з + minNumber для генераціі макс числа 
let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
// Step_3-To display 
document.write(`<p>Random number is ${randomNumber}</p>`)
if (userNumber === randomNumber)
  document.write(`Congratulations!!! On the first try`)
else {
  userNumber = parseInt(prompt(`Try to guess the number from 1 to 5.The last try`))
  if (userNumber === randomNumber)
    document.write(`Congratulations!`)
  else
    document.write(`Sorry, maybe next time`)
}






