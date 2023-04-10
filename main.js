const mobileIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-nav-items");

mobileIcon.addEventListener("click", function () {
  mobileIcon.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});
