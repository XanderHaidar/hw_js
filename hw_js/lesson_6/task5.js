`use strict`

let triangleHeight = 7

for (let i = 1; i <= triangleHeight; i++) {
  let row = ``
  for (let symbol = 1; symbol <= i; symbol++) {
    row = row + `o`
  }
  document.write(`<p>${row}<br></p>`)
}








