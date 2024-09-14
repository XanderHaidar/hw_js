`use strict`


if (confirm(`Start testing`)) {
  //=======================================================================================================================================================

  let randomNamesArr = [`Cersei`, `Ilyn`, `Hound`, `Joffrey`, `Meryn`, `Walder`, `Tywin`, `Olga`]

  function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (arr[mid] === target) {
        return mid
      }
      if (arr[mid] < target) {
        left = mid + 1
      } else right = mid - 1
    }
    return -1
  }

  randomNamesArr.sort()

  document.write(`<p>Sorted array: ${randomNamesArr}</p>`)

  let targetName = `Olga`
  let index = binarySearch(randomNamesArr, targetName)
  if (index !== -1) {
    document.write(`Name ${targetName} found at index ${index} `)
  } else document.write(`Name ${targetName} not found in the array`)


  //=======================================================================================================================================================
}