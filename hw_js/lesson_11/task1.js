`use strict`


if (confirm(`Start testing`)) {
  //=======================================================================================================================================================

  // function genArray2D(rows, cols) {
  //   let arr = []
  //   for (let i = 0; i < rows; i++) {
  //     let row = []
  //     for (let y = 0; y < cols; y++) {
  //       row.push(Math.floor(Math.random() * 10000))
  //     }
  //     arr.push(row)
  //   }
  //   return arr
  // }

  // let newArr = genArray(4, 4)
  // console.log(newArr)

  // let arr2D = [
  // ____0____1___2___3
  //  0 [14, 26, 29, 10],
  //  1 [34, 90, 2077, 87],
  //  2 [55, 32, 89, 10],
  //  3 [11, 78, 43, 99]
  // ]
  let arr2D = [
    [14, 26, 29, 10],
    [34, 90, 2077, 87],
    [55, 32, 89, 10],
    [11, 78, 43, 99]
  ]

  // Задача 1. Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)

  //================================================1.1 номери рядків від 0 до половини, стовпці від 0 до половини==========================================

  // let sum = arr2D[0][0] + arr2D[0][1] + arr2D[1][0] + arr2D[1][1]
  // document.write(sum)
  //  or...

  function topLeftColoredArea(matrix) {
    let sumFortopLeftColoredArea = 0
    let halfRows = Math.floor(matrix.length / 2)
    let halfColumns = Math.floor(matrix[0].length / 2)

    for (let indexRows = 0; indexRows <= halfRows; indexRows++) {
      for (let indexColumns = 0; indexColumns <= halfColumns; indexColumns++) {
        sumFortopLeftColoredArea += matrix[indexRows][indexColumns]
      }
    }
    return sumFortopLeftColoredArea
  }

  let sumFortopLeftColoredArea = topLeftColoredArea(arr2D)
  document.write(`<p>Sum of top,left colored area = ${sumFortopLeftColoredArea}</p>`)

  //===========================================1.2==номери рядків від 0 до половини, стовпці від половини до кінця============================================

  function topRightColoredArea(matrix) {
    let sumFortopRightColoredArea = 0
    let halfColumns = Math.floor(matrix[0].length / 2)

    for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
      for (let indexColumns = halfColumns; indexColumns < matrix[i].length; indexColumns++) {
        sumFortopRightColoredArea += matrix[i][indexColumns]
      }
    }
    return sumFortopRightColoredArea
  }

  let sumFortopRightColoredArea = topRightColoredArea(arr2D)
  document.write(`<p>Sum of top,right colored area = ${sumFortopRightColoredArea}</p>`)

  //=============================================1.3 номери рядків (від половини до кінця, стовпці від 0 до половини===========================================

  function bottomLeftColoredArea(matrix) {
    let sumForBottomLeftColoredArea = 0
    let halfRows = Math.floor(matrix.length / 2)
    let halfColumns = Math.floor(matrix[0].length / 2)

    for (let indexRows = halfRows; indexRows < matrix.length; indexRows++) {
      for (let indexColumns = 0; indexColumns < halfColumns; indexColumns++) {
        sumForBottomLeftColoredArea += matrix[indexRows][indexColumns]
      }
    }
    return sumForBottomLeftColoredArea
  }

  let sumForBottomLeftColoredArea = bottomLeftColoredArea(arr2D)
  document.write(`<p>Sum of bottom,left colored area = ${sumForBottomLeftColoredArea}</p>`)

  //=================================================1.4 номери рядків від половини до кінця , стовпці від половини до кінця===================================

  function bottomRightColoredArea(matrix) {
    let sumForBottomRightColoredArea = 0
    let halfRows = Math.floor(matrix.length / 2)
    let halfColumns = Math.floor(matrix[0].length / 2)

    for (let indexRows = halfRows; indexRows < matrix.length; indexRows++) {
      for (let indexColumns = halfColumns; indexColumns < matrix[indexRows].length; indexColumns++) {
        sumForBottomRightColoredArea += matrix[indexRows][indexColumns]
      }
    }
    return sumForBottomRightColoredArea
  }

  let sumForBottomRightColoredArea = bottomRightColoredArea(arr2D)
  document.write(`<p>Sum of bottom,right colored area = ${sumForBottomRightColoredArea}</p>`)

  //====================================================1.5 Суму парних рядків===============================================================================

  function getEvenRowsSum(matrix) {
    let evenRowsSum = 0
    for (let r = 0; r < matrix.length; r += 2) {
      for (let c = 0; c < matrix[r].length; c++) {
        evenRowsSum += matrix[r][c]
      }
    }
    return evenRowsSum
  }

  let evenRowsSum = getEvenRowsSum(arr2D)
  document.write(`<p>Sum of even rows = ${evenRowsSum}</p>`)

  //=======================================================1.6 Суму непарних стовпців========================================================================

  function getOddColumnsSum(matrix) {
    let oddColumnSum = 0
    for (let r = 0; r < matrix.length; r++) {
      for (let c = 1; c < matrix[r].length; c += 2) {
        oddColumnSum += matrix[r][c]
      }
    }
    return oddColumnSum
  }

  let oddColumnSum = getOddColumnsSum(arr2D)
  document.write(`<p>Sum of odd column = ${oddColumnSum}</p>`)

  //========================================================1.7 У парних рядках – непарні стовпці, у непарних – парні========================================

  function getOddAndEvenSum(matrix) {
    let oddAndEvenSum = 0

    for (let r = 0; r < matrix.length; r++) {
      if (r % 2 === 0) {
        for (let cOdd = 1; cOdd < matrix[r].length; cOdd += 2) {
          oddAndEvenSum += matrix[r][cOdd]
        }
      } else {
        for (let cEven = 0; cEven < matrix[r].length; cEven += 2) {
          oddAndEvenSum += matrix[r][cEven]

        }
      }
    }
    return oddAndEvenSum
  }

  let oddAndEvenSum = getOddAndEvenSum(arr2D)
  document.write(`<p>Sum of even rows , odd columns and odd rows , even columns = ${oddAndEvenSum}</p>`)




  //=======================================================================================================================================================
}