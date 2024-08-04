`use strict`
// Step_0-Designation of values:
// firstChildName
// secondChildName
// firstChildCandies
// secondChildCandies
// Step_1-Entering values
let firstChildName = prompt(`Enter the name of the first child`, `Kevin`)
let secondChildName = prompt(`Enter the name of the second child`, `Anakin`)
let firstChildCandies = parseInt(prompt(`Enter the number of candies for the first child`, `30`))
let secondChildCandies = parseInt(prompt(`Enter the number of candies for the second child`, `0`))
// Step_2-Calculation
if (firstChildCandies > secondChildCandies)
  // Step_3-To display 
  document.write(`<p>${firstChildName} have more candies</p>`)

else if (secondChildCandies > firstChildCandies)
  // Step_3-To display 
  document.write(`<p>${secondChildName} have more candies</p>`)

else
  // Step_3-To display 
  document.write(`<p>${secondChildName} and ${firstChildName} have same amount of candies</p>`)
