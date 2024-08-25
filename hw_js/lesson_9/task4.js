`use strict`
if (confirm(`Start testing`)) {
  let numbers = [1, 99, 101, 2077, 55, 300, 1000, 500, 3, 444, 755, 10, 880, 123, 9]

  for (let item of numbers) {
    if (item >= 100) {
      document.write(`<p>${item}<hr></p>`)
    }
  }

}