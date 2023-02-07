window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header_list"),
    menuItem = document.querySelectorAll(".header_list-item"),
    burger = document.querySelector(".header_nav-burger");

  burger.addEventListener("click", () => {
    burger.classList.toggle("header_nav-burger__active");
    menu.classList.toggle("header_list__active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      burger.classList.toggle("header_nav-burger__active");
      menu.classList.toggle("header_list__active");
    });
  });
});
