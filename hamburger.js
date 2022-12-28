let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".navlinks");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle('lock-scroll');

});