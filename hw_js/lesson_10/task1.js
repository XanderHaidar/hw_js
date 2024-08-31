`use strict`


if (confirm(`Start testing`)) {

  //=================================================================0=====================================================================================

  function genRandomNumArr(length) {
    return Array(length).fill().map(() => Math.floor(Math.random() * 10000) + 1)
  }

  const length = parseInt(prompt(`Enter quantiti of num`, `7`))
  let randomNum = genRandomNumArr(length)

  document.write(`<p>0 - ${randomNum}</p><hr>`)

  //==================================================================1===================================================================================

  function getMoreThanThousand(numbers) {
    return numbers.filter(num => num > 1000)
  }

  let filteredNumbers = getMoreThanThousand(randomNum)
  document.write(`<p>1 - ${filteredNumbers}</p><hr>`)

  //==================================================================2====================================================================================

  function getMoreThanThousandIndex(numbers) {
    // return numbers.reduce((newArr, el, index) => {
    //   if (el > 1000) {
    //     newArr.push(index)
    //   }
    //   return newArr
    // }, [])

    // Чи краще так????
    return numbers.reduce((newArr, el, index) => (el > 1000 ? newArr.concat(index) : newArr), [])
  }

  let filteredIndexes = getMoreThanThousandIndex(randomNum)
  document.write(`<p>2 - ${filteredIndexes}</p><hr>`)

  //===================================================================3=====================================================================================

  function getPriceGreaterThanPrev(numbers) {
    return numbers.reduce((newArr, el, index, arr) => {
      if (index > 0 && el > arr[index - 1]) {
        newArr.push(el)
      }
      return newArr
    }, [])
  }

  let filteredPrices = getPriceGreaterThanPrev(randomNum)
  document.write(`<p>3 - ${filteredPrices}</p><hr>`)

  //======================================================================4==================================================================================

  function getPercentOfMax(numbers) {
    let maxPrice = Math.max(...numbers)
    return numbers.map(price => (price / maxPrice) * 100)
  }

  let percentPrice = getPercentOfMax(randomNum)
  document.write(`<p>4 - ${percentPrice}</p><hr>`)

  //=======================================================================5===============================================================================

  function getChangeOfPrice(numbers) {
    return numbers.reduce((changeEl, el, index, arr) => {
      if (index > 0 && el !== arr[index - 1]) {
        changeEl += 1
      }
      return changeEl
    }, 0)
  }

  let changeOfPrice = getChangeOfPrice(randomNum)
  document.write(`<p>5 - ${changeOfPrice}</p><hr>`)

  //==========================================================================6=============================================================================

  function getPriceLessThan1000(numbers) {
    return numbers.some(price => price < 1000)
  }

  let priceLessThan1000 = genRandomNumArr(randomNum)

  if (priceLessThan1000) document.write(`<p>6 - There is a price of less than 1000</p><hr>`)
  else document.write(`<p>6 - There are no prices below 1000</p><hr>`)

  //==========================================================================7=============================================================================

  function areAllPricesGreaterThan1000(numbers) {
    return numbers.every(price => price > 1000)
  }

  let allPricesGreaterThan1000 = areAllPricesGreaterThan1000(randomNum)

  if (allPricesGreaterThan1000)
    document.write(`<p>7 - All prices are greater than 1000</p><hr>`)

  else document.write(`<p>7 - Not all prices are greater than 1000</p><hr>`)

  //============================================================================8==========================================================================

  function getQuantityOfPricesGreaterThan1000(numbers) {
    return numbers.reduce((quantity, price) => quantity + (price > 1000 ? 1 : 0), 0)
  }

  let quantityOfPricesGreaterThan1000 = getQuantityOfPricesGreaterThan1000(randomNum)

  document.write(`<p>8 - Quantity of numbers greater than 1000 are ${quantityOfPricesGreaterThan1000}</p><hr>`)

  //===========================================================================9============================================================================

  function getSumOfNumbersGreaterThan1000(numbers) {
    return numbers.reduce((sum, price) => sum + (price > 1000 ? price : 0), 0)
  }

  let sumOfNumbersGreaterThan1000 = getSumOfNumbersGreaterThan1000(randomNum)

  document.write(`<p>9 - Sum of numbers greater than 1000 are ${sumOfNumbersGreaterThan1000}</p><hr>`)

  //============================================================================10==========================================================================

  function findFirstPriceGreaterThan1000(numbers) {
    return numbers.find(value => value > 1000)
  }

  let firstPriceGreaterThan1000 = findFirstPriceGreaterThan1000(randomNum)

  document.write(`<p>10 - First price greater than 1000 are ${firstPriceGreaterThan1000}</p><hr>`)

  //==============================================================================11=======================================================================

  function findFirstPriceIndexGreaterThan1000(numbers) {
    return numbers.findIndex(value => value > 1000)
  }

  let firstPriceIndexGreaterThan1000 = findFirstPriceIndexGreaterThan1000(randomNum)

  document.write(`<p>11 - First index of price greater than 1000 are ${firstPriceIndexGreaterThan1000}</p><hr>`)

  //============================================================================12========================================================================

  function findLastPriceGreaterThan1000(numbers) {
    return numbers.findLast(value => value > 1000)
  }

  let lastPriceGreaterThan1000 = findLastPriceGreaterThan1000(randomNum)

  document.write(`<p>12 - Last price greater than 1000 are ${lastPriceGreaterThan1000}</p><hr>`)

  //========================================================================13==============================================================================

  function findLastPriceIndexGreaterThan1000(numbers) {
    return numbers.findLastIndex(value => value > 1000)
  }

  let lastPriceIndexGreaterThan1000 = findLastPriceIndexGreaterThan1000(randomNum)

  document.write(`<p>13 - Last index of price greater than 1000 are ${lastPriceIndexGreaterThan1000}</p><hr>`)

}