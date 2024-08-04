`use strict`
// Step_0-Designation of values:
// productPrice
// moneyAmount
// Step_1-Entering values
let moneyAmount = prompt(`Enter your balance`, `100`)
let productPrice = prompt(`Enter the price`, `0`)


// Step_2-Calculation
if (productPrice > moneyAmount)
  // Step_3-To display 
  document.write(`<p>Sorry,maybe another time</p>`)

else if ((moneyAmount - productPrice) >= 4)
  // Step_3-To display 
  document.write(`<p>We offer You to buy lottery ticket. It cost only 4 usd</p>`)
else
  document.write(`<p>Thank You for your order. </p>`)

