`use strict`

let payments = [25000, 25000, 40000, 35000, 50000, 60000, 70000, 20000, 100000, 70000, 15000, 40000]


function getSumOfPeriod(payments, start, end) {
  let sum = 0
  for (let i = start; i < end; i++) {
    sum += payments[i]
  }
  return sum
}

let sumPerYear = getSumOfPeriod(payments, 0, 12)
let sumFirstHalfOfYear = getSumOfPeriod(payments, 0, 6)
let sumSecondHalfOfYear = getSumOfPeriod(payments, 6, 12)
let sumPerSummer = getSumOfPeriod(payments, 5, 8)
let sumPerSecondQuarter = getSumOfPeriod(payments, 3, 6)
let sumOfEvenMonths = 0
for (let i = 1; i < payments.length; i += 2) {
  sumOfEvenMonths += payments[i]
}
let sumPerSeasonStartMonths = payments[2] + payments[5] + payments[8] + payments[11]

document.write(`<p>Sum per Year = ${sumPerYear}</p>`)
document.write(`<p>Sum for the first half of the Year = ${sumFirstHalfOfYear}</p>`)
document.write(`<p>Sum for the second half of the Year = ${sumSecondHalfOfYear}</p>`)
document.write(`<p>Sum per summer = ${sumPerSummer}</p>`)
document.write(`<p>Sum for the second quarter of the Year = ${sumPerSecondQuarter}</p>`)
document.write(`<p>Sum for the even months = ${sumOfEvenMonths}</p>`)
document.write(`<p>Sum per start season months = ${sumPerSeasonStartMonths}</p>`)