const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");

menuButton?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navMenu?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navMenu.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});
