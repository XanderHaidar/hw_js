`use strict`


if (confirm(`Start testing`)) {
  //=======================================================================================================================================================fu

  function getTicTacToe(board, turn) {
    let result = []

    function copyBoard(board) {
      return board.map(row => [...row])
    }

    function backtrack(curBoard, curTurn) {
      let emptyCell = false

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (curBoard[i][j] === ``) {
            emptyCell = true

            let newBoard = copyBoard(curBoard)

            newBoard[i][j] = curTurn

            let nextTurn = curTurn === `X` ? `0` : `X`

            backtrack(newBoard, nextTurn)
          }
        }
      }
      if (!emptyCell) {
        result.push(copyBoard(curBoard))
      }
    }

    backtrack(board, turn)
    return result

  }

  let board = [
    [`X`, `0`, `X`],
    [``, `X`, ``],
    [`0`, ``, ``]
  ]

  let moves = getTicTacToe(board, 0)

  console.log('Possible options')
  moves.forEach((move, index) => {
    console.log(`Option ${index + 1}:`)
    move.forEach(row => console.log(row))
  })



  //=======================================================================================================================================================
}