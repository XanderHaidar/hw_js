`use strict`


if (confirm(`Start testing`)) {
  //=======================================================================================================================================================

  function getLetterIterator(word) {
    let curIndex = 0

    return function () {
      if (curIndex < word.length) {
        return word[curIndex++]
      } else return null
    }
  }

  function translator(word, description) {
    let guessedLetters = 0
    let nextLetter = getLetterIterator(word)

    alert(`Description: ${description}`)
    alert(`Enter the translation letter by letter`)

    for (let i = 0; i < word.length; i++) {
      let curLetter = nextLetter()
      if (curLetter === null) break

      let userInput = prompt(`Enter the letter number${i + 1}`)
      if (userInput === curLetter)
        guessedLetters++
    }
    alert(`The number of guessed letters is ${guessedLetters} out of ${word.length}`)
  }

  let word = `capital`
  let description = `Столиця англійською мовою`

  translator(word, description)


  //=======================================================================================================================================================
}

