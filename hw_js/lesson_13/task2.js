`use strict`


if (confirm(`Start testing`)) {
  //======================================================================================================================================================

  let pilots = [`Lewis`, `Michael`, `Mika`, `Ayrton`]

  function generatePermutations(arr) {
    let result = []

    function auxiliaryFunc(subset, remain) {
      if (remain.length === 0)
        result.push([...subset])

      for (let i = 0; i < remain.length; i++) {
        subset.push(remain[i])
        let newRemain = remain.slice(0, i).concat(remain.slice(i + 1))
        auxiliaryFunc(subset, newRemain)
        subset.pop()
      }
    }
    auxiliaryFunc([], arr)
    return result
  }

  let permutations = generatePermutations(pilots)

  console.log(`All possible outcomes of the competition:`)
  permutations.forEach((permutation, index) => {
    console.log(`${index + 1}:${permutation}`)
  })






















  //=======================================================================================================================================================
}