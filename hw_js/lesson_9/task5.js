`use strict`


if (confirm(`Start testing`)) {
  let numbers = [-2, 5, 5, 5, -4, 3, -2, -4, 5]
  let multiplication = 1

  for (let item of numbers) {
    if (item > 0) {
      multiplication = multiplication * item
    }
  }

  document.write(`<p>${multiplication}</p>`)

}



