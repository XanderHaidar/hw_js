`use strict`
// Step_0-Designation of values:
// age
// kinderGardenChild
// schoolChild
// student
// worker
// socialStatus
// Step_1-Entering values
let age = parseInt(prompt(`Enter the age`))
let kinderGardenChild = 6
let schoolChild = 17
let student = 22
let worker = 60
// Step_2-Calculation
let socialStatus
if (age <= kinderGardenChild)
  socialStatus = `Kinder Garden Child`
else if (age <= schoolChild)
  socialStatus = `School Child`
else if (age <= student)
  socialStatus = `Student`
else if (age <= worker)
  socialStatus = `Worker`
else socialStatus = `Pensioner`
// Step_3-To display 
document.write(`<p>If You are ${age} years old , You are a ${socialStatus}</p>`)






