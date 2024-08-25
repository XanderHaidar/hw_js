`use strict`


if (confirm(`Start testing`)) {
  function userNumberOfElement() {
    let numElements = parseInt(prompt(`Enter number of elements`))
    return numElements
  }

  function getHalfArray(length) {
    let array = new Array(length)
    let halfArray = Math.floor(length / 2)

    for (let i = 0; i < length; i++) {
      if (i < halfArray) {
        array[i] = 1
      } else {
        array[i] = 7
      }
    }

    return array
  }


  function result() {
    let numElements = userNumberOfElement()
    let array = getHalfArray(numElements)
    alert(array)
  }

  result()
}
