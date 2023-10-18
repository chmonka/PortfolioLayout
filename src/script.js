const menuCrazyHamburger = document.querySelector(".button-menu")
const navLinks = document.querySelector(".menu-header")

menuCrazyHamburger.addEventListener('click', () => { navLinks.classList.toggle('mobile-menu') })