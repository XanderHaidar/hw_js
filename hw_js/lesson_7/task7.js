`use strict`

function showRandomImage(image1, image2, image3, image4) {

  let randomImage = Math.floor(Math.random() * 4) + 1
  let selectImage

  switch (randomImage) {
    case 1:
      selectImage = image1
      break;

    case 2:
      selectImage = image2
      break;

    case 3:
      selectImage = image3
      break;

    case 4:
      selectImage = image4
      break;

  }

  document.write(`<img src="${selectImage}" alt="random_img">`)
}

showRandomImage(`./img/js1.png`, `./img/js2.jfif`, `./img/js3.jpeg`, `./img/js4.jpg`)






