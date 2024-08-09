`use strict`

let sum = 0
for (i = 0; i < 5; i++) {
  let userNumbers = parseInt(prompt(`Enter number`))
  if (userNumbers % 2 !== 0)
    sum += userNumbers

}
document.write(`Odd numbers sum = ${sum}`)






