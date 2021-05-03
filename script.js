//Selectors
const hamburger = document.querySelector(".hamburger-menu");
const nav = document.querySelector("NAV");
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
  navMenu.classList.toggle("menu-active");
  nav.classList.toggle("nav-active");
  span.classList.toggle("span-active");
  hamburgerAnimation();
});

homeButton.addEventListener("click", function () {
  alert.style.display = "block";
});
window.addEventListener("scroll", function () {
  navMenu.classList.remove("menu-active");
  nav.classList.remove("nav-active");
  span.classList.remove("span-active");
  firstLine.classList.remove("ln-anm1");
  secondLine.classList.remove("ln-anm2");
  thirdLine.classList.remove("ln-anm3");

  //testing features
  const scrollpos = window.scrollY; // window scroll position
  let positionNeeded = 685; // as soon as element touches bottom with offset event starts

  if (scrollpos >= positionNeeded) {
    loadAnimation();
    nav.classList.add("stick-top");
  } else if (scrollpos < positionNeeded) {
    nav.classList.remove("stick-top");
  }
});
link.forEach((element) => {
  element.addEventListener("click", function () {
    navMenu.classList.remove("menu-active");
    nav.classList.remove("nav-active");
    span.classList.remove("span-active");
    firstLine.classList.remove("ln-anm1");
    secondLine.classList.remove("ln-anm2");
    thirdLine.classList.remove("ln-anm3");
  });
});

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
