`use strict`


if (confirm(`Start testing`)) {
  function userNumberOfElement() {
    let numElements = parseInt(prompt(`Enter number of elements`))
    return numElements
  }

  function getArr(length) {
    let array = new Array(length)

    for (let i = 0; i < length; i++) {
      if (i < 5) {
        array[i] = 1
      } else {
        array[i] = 7
      }
    }

    return array
  }


  function result() {
    let numElements = userNumberOfElement()
    let array = getArr(numElements)
    alert(array)
  }

  result()
}