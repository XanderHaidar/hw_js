`use strict`


if (confirm(`Start testing`)) {
  const names = [`Joffrey`, `Cersei`, `Meryn`, `Ilin`, `Walder`, `Hound`, `Tywin`]

  let firstLetter = names.map(name => name[0])

  document.write(firstLetter)

}