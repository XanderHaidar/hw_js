`use strict`

function createBanner(image, title, link) {
  document.write(`<h1>${title}</h1><a href="${link}"><img src="${image}" alt="JS"></a>`)
}
const title = `Java Script`
const image = `./img/js2.jfif`
const link = `https://w3schoolsua.github.io/js/index.html#gsc.tab=0`
createBanner(image, title, link)





