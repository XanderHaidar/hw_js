'use strict'
// Вводемо дані
let num1 = parseFloat(prompt(`Enter number 1`, `0`))
let num2 = parseFloat(prompt(`Enter number 2`, `0`))
// Знаходимо результат
let sum = num1 + num2
let mult = num1 * num2
let divide = num1 / num2
// Виводимо результат в таблиці
document.write(`<table border=1px>  <tr><th>First number:${num1} </th><th>Second number:${num2}</th></tr> <tr><th>The goal</th><th>Result</th></tr> 
  <tr><th>Sum</th><th>${sum}</th></tr><tr><th>Multiplication</th><th>${mult}</th></tr><tr><th>Divide</th><th>${divide}</th></tr>  </table>`)
