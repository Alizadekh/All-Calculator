// Make Mobile Navbar events
const burgerMenu = document.querySelector(".burger-menu");
const menuContent = document.querySelector(".container");
const closeMenuBtn = document.getElementById("closeBtn");

const openMenu = function () {
  menuContent.style.transform = "translateX(0px)";
  burgerMenu.style.display = "none";
};
const closeMenu = () => {
  menuContent.style.transform = "translateX(-500px)";
  burgerMenu.style.display = "block";
};

burgerMenu.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);  
