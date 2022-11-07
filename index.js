const navbar = document.querySelector("nav");
const openMenu = document.getElementById("opening");
const closeMenu = document.getElementById("closer");

openMenu.addEventListener("click", () => {
navbar.classList.add("open");
});

closeMenu.addEventListener("click", () => {
navbar.classList.remove("open");
});