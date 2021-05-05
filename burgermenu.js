const burger = document.querySelector('div.hamburger');
const menu = document.querySelector('ul.menu-items');

burger.addEventListener("click", () => {
  console.log(menu);
  menu.classList.toggle("show_menu")
})