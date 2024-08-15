`use strict`

function getAveragePositiveTemp() {
  let counter = 0
  let sum = 0
  let temperature
  for (let t = 0; t < 5; t++) {
    temperature = parseFloat(prompt(`Enter temperature`))
  }

  if (temperature > 0) {
    sum = sum + temperature
    counter++
  }


  return sum / counter

}

let averageTemp = getAveragePositiveTemp()

document.write(`Average number of positive temperature: ${averageTemp}`)





