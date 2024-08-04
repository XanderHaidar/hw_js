`use strict`
// Step_0-Designation of values:
// userCategory
// categoryA
// categoryB
// categoryC
// Step_1-Entering values
let userCategory = prompt(`Enter Your category. a,b or c`)
let categoryA = `a`
let categoryB = `b`
let categoryC = `c`
// Step_2-Calculation
if (userCategory === categoryA)
  // Step_3-To display 
  document.write(`<p>You can drive motorcycle</p>`)
else if (userCategory === categoryB)
  // Step_3-To display 
  document.write(`<p>You can drive a car</p>`)
else if (userCategory === categoryC)
  // Step_3-To display 
  document.write(`<p>You can drive a truck</p>`)
else document.write(`<p>Enter correct data</p>`)








