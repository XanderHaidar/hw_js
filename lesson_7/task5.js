`use strict`

function centimetersAndInches(quantityCentimeters) {
  return quantityCentimeters / 2.54
}

function kilogramsAndPounds(quantityKilograms) {
  return quantityKilograms * 2.20
}

function kilometersAndMiles(quantityKilometers) {
  return quantityKilometers * 0.621371
}


let quantityCentimeters = parseFloat(prompt(`Enter amount of centimeter`))
let quantityKilograms = parseFloat(prompt(`Enter amount of kilograms`))
let quantityKilometers = parseFloat(prompt(`Enter amount of kilometers`))

document.write(`<p>${quantityCentimeters} centimeters is equal to ${centimetersAndInches(quantityCentimeters)} inches</p> `)
document.write(`<p>${quantityKilograms} kilograms is equal to ${kilogramsAndPounds(quantityKilograms)} pounds </p>`)
document.write(`<p>${quantityKilometers} kilometers is equal to ${kilometersAndMiles(quantityKilometers)} miles</p> `)


