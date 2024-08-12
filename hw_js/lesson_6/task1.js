`use strict`

let enteredNumbers = 0
let userNum = 0
let sum = 0

while (sum < 100) {
  userNum = parseInt(prompt(`Please enter numbers`))
  sum += userNum
  enteredNumbers++
  if (sum > 99)
    alert(`Your number ${sum}`)
}
alert(`Your entered numbers ${enteredNumbers}`)





