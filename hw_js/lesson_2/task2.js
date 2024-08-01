'use strict'
// Вводемо дані
let yearOfBirth = parseInt(prompt(`Enter the year of birth`, `1989`))
// Використовуємо метод getFullYear для розрахунку віку на основі введеної дати народження
let currentYear = new Date().getFullYear()
// Знаходимо результат
let age = currentYear - yearOfBirth
// Виводимо результат
document.write(`<p>Your age=${age}</p>`)