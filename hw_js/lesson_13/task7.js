`use strict`


if (confirm(`Start testing`)) {
  //=======================================================================================================================================================

  function additionTrainer() {
    alert(`Addition trainer launched! You will be given problems every 10 seconds`)

    function getRandomExample() {
      let num1 = Math.floor(Math.random() * 10)
      let num2 = Math.floor(Math.random() * 10)
      let correctAnswer = num1 + num2
      let userAnswer = prompt(`What is ${num1} + ${num2}`)

      if (parseInt(userAnswer) === correctAnswer) alert(`Correct`)
      else alert(`Incorrect! The correct answer : ${correctAnswer}`)
    }
    setInterval(getRandomExample, 10000)
  }

  additionTrainer()

  //=======================================================================================================================================================
}