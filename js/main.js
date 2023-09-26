/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-up class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link");
const navToggler = document.querySelector(".navbar-toggler");
const linkAction = () => {
  const navMenu = document.getElementById("main");
  // When we click on each nav__link, we remove the show-menu class
  navToggler.classList.toggle("collapsed");
  navToggler.setAttribute("aria-expanded", "false");
  navMenu.classList.remove("show");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

