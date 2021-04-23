//Selectors
const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".navbar-menu");
const span = document.querySelector(".special-character");
const homeButton = document.querySelector(".home-btn");
const alert = document.querySelector(".alert");
const link = document.querySelectorAll("A");
const logo = document.querySelector(".navbar-logo");
const about = document.querySelector(".about");
const firstLine = document.querySelector(".ln-1");
const secondLine = document.querySelector(".ln-2");
const thirdLine = document.querySelector(".ln-3");

//Events
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("nav-active");
  span.classList.toggle("span-active");
  hamburgerAnimation();
});

homeButton.addEventListener("click", function () {
  alert.style.display = "block";
});

link.forEach((element) => {
  element.addEventListener("click", function () {
    navMenu.classList.remove("nav-active");
    span.classList.remove("span-active");
    firstLine.classList.remove("ln-anm1");
    secondLine.classList.remove("ln-anm2");
    thirdLine.classList.remove("ln-anm3");
  });
});
//For mobile move
about.addEventListener("touchmove", loadAnimation);
//For computer move
about.addEventListener("mouseover", loadAnimation);

//functions

function loadAnimation() {
  const firstLoad = document.querySelector(".load-1");
  const secondLoad = document.querySelector(".load-2");
  const thirdLoad = document.querySelector(".load-3");

  firstLoad.classList.add("load-first");
  secondLoad.classList.add("load-second");
  thirdLoad.classList.add("load-third");
}
function hamburgerAnimation() {
  firstLine.classList.toggle("ln-anm1");
  secondLine.classList.toggle("ln-anm2");
  thirdLine.classList.toggle("ln-anm3");
}
