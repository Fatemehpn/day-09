// Main Navigation Toggle
const button = document.getElementById("main-nav-button");
const links = document.getElementById("main-nav-list");

button.addEventListener("click", () => {
    links.classList.toggle("toggled");
});

// Thumb Navigation Toggle
const seeMoreBtn = document.getElementById("thumb-nav-button");
const thumbNav = document.getElementById("thumb-nav-secondary");

seeMoreBtn.addEventListener("click", function () {
    thumbNav.classList.toggle("toggled");
});
