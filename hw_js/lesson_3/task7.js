`use strict`

// Step_1-Entering values
let monthNumber = parseInt(prompt(`Enter number of month from 1 to 12`, `1`))
// Step_2-Calculation
if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12)
  alert(`Winter`)
else if (monthNumber >= 3 && monthNumber <= 5)
  alert(`Spring`)
else if (monthNumber >= 6 && monthNumber <= 8)
  alert(`Summer`)
else if (monthNumber >= 9 && monthNumber <= 11)
  alert(`Autumn`)
else alert(`Plese enter correct data`)












