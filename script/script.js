let images = ['assets/00.jpg','assets/01.jpg','assets/02.jpg','assets/03.jpg','assets/04.jpeg','assets/05.jpeg','assets/06.jpeg'];
let imagesLenght = images.length;
let randomNumber = Math.random();
randomNumber = randomNumber*imagesLenght;
randomNumber = Math.floor(randomNumber);
let chosenImage = images [randomNumber];
vionnetImages.src = chosenImage;