`use strict`


if (confirm(`Start testing`)) {
  //======================================================================================================================================================

  function getYearPlusNMonths(dateObject, N) {
    let { day, month, year } = dateObject

    month = month + N

    let addYears = Math.floor(month / 12)
    year = year + addYears

    month = month % 12

    if (month === 0) {
      month = 12
      year--
    }
    return { day, month, year }
  }

  let N = parseInt(prompt(`Enter the number of months to add:`, `1056`))

  const startDate = { day: 29, month: 1, year: 1989 }

  let newDate = getYearPlusNMonths(startDate, N)
  alert(`New date: ${newDate.day}/${newDate.month}/${newDate.year}`)



  //=======================================================================================================================================================
}