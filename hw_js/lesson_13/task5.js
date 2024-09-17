`use strict`


if (confirm(`Start testing`)) {
  //=======================================================================================================================================================

  function getIterator(min, max) {
    let current = min - 1

    return function () {
      current++
      if (current > max) {
        current = min
      }
      return current
    }
  }

  let month = getIterator(1, 12)

  console.log(`Enumeration of month numbers`)
  for (let i = 0; i < 24; i++) {
    console.log(month())

  }

  //=======================================================================================================================================================
}