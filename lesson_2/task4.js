'use strict'
// Вводемо дані
let lengthCentim = parseInt(prompt(`Enter the length in centimeters`, `100`))
// Знаходимо результат
const lengthMeters = lengthCentim / 100
const lengthKm = lengthCentim / 100000
// Виводимо результат
document.write(`
  <p>Number of centimeters=${lengthCentim}cm</p>
  <p>Length in meters=${lengthMeters}m</p>
  <p>Length in kilometers=${lengthKm}km</p>
`)