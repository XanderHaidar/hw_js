`use strict`


if (confirm(`Start testing`)) {
  let carNumbers = [`AX8248IT`, `AX3801CI`, `VI2335EA`, `KA7777AK`, `S12S`, `111A`]
  let filterCarNumbers = []

  carNumbers.forEach(number => {
    if (number.startsWith(`A`)) {
      filterCarNumbers.push(number)
    }
  })

  document.write(`<p>${filterCarNumbers}</p>`)


}