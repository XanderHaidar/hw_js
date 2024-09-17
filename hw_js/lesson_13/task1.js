`use strict`


if (confirm(`Start testing`)) {
  //=======================================================================================================================================================

  function generateSubsets(arr) {
    let result = []

    function backtrack(subset, index) {
      result.push([...subset])

      for (let i = index; i < arr.length; i++) {
        subset.push(arr[i])
        backtrack(subset, i + 1)
        subset.pop()
      }
    }
    backtrack([], 0)
    return result
  }

  let subset = generateSubsets([1, 2, 3])
  console.log(subset);

  //=======================================================================================================================================================
}