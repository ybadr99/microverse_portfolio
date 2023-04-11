const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-nav-items");
const navItem = document.querySelectorAll(".nav-item");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  document.body.classList.toggle("hidden-flow");
});

navItem.forEach((n) => {
  n.addEventListener("click", () => {
    menuIcon.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.body.classList.remove("hidden-flow");
  });
});

// Get the modal
const modal = document.querySelector("#myModal");
// Get the button that opens the modal
const btn = document.querySelector(".seeproject");
// Get the <span> element that closes the modal
const close = document.querySelector(".close");
// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <close> (x), close the modal
close.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
