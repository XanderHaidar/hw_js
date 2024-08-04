`use strict`

// Step_1-Entering values
let dayNumber = parseInt(prompt(`Enter day number`, `1`))
const MONDAY = 1
const TUESDAY = 2
const WEDNESDAY = 3
const THURSDAY = 4
const FRIDAY = 5
const SATURDAY = 6
const SUNDAY = 7
// Step_2-Calculation
let yourDay
if (dayNumber === MONDAY)
  yourDay = `MONDAY`
else if (dayNumber === TUESDAY)
  yourDay = `TUESDAY`
else if (dayNumber === WEDNESDAY)
  yourDay = `WEDNESDAY`
else if (dayNumber === THURSDAY)
  yourDay = `THURSDAY`
else if (dayNumber === FRIDAY)
  yourDay = `FRIDAY`
else if (dayNumber === SATURDAY)
  yourDay = `SATURDAY`
else if (dayNumber === SUNDAY)
  yourDay = `SUNDAY`
else document.write(`<p>Enter correct data</p>`)
// Step_3-To display 
document.write(`<p>Your day is ${yourDay}</p>`)










