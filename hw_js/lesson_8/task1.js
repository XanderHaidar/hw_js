`use strict`

const studentsNames = [`Joffrey`, `Cersei`, `Meryn`, `Ilin`, `Ivan`, `Walder`, `Hound`, `Ivan`, `Tywin`, `Ivan`]
let count = 0

for (let i = 0; i < studentsNames.length; i++) {
  if (studentsNames[i] === `Ivan`) {
    count++
  }
}

document.write(`<p>The name Ivan occurs ${count} times</p>`)





