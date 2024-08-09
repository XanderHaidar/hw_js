`use strict`
// Змінні
let evenNumber = 0
let oddNumber = 0
// Генеруємо
for (let generatedNumber = 0; generatedNumber < 100; generatedNumber++) {
  let randomNumber = 1 + Math.floor(Math.random() * 1000)
  // Перевіряємо на парність та додаємо
  if (randomNumber % 2 === 0) evenNumber++
  else oddNumber++
}
// Виводемо
if (evenNumber > oddNumber) alert(`Even numbers more than odd numbers,their number ${evenNumber}`)
else if (evenNumber < oddNumber) alert(`Odd numbers more than even numbers,their number ${oddNumber}`)
else alert(`The amount is the same`)