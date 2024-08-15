`use strict`

function getWorkingDays(dayNumber) {
  if (dayNumber >= 1 && dayNumber <= 5) {
    alert(`It is working day`)
  }
  else if (dayNumber === 6 || dayNumber === 7)
    alert(`Its weekend`)
}

let userDay = getWorkingDays(parseInt(prompt`Enter Your day`))

