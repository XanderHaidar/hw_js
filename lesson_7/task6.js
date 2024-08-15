`use strict`

const rows = parseInt(prompt(`Enter the numbers of rows`, `10`))
const columns = parseInt(prompt(`Enter the numbers of columns`, `10`))
const message = prompt(`Enter text`, `2077`)

function createTable() {

  document.write(`<table border="2">`)

  for (let r = 0; r < rows; r++) {
    document.write(`<tr>`)

    for (let c = 0; c < columns; c++)
      document.write(`<td>${message}</td>`)

    document.write(`</tr>`)

  }

  document.write(`</table>`)

}

createTable()




