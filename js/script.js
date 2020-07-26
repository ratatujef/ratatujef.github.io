window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  let burger = document.querySelector(".humburger"),
    project = document.querySelector(".project");

  burger.addEventListener("click", () => {
    if (burger.classList.contains("humburger_active")) {
      burger.classList.remove("humburger_active");
      project.classList.remove("project_active");
    } else {
      burger.classList.add("humburger_active");
      project.classList.add("project_active");
    }
  });
});
