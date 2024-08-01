'use strict'
// Вводемо дані
let productPrice1 = parseFloat(prompt(`Enter the price of the product 1`, `5`))
let productQuantity1 = parseFloat(prompt(`Enter the quantity of the product 1`, `10`))
let productPrice2 = parseFloat(prompt(`Enter the price of the product 2`, `25`))
let productQuantity2 = parseFloat(prompt(`Enter the quantity of the product 2`, `100`))
let productPrice3 = parseFloat(prompt(`Enter the price of the product 3`, `50`))
let productQuantity3 = parseFloat(prompt(`Enter the quantity of the product 3`, `2`))
// Знаходемо результат по кожному товару
let productCost1 = productPrice1 * productQuantity1
let productCost2 = productPrice2 * productQuantity2
let productCost3 = productPrice3 * productQuantity3
// Знаходемо результат по сумі всіх позицій
let totalCost = productCost1 + productCost2 + productCost3
// Виводимо результат
document.write(`<p>first product: ${productPrice1}uah*${productQuantity1}p=${productCost1}uah</p>
  <p>second product: ${productPrice2}uah*${productQuantity2}p=${productCost2}uah</p>
  <p>third product: ${productPrice3}uah*${productQuantity3}p=${productCost3}uah</p>
  <hr>
  TOTAL COST-${totalCost}uah
  `)