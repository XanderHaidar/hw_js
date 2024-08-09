`use strict`
// Змінні
let totalTemp = 0
// Цикл
for (let monthNum = 1; monthNum <= 12; monthNum++) {
  let dayTemp = parseInt(prompt(`Enter temperature in ${monthNum} month`))
  // Перевірка на нечислове значення за допомогою isNan
  if (isNaN(dayTemp)) {
    alert(`Please,enter correct data`)
    // monthNum-- щоб ввести повторно данні
    monthNum--
    continue
  }
  totalTemp = totalTemp + dayTemp
}
let averageTemp = totalTemp / 12
alert(`Average temp = ${averageTemp.toFixed(2)}`)









