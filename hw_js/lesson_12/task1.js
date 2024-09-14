`use strict`


if (confirm(`Start testing`)) {
  //=======================================================================================================================================================

  let randomNumbersArray = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100))

  function getBibbleSort(arr) {
    let compar = 0
    let swaps = 0
    let swapped
    let q = arr.length

    do {
      swapped = false
      for (let i = 0; i < q - 1; i++) {
        compar++
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = temp
          swaps++
          swapped = true
        }
      }
      q--
    } while (swapped)
    return { sortedArr: arr, compar, swaps }
  }

  let result = getBibbleSort(randomNumbersArray)

  document.write(`<p>Sorted array ${result.sortedArr}</p>`)
  document.write(`<p>Number of comparisons ${result.compar}</p>`)
  document.write(`<p>Number of swaps ${result.swaps}</p>`)
  document.write(`<hr>`)


  //=======================================================================================================================================================
}