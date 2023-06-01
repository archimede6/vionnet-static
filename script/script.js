let images = ['assets/00.jpg','assets/01.jpg','assets/02.jpg','assets/03.jpg','assets/04.jpeg','assets/05.jpeg','assets/06.jpeg'];
let imagesLenght = images.length;
let randomNumber = Math.random();
randomNumber = randomNumber*imagesLenght;
randomNumber = Math.floor(randomNumber);
let chosenImage = images [randomNumber];
vionnetImages.src = chosenImage;

var desktop = true;

var hoverWrapper = document.getElementById("hoverWrapper")
var imageVionnet = document.getElementById("vionnetImages")
var logo = document.getElementById("vionnetLogo")
var contactsWrapper = document.getElementById("contactsWrapper")




    // if (window.innerWidth < 989) {
    //     console.log("mobile")
    //     imageVionnet.addEventListener("click", function() {
    //         imageVionnet.classList.add("hidden")
    //         logo.classList.remove("hidden")
    //         contactsWrapper.classList.remove("hidden")
    //     })
    // } else {
    //     console.log("desktop")
    //     imageVionnet.addEventListener("mouseover", function() {
    //         //console.log("mouseover")
    //         imageVionnet.classList.add("hidden")
    //         logo.classList.remove("hidden")
    //         contactsWrapper.classList.remove("hidden")
    //     })

    //     hoverWrapper.addEventListener("mouseleave", function() {
    //         //console.log("mouseover")
    //         imageVionnet.classList.remove("hidden")
    //         logo.classList.add("hidden")
    //         contactsWrapper.classList.add("hidden")
    //     })
    // }

