`use strict`


if (confirm(`Start testing`)) {
  const prices = [200, 300, 400, 2077, 1001]

  prices.forEach((value, index, array) => {
    if (value > 1000) {
      array[index] = value * 0.7
    }
  })

  document.write(`<p>Result - ${prices}</p>`)


}