'use strict'
// Вводемо дані
let a = parseInt(prompt(`Please,enter number A`, `0`))
let b = parseInt(prompt(`Please,enter number B`, `0`))
let c = parseInt(prompt(`Please,enter number C`, `0`))
// Виводемо дані 
document.write(`<h2>Your numbers A=${a},B=${b},C=${c}</h2>`)
// Знаходимо результат
let s1 = a + 12 + b
let s2 = Math.sqrt((a + b) / (2 * a))
let s3 = Math.cbrt((a + b) * c)
let s4 = Math.sin(a / -b)
// Виводимо результат
document.write(`<ol><li>S1=${s1}</li><li>S2=${s2}</li><li>S3=${s3}</li><li>S4=${s4}</li></ol>`)