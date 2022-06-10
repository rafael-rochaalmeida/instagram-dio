const imgAnimation = document.querySelector(".img-animation");

console.log(imgAnimation);

let nameImg = "insta-animation-img"
let path = "./img/";
let contador = 1;
setInterval(() => {
    imgAnimation.classList.toggle("active");
    imgAnimation.src = `${path}${nameImg}${contador}.png`;
    if (contador == 4) contador = 0;
    contador++;
}, 2000)