//Selectors
const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".navbar-menu");
const span = document.querySelector(".special-character");
const homeButton = document.querySelector(".home-btn");
const alert = document.querySelector(".alert");
const link = document.querySelectorAll("A");

//Events
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("nav-active");
  span.classList.toggle("span-active");
});

homeButton.addEventListener("click", function () {
  alert.style.display = "block";
});

link.forEach((element) => {
  element.addEventListener("click", function () {
    navMenu.classList.remove("nav-active");
    span.classList.remove("span-active");
  });
});
