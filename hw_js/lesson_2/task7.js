'use strict'
// Генеруємо випадкові дані за допомогою методу Math.random
let randomDay = Math.floor(Math.random() * 7)
let randomMonth = Math.floor(Math.random() * 12) + 1
// Знаходемо результат
let sum = randomDay + randomMonth
// Виводимо результат
document.write(`
  <p>Random day:${randomDay}</p>
  <p>Random month:${randomMonth}</p>
  <p>Sum:${sum}</p>`)