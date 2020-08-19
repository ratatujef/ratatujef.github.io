window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const burger = document.querySelector(".humburger"),
    project = document.querySelector(".project"),
    contact = document.querySelector(".header__name"),
    overlay = document.querySelector(".overlay");

  burger.addEventListener("click", () => {
    if (burger.classList.contains("humburger_active")) {
      burger.classList.remove("humburger_active");
      project.classList.remove("project_active");
    } else {
      burger.classList.add("humburger_active");
      project.classList.add("project_active");
    }
  });
  contact.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.classList.toggle("overlay_active");
  });

  overlay.addEventListener("click", (e) => {
    if (e.target == overlay) overlay.classList.toggle("overlay_active");
  });
});
