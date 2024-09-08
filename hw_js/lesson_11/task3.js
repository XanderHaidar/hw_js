`use strict`


if (confirm(`Start testing`)) {
  //=======================================================================================================================================================

  let fieldSize = 6
  let numOfShips = 5
  let ships = []

  function logMessage(message) {
    alert(message)
  }

  function endGame() {
    logMessage(`GAME OVER`)
  }

  function getPlacementOfShips() {
    while (ships.length < numOfShips) {
      let row = Math.floor(Math.random() * fieldSize)
      let column = Math.floor(Math.random() * fieldSize)
      let shipPosition = `${row}-${column}`
      if (!ships.includes(shipPosition))
        ships.push(shipPosition)
    }
  }

  let shots = 10
  let hits = 0

  function getShot(row, column) {
    let target = `${row}-${column}`

    if (ships.includes(target)) {
      logMessage(`Hit at coordinates (${row},${column})`)
      hits++
      ships = ships.filter(ship => ship !== target)
    } else logMessage(`Miss at coordinates (${row},${column})`)

    shots--

    if (hits === numOfShips) {
      logMessage(`Congratulations! You have destroyed all ships`)
      endGame()
    } else if (shots === 0) {
      logMessage(`You ran out of shots.Game over`)
      endGame()
    } else logMessage(`Shots remaining: ${shots},ships ramaining: ${numOfShips - hits}`)
  }


  function startGame() {
    getPlacementOfShips()
    logMessage(`Game started!The field is 6x6. You need to destroyed 5 ships`)
    logMessage(`You have ${shots} shots`)
    gameCycle()
  }

  function gameCycle() {
    while (shots > 0 && hits < numOfShips) {
      let rowNum = parseInt(prompt(`Enter the row number for the shot (0-5)`))
      let columnNum = parseInt(prompt(`Enter the column number for the shot (0-5)`))
      getShot(rowNum, columnNum)
    }
  }



  startGame()



  //=======================================================================================================================================================
}