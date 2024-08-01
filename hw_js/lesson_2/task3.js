'use strict'
// Вводемо дані
let price = parseFloat(prompt(`Enter price`, `8`))
let quantity = parseInt(prompt(`Enter quantity`, `10`))
const percentage = 5
// Знаходимо результат
let totalPrice = price * quantity
let pricePercent = totalPrice * percentage / 100
let finalPrice = totalPrice + pricePercent
// Виводимо результат
document.write(`
  <p>Price=${price}uah</p>
  <p>Quantity=${quantity}uah</p>
  <p>Total price=${totalPrice}uah</p>
  <p>Percentage(5%)=${pricePercent}uah</p>
  <p>Final price=${finalPrice}uah</p>`)