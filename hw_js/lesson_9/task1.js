`use strict`


if (confirm(`Start testing`)) {


  function userNumberOfElement() {
    let numElements = parseInt(prompt(`Enter number of elements`))
    return numElements
  }

  function arrayWithZero(lenght) {
    return new Array(lenght).fill(0)
  }

  function result() {
    let numElements = userNumberOfElement()
    let array = arrayWithZero(numElements)
    alert(array)
  }


  result()

}