`use strict`


if (confirm(`Start testing`)) {
  const prices = [1000, 3000, 200, 5, 20, 55, 1]
  const tax = 0.20

  let result = prices.map(price => price * tax)

  document.write(`<p>Result - ${result}</p>`)
}

