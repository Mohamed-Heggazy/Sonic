let i = document.querySelectorAll("i");
let link = document.querySelectorAll("link");

// console.log(i[1]);
// console.log(link[2].href);

function DarkLightMode() {
  if (i[1].classList.contains("fa-moon")) {
    link[2].href = "./assets/css/main.css";
    i[1].classList.replace("fa-moon", "fa-sun");
    document.images[0].src = "./assets/images/pngegg.png";
  } else {
    link[2].href = "./assets/css/light.css";
    i[1].classList.replace("fa-sun", "fa-moon");
    document.images[0].src = "./assets/images/hero_image.png";
  }
}

i[1].addEventListener("click", DarkLightMode);
