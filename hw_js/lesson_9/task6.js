`use strict`


if (confirm(`Start testing`)) {
  const numbers = [1, 0, 1, 2, 3, 4, 5, 0, 1, 0, 10]

  let firstElement = numbers[0]

  let multipliOnTwoArray = numbers.map(number => number > firstElement ? number * 2 : number)

  document.write(`<p>Result = ${multipliOnTwoArray}</p>`)
}
