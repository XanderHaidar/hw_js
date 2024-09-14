`use strict`


if (confirm(`Start testing`)) {
  //======================================================================================================================================================

  let randomNumbersArray = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100))

  function getCocktailShakerSort(arr) {
    let compar = 0
    let swaps = 0
    let swapped
    let start = 0
    let end = arr.length - 1

    do {
      swapped = false

      for (let i = start; i < end; i++) {
        compar++
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = temp
          swaps++
          swapped = true
        }
      }

      if (!swapped) break
      end--

      swapped = false

      for (let i = end; i > start; i--) {
        compar++
        if (arr[i - 1] > arr[i]) {
          let temp = arr[i - 1]
          arr[i - 1] = arr[i]
          arr[i] = temp
          swaps++
          swapped = true
        }
      }
      start++
    } while (swapped)
    return { sortedArr: arr, compar, swaps }
  }

  let result = getCocktailShakerSort(randomNumbersArray)



  document.write(`<p>Sorted array ${result.sortedArr}</p>`)
  document.write(`<p>Number of comparisons ${result.compar}</p>`)
  document.write(`<p>Number of swaps ${result.swaps}</p>`)
  document.write(`<hr>`)





  //=======================================================================================================================================================
}