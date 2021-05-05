const burger = document.querySelector('div.hamburger');
const menu = document.querySelector('ul.menu-items');
const menuList = document.querySelectorAll('ul.menu-items > li');

burger.addEventListener("click", () => {
  menu.classList.toggle("show_menu");
  menuList.forEach((li) => {
    li.onclick = function(){
      menu.classList.remove("show_menu");
  }
  })
})