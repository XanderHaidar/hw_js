`use strict`

let fund = 150
document.write(`<p>Start fund = ${fund} usd</p ><hr>`)
const SHOPPRICE = 10000
let percent = 25
let months = 0
let years = 0

while (fund < SHOPPRICE) {
  let profit = (fund * percent) / 100
  fund = fund + Math.floor(profit)
  months++
  document.write(`<p>Profit = ${profit} usd</p>`)
}
years = Math.floor(months / 12)
months = months % 12

document.write(`<p>FINAL FUND = ${fund} usd</p><hr>`)
document.write(`<p>WIth earnings of ${percent} percent per months, You need a ${years} years and ${months} months to accumulate ${SHOPPRICE} usd</p>`)


