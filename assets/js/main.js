const loaderEl = document.querySelector(".loader");
const contentEl = document.querySelector(".content");

let removeLoader;

const displayContent = function () {
  removeLoader = setTimeout(() => {
    loaderEl.style.display = "none";
    contentEl.style.display = "block";
  }, 2500);
};

document.addEventListener("DOMContentLoaded", displayContent);

// const navbarEl = document.getElementById("navbar-cta");
// const toggleMenu = () => navbarEl.classList.toggle("hidden");
