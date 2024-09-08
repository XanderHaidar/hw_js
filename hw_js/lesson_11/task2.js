`use strict`


if (confirm(`Start testing`)) {

  //=================================2.1 загальний прибуток кожного масиву за тиждень;=====================================================================

  let storesProfits = [
    [2077, 1450, 23120, 2000, 5000, 1110, 7830],
    [8000, 9000, 1009, 51107, 1260, 13880, 45140],
    [56200, 28950, 4532, 7990, 55567, 4445, 3210],
    [4578, 6700, 8907, 2077, 34098, 9887, 4572]
  ]

  function getTotalProfitForEachStore(profit) {
    let totalProfit = []

    for (let i = 0; i < profit.length; i++) {
      let weekProfit = 0
      for (let dayIndex = 0; dayIndex < profit[i].length; dayIndex++) {
        weekProfit += profit[i][dayIndex]
      }
      totalProfit.push(weekProfit)
    }
    return totalProfit
  }

  let totalProfit = getTotalProfitForEachStore(storesProfits)
  totalProfit.forEach((profit, index) => {
    document.write(`<p>Shop ${index + 1} profit for a week = ${profit}</p>`)
  })

  document.write(`<hr>`)
  //=========================2.2 загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);=========

  function getProfitForEachDay(profit) {
    let totalDayProfit = []
    let days = profit[0].length

    for (let day = 0; day < days; day++) {
      let dayProfit = 0
      for (let shop = 0; shop < profit.length; shop++) {
        dayProfit += profit[shop][day]
      }
      totalDayProfit.push(dayProfit)
    }
    return totalDayProfit
  }

  let result = getProfitForEachDay(storesProfits)

  let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  result.forEach((profit, index) => {
    document.write(`<p>${weekDays[index]} profit = ${profit}</p>`)
  })

  document.write(`<hr>`)

  //=========================================================2.3 загальний прибуток за робочі дні=============================================================

  function getProfitForWorkingDays(profit) {
    let totalWorkingDaysProfit = 0

    for (let shop = 0; shop < profit.length; shop++) {
      for (let day = 0; day < 5; day++) {
        totalWorkingDaysProfit += profit[shop][day]
      }
    }
    return totalWorkingDaysProfit
  }

  let sumOfWorkingDaysProfit = getProfitForWorkingDays(storesProfits)

  document.write(`Total profit for working days = ${sumOfWorkingDaysProfit}<hr>`)

  //=====================================================2.4 загальний прибуток за вихідні дні===============================================================

  function getProfitForWeekendDays(profit) {
    let totalWeekendDaysProfit = 0

    for (let shop = 0; shop < profit.length; shop++) {
      totalWeekendDaysProfit += profit[shop][5]
      totalWeekendDaysProfit += profit[shop][6]
    }
    return totalWeekendDaysProfit
  }



  let sumOfWeekendDaysProfit = getProfitForWeekendDays(storesProfits)

  document.write(`Total profit for weekend days = ${sumOfWeekendDaysProfit}<hr>`)

  //========================================================2.5 максимальний прибуток за середу===============================================================

  function getMaxProfitForWednesday(profit) {
    let maxWednesdayProfit = -Infinity

    for (let shop = 0; shop < profit.length; shop++) {
      if (profit[shop][2] > maxWednesdayProfit) {
        maxWednesdayProfit = profit[shop][2]
      }
    }
    return maxWednesdayProfit
  }

  let wednesdayMaxProfit = getMaxProfitForWednesday(storesProfits)
  document.write(`Max wednesday profit = ${wednesdayMaxProfit} <hr>`)

  //=====================================================2.6 сформувати загальний список (одновимірний масив) зі значенням, які більші за 200==============

  function getMoreThan200Profits(profit) {
    let arrMoreThan200 = []

    for (let shop = 0; shop < profit.length; shop++) {
      for (let day = 0; day < profit[shop].length; day++) {
        if (profit[shop][day] > 200) {
          arrMoreThan200.push(profit[shop][day])
        }
      }
    }
    return arrMoreThan200
  }

  let resultMoreThan200 = getMoreThan200Profits(storesProfits)

  document.write(`More than 200 - ${resultMoreThan200} <hr>`)

  //=========================================================2.7 відсортувати кожен тиждень за зростанням===================================================

  function sortWeeksProfits(profit) {
    for (let shop = 0; shop < profit.length; shop++) {
      profit[shop].sort((a, b) => a - b)
    }
    return profit
  }

  let sortedWeeks = sortWeeksProfits(storesProfits)
  sortedWeeks.forEach((profit, index) => { document.write(`<p>Shop №${index + 1}: Sorted profit for week = ${profit}</p> <hr>`) })

  //===2.8 відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків========

  function sortByMax(profit) {
    profit.sort((a, b) => Math.max(...a) - Math.max(...b))
    return profit
  }

  let sortedByMax = sortByMax(storesProfits)

  sortedByMax.forEach((profit, index) => { document.write(`<p>Shop №${index + 1}: Sorted by MAX profit for week = ${profit}</p> <hr>`) })

  //===2.9 упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).===

  function sortBySum(profit) {
    profit.sort((a, b) => {
      let sumA = a.reduce((accum, value) => accum + value, 0)
      let sumB = b.reduce((accum, value) => accum + value, 0)
      return sumA - sumB
    })
    return profit
  }

  let sortedBySum = sortBySum(storesProfits)
  sortedBySum.forEach((profit, index) => { document.write(`<p>Shop №${index + 1}: Sorted by sum profit = ${profit}</p> <hr>`) })


  //=======================================================================================================================================================
}