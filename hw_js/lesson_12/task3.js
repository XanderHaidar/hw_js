`use strict`


if (confirm(`Start testing`)) {
  //=======================================================================================================================================================

  let randomNumbersArray = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100))

  function getInsertSort(arr) {
    let compar = 0
    let swaps = 0

    for (let i = 0; i < arr.length; i++) {
      let current = arr[i]
      let j = i - 1

      while (j >= 0 && arr[j] > current) {
        compar++
        arr[j + 1] = arr[j]
        swaps++
        j--
      }
      compar++
      arr[j + 1] = current
    }
    return { sortedArr: arr, compar, swaps }
  }

  let result = getInsertSort(randomNumbersArray)

  document.write(`<p>Sorted array ${result.sortedArr}</p>`)
  document.write(`<p>Number of comparisons ${result.compar}</p>`)
  document.write(`<p>Number of swaps ${result.swaps}</p>`)
  document.write(`<hr>`)


  //=======================================================================================================================================================
}