`use strict`


if (confirm(`Start testing`)) {
  //=======================================================================================================================================================

  let randomNamesArr = [`Cersei`, `Ilyn`, `Hound`, `Joffrey`, `Meryn`, `Walder`, `Tywin`, `Olga`]

  function getSearchByLength(arr, targetLength) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      midLength = arr[mid].length

      if (midLength === targetLength) {
        return mid
      }
      if (midLength < targetLength) {
        left = mid + 1
      } else right = mid - 1
    }
    return -1
  }

  randomNamesArr.sort((a, b) => a.length - b.length)

  let targetLength = 5
  let index = getSearchByLength(randomNamesArr, targetLength)

  if (index !== -1) {
    document.write(`<p>A name with a length of ${targetLength} characters was found at index: ${index} (${randomNamesArr[index]})</p>`)
  } else document.write(`A name with a length of ${targetLength} characters was not found in the array`)

  //=======================================================================================================================================================
}