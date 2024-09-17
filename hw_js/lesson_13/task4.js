`use strict`


if (confirm(`Start testing`)) {
  //=======================================================================================================================================================

  let boys = [`Chandler Bing`, `Joey Tribbiani`, `Ross Geller`]
  let girls = [`Rachel Green`, `Monica Geller`, `Phoebe Buffay`]

  function genDancePairs(boys, girls, curPairs = []) {
    // let curPairs = []

    if (boys.length === 0 || girls.length === 0) {
      console.log(curPairs.join(`|`))
      return
    }

    for (let i = 0; i < girls.length; i++) {
      let remGirls = girls.slice(0, i).concat(girls.slice(i + 1))
      let nextBoy = boys[0]
      let remBoys = boys.slice(1)

      let newPairs = [...curPairs, `${nextBoy} and ${girls[i]}`]

      genDancePairs(remBoys, remGirls, newPairs)
    }
  }

  console.log(`Possible dance pairs`)
  genDancePairs(boys, girls)

  //=======================================================================================================================================================
}