`use strict`

let attempts = 0
let guessed
let randomNumber = Math.floor(Math.random() * 10 + 1)

while (guessed != randomNumber) {
  guessed = parseInt(prompt(`Try to guess the number from 1 to 10`))
  attempts++
  if (guessed === randomNumber) {
    alert(`You guessed the number ${randomNumber} , it took You ${attempts} try`)
  }
}



