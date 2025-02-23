// STICKY NAV BAR
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80);
})

// RESPONSIVE NAV BAR MENU
let navMenu = document.querySelector('#navmenu');
let navBar = document.querySelector('.nav-bar');

navMenu.onclick = () => {
    navMenu.classList.toggle('bi-x');
    navBar.classList.toggle('open')
};

window.onscroll = () => {
    navMenu.classList.remove('bi-x');
    navBar.classList.remove('open');
};

//ANIMATE ON SCROLL (AOS)
AOS.init();