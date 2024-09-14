`use strict`


if (confirm(`Start testing`)) {
  //=======================================================================================================================================================
  // Insertion_sort
  console.log(`=================Insertion_sort=======================`)
  let randomNumbersArr = [3, 5, 1, 4, 2]

  function insertionSortWithSteps(arr) {
    let compar = 0
    let swaps = 0

    console.log(`Initial array: ${arr}`)

    for (let i = 1; i < arr.length; i++) {
      let current = arr[i]
      let j = i - 1
      console.log(`Insertion of an element ${current}:`);

      while (j >= 0 && arr[j] > current) {
        compar++
        arr[j + 1] = arr[j]
        swaps++
        j--

        console.log(`Step ${swaps}: ${arr} (Зсув елемента)`)
      }

      arr[j + 1] = current

      console.log(`After insertion: ${arr}`)
    }

    return { sortedArr: arr, compar, swaps }
  }

  let res = insertionSortWithSteps(randomNumbersArr)

  console.log(`Sorted arrea: ${res.sortedArr}`)
  console.log(`Number of comparisons: ${res.compar}`)
  console.log(`Number of swaps: ${res.swaps}`)

  // Bubble_sort
  console.log(`=================Bubble_sort=======================`)

  let randomNumbersArray = [3, 5, 1, 4, 2]

  function bubbleSortWithSteps(arr) {
    let comparisons = 0
    let swaps = 0
    let n = arr.length

    console.log(`Initial array: ${arr}`)

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        comparisons++

        if (arr[j] > arr[j + 1]) {
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
          swaps++

          console.log(`Step ${swaps}: ${arr} (Swap of elements arr[${j}] and arr[${j + 1}])`)
        }
      }
    }

    return { sortedArr: arr, comparisons, swaps }
  }

  let result = bubbleSortWithSteps(randomNumbersArray)

  console.log(`Sorted arrea: ${result.sortedArr}`)
  console.log(`Number of comparisons: ${result.compar}`)
  console.log(`Number of swaps: ${result.swaps}`)

  // Cocktail_shaker_sort
  console.log(`=================Cocktail_shaker_sort=======================`)

  let randomNumArray = [3, 5, 1, 4, 2]

  function cocktailShakerSortWithSteps(arr) {
    let comparisons = 0
    let swaps = 0
    let swapped
    let start = 0
    let end = arr.length - 1

    console.log(`Initial array: ${arr}`)

    do {
      swapped = false

      for (let i = start; i < end; i++) {
        comparisons++
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = temp
          swaps++
          swapped = true

          console.log(`Step ${swaps} (From left to right): ${arr} (Swap of elements arr[${i}] і arr[${i + 1}])`)
        }
      }

      end--

      if (!swapped) break

      swapped = false

      for (let i = end; i > start; i--) {
        comparisons++
        if (arr[i - 1] > arr[i]) {
          let temp = arr[i - 1]
          arr[i - 1] = arr[i]
          arr[i] = temp
          swaps++
          swapped = true

          console.log(`Step ${swaps} (From right to left): ${arr} (Swap of elements arr[${i - 1}] і arr[${i}])`)
        }
      }

      start++

    } while (swapped)

    return { sortedArr: arr, comparisons, swaps }
  }

  let output = cocktailShakerSortWithSteps(randomNumArray)

  console.log(`Sorted array: ${output.sortedArr}`)
  console.log(`Number of comparisons: ${output.comparisons}`)
  console.log(`Number of swaps: ${output.swaps}`)




  //=======================================================================================================================================================
}