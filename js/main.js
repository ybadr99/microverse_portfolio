const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-nav-items");
const navItem = document.querySelectorAll('.nav-item');

menuIcon.addEventListener('click',()=>{
  console.log('clicked!')
  menuIcon.classList.toggle('active')
  mobileMenu.classList.toggle('active')
  document.body.classList.toggle('hidden-flow')
  })
  
  navItem.forEach(n=>{
  n.addEventListener('click',()=>{
  menuIcon.classList.remove('active')
  mobileMenu.classList.remove('active')
  document.body.classList.remove('hidden-flow')
  })
});
  