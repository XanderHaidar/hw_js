`use strict`

let userNumbers
let sum = 0

// do {
//   userNumbers = parseInt(prompt(`Enter 2numbers`))
//   sum = sum + userNumbers
// } while (sum <= 20)
// alert(`${sum}`)

while (sum <= 20) {
  userNumbers = parseInt(prompt(`Enter numbers`))
  sum = sum + userNumbers
}
alert(`${sum}`)