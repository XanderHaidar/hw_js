`use strict`

function amountOfNegativeTemp(temp1, temp2, temp3, temp4) {
  let counter = 0

  if (temp1 < 0)
    counter++
  if (temp2 < 0)
    counter++
  if (temp3 < 0)
    counter++
  if (temp4 < 0)
    counter++

  return counter
}

let temp1 = parseInt(prompt(`Enter the first temperature reading`, `-12`))
let temp2 = parseInt(prompt(`Enter the second temperature reading`, `-12`))
let temp3 = parseInt(prompt(`Enter the third temperature reading`, `-12`))
let temp4 = parseInt(prompt(`Enter the fourth temperature reading`, `-12`))
let result = amountOfNegativeTemp(temp1, temp2, temp3, temp4)

document.write(`<p>You entered negative temperature ${result} times</p>`)




