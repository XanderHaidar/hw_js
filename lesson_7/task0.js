`use strict`

function getSeasons(month) {

  let season

  if (month === 12 || month === 1 || month === 2)
    season = `Winter`

  else if (month === 3 || month === 4 || month === 5)
    season = `Spring`

  else if (month === 6 || month === 7 || month === 8)
    season = `Summer`

  else if (month === 9 || month === 10 || month === 11)
    season = `Autumn`

  return season
}

month = getSeasons(parseInt(prompt(`Enter the month`)))
document.write(`<p>Your season is ${month}</p>`)








