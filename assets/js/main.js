const loaderEl = document.querySelector(".loader");
const contentEl = document.querySelector(".content");

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    loaderEl.style.display = "none";
    contentEl.style.display = "block";
  }, 2500);
});
