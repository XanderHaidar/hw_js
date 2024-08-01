'use strict'
// Вводемо дані
let numSec = parseInt(prompt(`Enter the number of seconds`, `14400`))
// Знаходимо результат з використанням методу Math.floor для округлення
const hour = Math.floor(numSec / 3600)
const min = Math.floor(numSec / 60)
// Виводимо результат
document.write(`
  <p>Number of seconds=${numSec}sec</p>
  <p>Number of hours=${hour}hours</p>
  <p>Number of minutes=${min}min</p>
`)